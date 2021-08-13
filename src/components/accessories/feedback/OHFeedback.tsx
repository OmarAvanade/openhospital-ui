import { Help } from "@material-ui/icons";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../../types";
import "./styles.scss";
const OHFeedback: FC = () => {
  const user = useSelector((state: IState) => state.main.authentication.data);
  jQuery.ajax({
    url: "?collectorId=53f7755c",
    type: "get",
    cache: true,
    dataType: "script",
  });
  (window as any).ATL_JQ_PAGE_PROPS = $.extend(
    (window as any).ATL_JQ_PAGE_PROPS,
    {
      // ==== custom trigger function ====
      triggerFunction: (showCollectorDialog: any) => {
        $("#feedback-button").on("click", (e) => {
          e.preventDefault();
          showCollectorDialog();
        });
      },
      // ==== we add the code below to set the field values ====
      fieldValues: {
        summary: "Give the summary here",
        description: "Describe your problem here",
        priority: "2",
        fullname: user?.displayName,
        email: "example@gmail.com",
      },
    }
  );
  return (
    <div className="feedback">
      <Help />
      <a id="feedback-button">Report feedback</a>
    </div>
  );
};

export default OHFeedback;
