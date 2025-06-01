"use client";

import ReadPersons from "@/components/person/ReadPersons";
import AddRandomPerson from "@/components/person/AddRandomPerson";
import ReadPerson from "@/components/person/ReadPerson";

const CsrExamplePage = () => {
    return (
        <>
            <AddRandomPerson />
            <br />
            <ReadPersons />
            <br />
            <ReadPerson />
        </>
    );
};

export default CsrExamplePage;
