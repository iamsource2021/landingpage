/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Resources } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardResourceOverridesProps = {
    CardResource?: PrimitiveOverrideProps<ViewProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."?: PrimitiveOverrideProps<TextProps>;
    "Feature AB"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardResourceProps = React.PropsWithChildren<Partial<ViewProps> & {
    resources?: Resources;
    handleContent?: (event: SyntheticEvent) => void;
} & {
    overrides?: CardResourceOverridesProps | undefined | null;
}>;
export default function CardResource(props: CardResourceProps): React.ReactElement;
