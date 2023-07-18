/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Contents } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContentsUpdateFormInputValues = {
    title?: string;
    description?: string;
    attributes?: string;
    status?: string;
};
export declare type ContentsUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    attributes?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContentsUpdateFormOverridesProps = {
    ContentsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    attributes?: PrimitiveOverrideProps<TextAreaFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ContentsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContentsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contents?: Contents;
    onSubmit?: (fields: ContentsUpdateFormInputValues) => ContentsUpdateFormInputValues;
    onSuccess?: (fields: ContentsUpdateFormInputValues) => void;
    onError?: (fields: ContentsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContentsUpdateFormInputValues) => ContentsUpdateFormInputValues;
    onValidate?: ContentsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContentsUpdateForm(props: ContentsUpdateFormProps): React.ReactElement;
