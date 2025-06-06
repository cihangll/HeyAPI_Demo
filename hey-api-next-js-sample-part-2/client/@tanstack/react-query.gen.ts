// This file is auto-generated by @hey-api/openapi-ts

import {
  type Options,
  deletePerson,
  getPersonById,
  updatePerson,
  getAllPersons,
  createPerson,
} from "../sdk.gen";
import {
  type UseMutationOptions,
  type DefaultError,
  queryOptions,
} from "@tanstack/react-query";
import type {
  DeletePersonData,
  DeletePersonResponse,
  GetPersonByIdData,
  UpdatePersonData,
  UpdatePersonResponse,
  GetAllPersonsData,
  CreatePersonData,
  CreatePersonResponse,
} from "../types.gen";
import { client as _heyApiClient } from "../client.gen";

export const deletePersonMutation = (
  options?: Partial<Options<DeletePersonData>>,
): UseMutationOptions<
  DeletePersonResponse,
  DefaultError,
  Options<DeletePersonData>
> => {
  const mutationOptions: UseMutationOptions<
    DeletePersonResponse,
    DefaultError,
    Options<DeletePersonData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await deletePerson({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export type QueryKey<TOptions extends Options> = [
  Pick<TOptions, "baseUrl" | "body" | "headers" | "path" | "query"> & {
    _id: string;
    _infinite?: boolean;
  },
];

const createQueryKey = <TOptions extends Options>(
  id: string,
  options?: TOptions,
  infinite?: boolean,
): [QueryKey<TOptions>[0]] => {
  const params: QueryKey<TOptions>[0] = {
    _id: id,
    baseUrl: (options?.client ?? _heyApiClient).getConfig().baseUrl,
  } as QueryKey<TOptions>[0];
  if (infinite) {
    params._infinite = infinite;
  }
  if (options?.body) {
    params.body = options.body;
  }
  if (options?.headers) {
    params.headers = options.headers;
  }
  if (options?.path) {
    params.path = options.path;
  }
  if (options?.query) {
    params.query = options.query;
  }
  return [params];
};

export const getPersonByIdQueryKey = (options: Options<GetPersonByIdData>) =>
  createQueryKey("getPersonById", options);

export const getPersonByIdOptions = (options: Options<GetPersonByIdData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getPersonById({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getPersonByIdQueryKey(options),
  });
};

export const updatePersonMutation = (
  options?: Partial<Options<UpdatePersonData>>,
): UseMutationOptions<
  UpdatePersonResponse,
  DefaultError,
  Options<UpdatePersonData>
> => {
  const mutationOptions: UseMutationOptions<
    UpdatePersonResponse,
    DefaultError,
    Options<UpdatePersonData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await updatePerson({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const getAllPersonsQueryKey = (options?: Options<GetAllPersonsData>) =>
  createQueryKey("getAllPersons", options);

export const getAllPersonsOptions = (options?: Options<GetAllPersonsData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getAllPersons({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getAllPersonsQueryKey(options),
  });
};

export const createPersonQueryKey = (options: Options<CreatePersonData>) =>
  createQueryKey("createPerson", options);

export const createPersonOptions = (options: Options<CreatePersonData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await createPerson({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: createPersonQueryKey(options),
  });
};

export const createPersonMutation = (
  options?: Partial<Options<CreatePersonData>>,
): UseMutationOptions<
  CreatePersonResponse,
  DefaultError,
  Options<CreatePersonData>
> => {
  const mutationOptions: UseMutationOptions<
    CreatePersonResponse,
    DefaultError,
    Options<CreatePersonData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await createPerson({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};
