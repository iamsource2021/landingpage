/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LandingpageOverridesProps = {
    Landingpage?: PrimitiveOverrideProps<ViewProps>;
    Features4x1?: PrimitiveOverrideProps<FlexProps>;
    Features2x2?: PrimitiveOverrideProps<FlexProps>;
    HeroLayout2?: PrimitiveOverrideProps<ViewProps>;
    Card37002709?: PrimitiveOverrideProps<FlexProps>;
    Card37002710?: PrimitiveOverrideProps<FlexProps>;
    Card37002711?: PrimitiveOverrideProps<FlexProps>;
    Card37002712?: PrimitiveOverrideProps<FlexProps>;
    NavBar?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type LandingpageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LandingpageOverridesProps | undefined | null;
}>;
export default function Landingpage(props: LandingpageProps): React.ReactElement;
