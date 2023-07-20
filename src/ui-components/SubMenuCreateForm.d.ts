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
export declare type SubMenuCreateFormInputValues = {
    name?: string;
    link?: string;
};
export declare type SubMenuCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubMenuCreateFormOverridesProps = {
    SubMenuCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SubMenuCreateFormProps = React.PropsWithChildren<{
    overrides?: SubMenuCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SubMenuCreateFormInputValues) => SubMenuCreateFormInputValues;
    onSuccess?: (fields: SubMenuCreateFormInputValues) => void;
    onError?: (fields: SubMenuCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubMenuCreateFormInputValues) => SubMenuCreateFormInputValues;
    onValidate?: SubMenuCreateFormValidationValues;
} & React.CSSProperties>;
export default function SubMenuCreateForm(props: SubMenuCreateFormProps): React.ReactElement;
