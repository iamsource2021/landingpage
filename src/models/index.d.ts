import { ModelInit, MutableModel, __modelMeta__, OptionallyManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerAgendarConsultoria = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<AgendarConsultoria, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly mobile: string;
  readonly name: string;
  readonly lifetime: number;
  readonly start: string;
  readonly end: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAgendarConsultoria = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<AgendarConsultoria, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly mobile: string;
  readonly name: string;
  readonly lifetime: number;
  readonly start: string;
  readonly end: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AgendarConsultoria = LazyLoading extends LazyLoadingDisabled ? EagerAgendarConsultoria : LazyAgendarConsultoria

export declare const AgendarConsultoria: (new (init: ModelInit<AgendarConsultoria>) => AgendarConsultoria) & {
  copyOf(source: AgendarConsultoria, mutator: (draft: MutableModel<AgendarConsultoria>) => MutableModel<AgendarConsultoria> | void): AgendarConsultoria;
}