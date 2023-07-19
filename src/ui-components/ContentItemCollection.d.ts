/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ContentItemProps } from "./ContentItem";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContentItemCollectionOverridesProps = {
    ContentItemCollection?: PrimitiveOverrideProps<CollectionProps>;
    ContentItem?: ContentItemProps;
} & EscapeHatchProps;
export declare type ContentItemCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ContentItemProps;
} & {
    overrides?: ContentItemCollectionOverridesProps | undefined | null;
}>;
export default function ContentItemCollection(props: ContentItemCollectionProps): React.ReactElement;
