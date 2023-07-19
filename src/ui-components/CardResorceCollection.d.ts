/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CardResorceProps } from "./CardResorce";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardResorceCollectionOverridesProps = {
    CardResorceCollection?: PrimitiveOverrideProps<CollectionProps>;
    CardResorce?: CardResorceProps;
} & EscapeHatchProps;
export declare type CardResorceCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CardResorceProps;
} & {
    overrides?: CardResorceCollectionOverridesProps | undefined | null;
}>;
export default function CardResorceCollection(props: CardResorceCollectionProps): React.ReactElement;
