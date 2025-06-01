"use client";

import React, { ChangeEvent, useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPersonByIdOptions } from "@/client/@tanstack/react-query.gen";

const ReadPerson = () => {
    const [tempPersonId, setTempPersonId] = useState<string | undefined>();
    const [personId, setPersonId] = useState<string | undefined>();
    const { data, isLoading, isFetching, isError } = useQuery({
        ...getPersonByIdOptions({
            path: {
                id: personId!,
            },
        }),
        enabled: !!personId,
    });

    const loading = isLoading || isFetching;

    const tempPersonIdChanged = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setTempPersonId(e.target.value ?? undefined);
        },
        [],
    );

    const getPersonByIdButtonClicked = useCallback(() => {
        setPersonId(tempPersonId);
    }, [tempPersonId]);

    return (
        <div style={{ border: "1px solid gray" }}>
            <b>Person:</b>
            <br />
            <input
                style={{ width: "400px" }}
                placeholder="Enter person id here..."
                type="text"
                disabled={loading}
                value={tempPersonId ?? ""}
                onChange={tempPersonIdChanged}
            />
            <button disabled={loading} onClick={getPersonByIdButtonClicked}>
                Get Person By Id
            </button>

            {(!data || isError) && <p>Bulunamadı!</p>}

            {data && !isError && (
                <>
                    <br />
                    <b>Id:</b> {data.id} <br />
                    <b>Name:</b> {data.name} <br />
                    <b>Surname:</b> {data.surname} <br />
                    <b>Age:</b> {data.age}
                </>
            )}
        </div>
    );
};
export default ReadPerson;
