/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AgendarConsultoriaCreateFormInputValues = {
    email?: string;
    mobile?: string;
    name?: string;
    lifetime?: number;
    start?: string;
    end?: string;
};
export declare type AgendarConsultoriaCreateFormValidationValues = {
    email?: ValidationFunction<string>;
    mobile?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    lifetime?: ValidationFunction<number>;
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AgendarConsultoriaCreateFormOverridesProps = {
    AgendarConsultoriaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    mobile?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    lifetime?: PrimitiveOverrideProps<TextFieldProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AgendarConsultoriaCreateFormProps = React.PropsWithChildren<{
    overrides?: AgendarConsultoriaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AgendarConsultoriaCreateFormInputValues) => AgendarConsultoriaCreateFormInputValues;
    onSuccess?: (fields: AgendarConsultoriaCreateFormInputValues) => void;
    onError?: (fields: AgendarConsultoriaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AgendarConsultoriaCreateFormInputValues) => AgendarConsultoriaCreateFormInputValues;
    onValidate?: AgendarConsultoriaCreateFormValidationValues;
} & React.CSSProperties>;
export default function AgendarConsultoriaCreateForm(props: AgendarConsultoriaCreateFormProps): React.ReactElement;
