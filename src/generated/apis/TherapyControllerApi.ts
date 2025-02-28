// tslint:disable
/**
 * OH 2.0 Api Documentation
 * OH 2.0 Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    MedicalDTO,
    TherapyDTO,
    TherapyRowDTO,
} from '../models';

export interface DeleteAllTherapiesUsingDELETERequest {
    codePatient: number;
}

export interface GetMedicalsOutOfStockUsingPOSTRequest {
    therapyDTOs: Array<TherapyDTO>;
}

export interface GetTherapiesUsingPOSTRequest {
    thRowDTOs: Array<TherapyRowDTO>;
}

export interface GetTherapyRowsUsingGETRequest {
    codePatient: number;
}

export interface GetTherapyUsingPOSTRequest {
    thRowDTO: TherapyRowDTO;
}

export interface NewTherapyUsingPOSTRequest {
    thRowDTO: TherapyRowDTO;
}

export interface ReplaceTherapiesUsingPOSTRequest {
    thRowDTOs: Array<TherapyRowDTO>;
}

/**
 * no description
 */
export class TherapyControllerApi extends BaseAPI {

    /**
     * deleteAllTherapies
     */
    deleteAllTherapiesUsingDELETE({ codePatient }: DeleteAllTherapiesUsingDELETERequest): Observable<boolean>
    deleteAllTherapiesUsingDELETE({ codePatient }: DeleteAllTherapiesUsingDELETERequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteAllTherapiesUsingDELETE({ codePatient }: DeleteAllTherapiesUsingDELETERequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(codePatient, 'codePatient', 'deleteAllTherapiesUsingDELETE');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<boolean>({
            url: '/therapies/{code_patient}'.replace('{code_patient}', encodeURI(codePatient)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getMedicalsOutOfStock
     */
    getMedicalsOutOfStockUsingPOST({ therapyDTOs }: GetMedicalsOutOfStockUsingPOSTRequest): Observable<Array<MedicalDTO>>
    getMedicalsOutOfStockUsingPOST({ therapyDTOs }: GetMedicalsOutOfStockUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<MedicalDTO>>>
    getMedicalsOutOfStockUsingPOST({ therapyDTOs }: GetMedicalsOutOfStockUsingPOSTRequest, opts?: OperationOpts): Observable<Array<MedicalDTO> | RawAjaxResponse<Array<MedicalDTO>>> {
        throwIfNullOrUndefined(therapyDTOs, 'therapyDTOs', 'getMedicalsOutOfStockUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<MedicalDTO>>({
            url: '/therapies/meds-out-of-stock',
            method: 'POST',
            headers,
            body: therapyDTOs,
        }, opts?.responseOpts);
    };

    /**
     * getTherapies
     */
    getTherapiesUsingPOST({ thRowDTOs }: GetTherapiesUsingPOSTRequest): Observable<Array<TherapyDTO>>
    getTherapiesUsingPOST({ thRowDTOs }: GetTherapiesUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<TherapyDTO>>>
    getTherapiesUsingPOST({ thRowDTOs }: GetTherapiesUsingPOSTRequest, opts?: OperationOpts): Observable<Array<TherapyDTO> | RawAjaxResponse<Array<TherapyDTO>>> {
        throwIfNullOrUndefined(thRowDTOs, 'thRowDTOs', 'getTherapiesUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<TherapyDTO>>({
            url: '/therapies/from-rows',
            method: 'POST',
            headers,
            body: thRowDTOs,
        }, opts?.responseOpts);
    };

    /**
     * getTherapyRows
     */
    getTherapyRowsUsingGET({ codePatient }: GetTherapyRowsUsingGETRequest): Observable<Array<TherapyRowDTO>>
    getTherapyRowsUsingGET({ codePatient }: GetTherapyRowsUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<TherapyRowDTO>>>
    getTherapyRowsUsingGET({ codePatient }: GetTherapyRowsUsingGETRequest, opts?: OperationOpts): Observable<Array<TherapyRowDTO> | RawAjaxResponse<Array<TherapyRowDTO>>> {
        throwIfNullOrUndefined(codePatient, 'codePatient', 'getTherapyRowsUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<TherapyRowDTO>>({
            url: '/therapies/{code_patient}'.replace('{code_patient}', encodeURI(codePatient)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getTherapy
     */
    getTherapyUsingPOST({ thRowDTO }: GetTherapyUsingPOSTRequest): Observable<TherapyDTO>
    getTherapyUsingPOST({ thRowDTO }: GetTherapyUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<TherapyDTO>>
    getTherapyUsingPOST({ thRowDTO }: GetTherapyUsingPOSTRequest, opts?: OperationOpts): Observable<TherapyDTO | RawAjaxResponse<TherapyDTO>> {
        throwIfNullOrUndefined(thRowDTO, 'thRowDTO', 'getTherapyUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<TherapyDTO>({
            url: '/therapies/from-row',
            method: 'POST',
            headers,
            body: thRowDTO,
        }, opts?.responseOpts);
    };

    /**
     * newTherapy
     */
    newTherapyUsingPOST({ thRowDTO }: NewTherapyUsingPOSTRequest): Observable<TherapyRowDTO>
    newTherapyUsingPOST({ thRowDTO }: NewTherapyUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<TherapyRowDTO>>
    newTherapyUsingPOST({ thRowDTO }: NewTherapyUsingPOSTRequest, opts?: OperationOpts): Observable<TherapyRowDTO | RawAjaxResponse<TherapyRowDTO>> {
        throwIfNullOrUndefined(thRowDTO, 'thRowDTO', 'newTherapyUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<TherapyRowDTO>({
            url: '/therapies',
            method: 'POST',
            headers,
            body: thRowDTO,
        }, opts?.responseOpts);
    };

    /**
     * replaceTherapies
     */
    replaceTherapiesUsingPOST({ thRowDTOs }: ReplaceTherapiesUsingPOSTRequest): Observable<boolean>
    replaceTherapiesUsingPOST({ thRowDTOs }: ReplaceTherapiesUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    replaceTherapiesUsingPOST({ thRowDTOs }: ReplaceTherapiesUsingPOSTRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(thRowDTOs, 'thRowDTOs', 'replaceTherapiesUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<boolean>({
            url: '/therapies/replace',
            method: 'POST',
            headers,
            body: thRowDTOs,
        }, opts?.responseOpts);
    };

}
