/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContentsCreateFormInputValues = {
    title?: string;
    description?: string;
    attributes?: string;
    status?: string;
};
export declare type ContentsCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    attributes?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContentsCreateFormOverridesProps = {
    ContentsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    attributes?: PrimitiveOverrideProps<TextAreaFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ContentsCreateFormProps = React.PropsWithChildren<{
    overrides?: ContentsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContentsCreateFormInputValues) => ContentsCreateFormInputValues;
    onSuccess?: (fields: ContentsCreateFormInputValues) => void;
    onError?: (fields: ContentsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContentsCreateFormInputValues) => ContentsCreateFormInputValues;
    onValidate?: ContentsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContentsCreateForm(props: ContentsCreateFormProps): React.ReactElement;
