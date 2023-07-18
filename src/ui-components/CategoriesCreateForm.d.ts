/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CategoriesCreateFormInputValues = {
    name?: string;
    description?: string;
    status?: string;
};
export declare type CategoriesCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CategoriesCreateFormOverridesProps = {
    CategoriesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CategoriesCreateFormProps = React.PropsWithChildren<{
    overrides?: CategoriesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CategoriesCreateFormInputValues) => CategoriesCreateFormInputValues;
    onSuccess?: (fields: CategoriesCreateFormInputValues) => void;
    onError?: (fields: CategoriesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CategoriesCreateFormInputValues) => CategoriesCreateFormInputValues;
    onValidate?: CategoriesCreateFormValidationValues;
} & React.CSSProperties>;
export default function CategoriesCreateForm(props: CategoriesCreateFormProps): React.ReactElement;
