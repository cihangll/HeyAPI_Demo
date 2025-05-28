"use client"

import {useCallback, useState} from "react";
import {getAllPersons, PersonDto} from "@/client";

export default function Home() {

  const [persons, setPersons] = useState<PersonDto[]>([])

  const getAllPersonsButtonClicked = useCallback(async () => {
    getAllPersons().then(({ data}) => setPersons(data ?? []))
  }, [])

  return (
    <>
    <button type="button" onClick={() => getAllPersonsButtonClicked()}>Get All Persons</button>
      <br/>
      Total Person Count Is: {persons.length ? persons.length + 1 : 0}
    </>

  );
}
