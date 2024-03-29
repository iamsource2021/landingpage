/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AgendarConsultoria } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AgendarConsultoriaUpdateFormInputValues = {
    email?: string;
    mobile?: string;
    name?: string;
    start?: string;
    end?: string;
};
export declare type AgendarConsultoriaUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    mobile?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AgendarConsultoriaUpdateFormOverridesProps = {
    AgendarConsultoriaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    mobile?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AgendarConsultoriaUpdateFormProps = React.PropsWithChildren<{
    overrides?: AgendarConsultoriaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    agendarConsultoria?: AgendarConsultoria;
    onSubmit?: (fields: AgendarConsultoriaUpdateFormInputValues) => AgendarConsultoriaUpdateFormInputValues;
    onSuccess?: (fields: AgendarConsultoriaUpdateFormInputValues) => void;
    onError?: (fields: AgendarConsultoriaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AgendarConsultoriaUpdateFormInputValues) => AgendarConsultoriaUpdateFormInputValues;
    onValidate?: AgendarConsultoriaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AgendarConsultoriaUpdateForm(props: AgendarConsultoriaUpdateFormProps): React.ReactElement;
