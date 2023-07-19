import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum ContentStatus {
  PUBLISHED = "PUBLISHED",
  UNPUBLISHED = "UNPUBLISHED",
  EXPIRED = "EXPIRED"
}



type EagerAgendarConsultoria = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AgendarConsultoria, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly mobile: string;
  readonly name: string;
  readonly start: string;
  readonly end: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAgendarConsultoria = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AgendarConsultoria, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly mobile: string;
  readonly name: string;
  readonly start: string;
  readonly end: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AgendarConsultoria = LazyLoading extends LazyLoadingDisabled ? EagerAgendarConsultoria : LazyAgendarConsultoria

export declare const AgendarConsultoria: (new (init: ModelInit<AgendarConsultoria>) => AgendarConsultoria) & {
  copyOf(source: AgendarConsultoria, mutator: (draft: MutableModel<AgendarConsultoria>) => MutableModel<AgendarConsultoria> | void): AgendarConsultoria;
}

type EagerContents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Contents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly attributes?: string | null;
  readonly status: ContentStatus | keyof typeof ContentStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Contents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly attributes?: string | null;
  readonly status: ContentStatus | keyof typeof ContentStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Contents = LazyLoading extends LazyLoadingDisabled ? EagerContents : LazyContents

export declare const Contents: (new (init: ModelInit<Contents>) => Contents) & {
  copyOf(source: Contents, mutator: (draft: MutableModel<Contents>) => MutableModel<Contents> | void): Contents;
}

type EagerResources = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resources, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly attributes?: string | null;
  readonly status: ContentStatus | keyof typeof ContentStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResources = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resources, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly attributes?: string | null;
  readonly status: ContentStatus | keyof typeof ContentStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Resources = LazyLoading extends LazyLoadingDisabled ? EagerResources : LazyResources

export declare const Resources: (new (init: ModelInit<Resources>) => Resources) & {
  copyOf(source: Resources, mutator: (draft: MutableModel<Resources>) => MutableModel<Resources> | void): Resources;
}

type EagerCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly status: ContentStatus | keyof typeof ContentStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly status: ContentStatus | keyof typeof ContentStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Categories = LazyLoading extends LazyLoadingDisabled ? EagerCategories : LazyCategories

export declare const Categories: (new (init: ModelInit<Categories>) => Categories) & {
  copyOf(source: Categories, mutator: (draft: MutableModel<Categories>) => MutableModel<Categories> | void): Categories;
}