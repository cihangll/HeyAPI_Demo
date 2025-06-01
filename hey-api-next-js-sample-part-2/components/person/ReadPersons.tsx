"use client";

import React, { useCallback } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    deletePersonMutation,
    getAllPersonsOptions,
    getAllPersonsQueryKey,
    getPersonByIdQueryKey,
} from "@/client/@tanstack/react-query.gen";

const ReadPersons = () => {
    const { data, isLoading, isFetching } = useQuery({
        ...getAllPersonsOptions({}),
    });

    const loading = isLoading || isFetching;

    const queryClient = useQueryClient();

    const deleteMutationOnSuccess = useCallback(async () => {
        const queryKey = getAllPersonsQueryKey();
        await queryClient.invalidateQueries({
            queryKey: queryKey,
        });
    }, [queryClient]);

    const deleteMutation = useMutation({
        ...deletePersonMutation(),
        onSuccess: deleteMutationOnSuccess,
        onError: (err) => console.error(err),
    });

    const deleteButtonClicked = useCallback(
        async (personId: string) => {
            await deleteMutation.mutateAsync(
                { path: { id: personId } },
                {
                    onSuccess: async () => {
                        const queryKey = getPersonByIdQueryKey({ path: { id: personId } });
                        await queryClient.invalidateQueries({
                            queryKey: queryKey,
                        });
                    },
                },
            );
        },
        [deleteMutation, queryClient],
    );

    return (
        <div style={{ border: "1px solid gray" }}>
            <b>Persons</b>
            <br />
            {loading ? (
                "Yükleniyor..."
            ) : (
                <>
                    Person total count is: {data?.length}
                    <table>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Ad</th>
                            <th>Soyad</th>
                            <th>Yaş</th>
                            <th>İşlemler</th>
                        </tr>
                        </thead>
                        <tbody>
                        {(data ?? []).map((person) => (
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.surname}</td>
                                <td>{person.age}</td>
                                <td>
                                    <button onClick={() => deleteButtonClicked(person.id!)}>
                                        Sil
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default ReadPersons;
