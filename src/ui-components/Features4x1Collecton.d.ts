/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Features4x1Props } from "./Features4x1";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Features4x1CollectonOverridesProps = {
    Features4x1Collecton?: PrimitiveOverrideProps<FlexProps>;
    Features4x1Collecton37062798?: Features4x1Props;
} & EscapeHatchProps;
export declare type Features4x1CollectonProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Features4x1CollectonOverridesProps | undefined | null;
}>;
export default function Features4x1Collecton(props: Features4x1CollectonProps): React.ReactElement;
