/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Features4x1ColOverridesProps = {
    Features4x1Col?: PrimitiveOverrideProps<FlexProps>;
    "Frame 136"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type Features4x1ColProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Features4x1ColOverridesProps | undefined | null;
}>;
export default function Features4x1Col(props: Features4x1ColProps): React.ReactElement;
