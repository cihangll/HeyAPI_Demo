import { getAllPersons } from "@/client";
import React from "react";

const SsrExamplePage = async () => {
    try {
        const { data } = await getAllPersons({});
        if (!data) return "No data";

        return (
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
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        );
    } catch (error) {
        console.error(error);
        return "Error occurred";
    }
};

export default SsrExamplePage;
