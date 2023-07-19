/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CardResourceProps } from "./CardResource";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardResourceCollectionOverridesProps = {
    CardResourceCollection?: PrimitiveOverrideProps<CollectionProps>;
    CardResource?: CardResourceProps;
} & EscapeHatchProps;
export declare type CardResourceCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CardResourceProps;
} & {
    overrides?: CardResourceCollectionOverridesProps | undefined | null;
}>;
export default function CardResourceCollection(props: CardResourceCollectionProps): React.ReactElement;
