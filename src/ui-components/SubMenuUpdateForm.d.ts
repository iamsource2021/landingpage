/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SubMenu } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SubMenuUpdateFormInputValues = {
    name?: string;
    link?: string;
    status?: string;
};
export declare type SubMenuUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubMenuUpdateFormOverridesProps = {
    SubMenuUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type SubMenuUpdateFormProps = React.PropsWithChildren<{
    overrides?: SubMenuUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    subMenu?: SubMenu;
    onSubmit?: (fields: SubMenuUpdateFormInputValues) => SubMenuUpdateFormInputValues;
    onSuccess?: (fields: SubMenuUpdateFormInputValues) => void;
    onError?: (fields: SubMenuUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubMenuUpdateFormInputValues) => SubMenuUpdateFormInputValues;
    onValidate?: SubMenuUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SubMenuUpdateForm(props: SubMenuUpdateFormProps): React.ReactElement;
