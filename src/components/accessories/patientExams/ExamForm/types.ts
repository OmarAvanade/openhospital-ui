import { LaboratoryDTO } from "../../../../generated";
import { TFields } from "../../../../libraries/formDataHandling/types";

interface IExamProps {
  fields: TFields<ExamFormFieldName>;
  onSubmit: (lab: LaboratoryDTO, rows: string[]) => void;
  submitButtonLabel: string;
  resetButtonLabel: string;
  isLoading: boolean;
  shouldResetForm: boolean;
  resetFormCallback: () => void;
}

export type ExamProps = IExamProps;

export type ExamFormFieldName =
  | "exam"
  | "date"
  | "material"
  | "result"
  | "note";
