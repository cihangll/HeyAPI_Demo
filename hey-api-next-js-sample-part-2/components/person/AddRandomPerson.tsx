"use client";

import { useCallback } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createPersonMutation,
  getAllPersonsQueryKey,
} from "@/client/@tanstack/react-query.gen";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const AddRandomPerson = () => {
  const queryClient = useQueryClient();

  const createMutationOnSuccess = useCallback(async () => {
    const queryKey = getAllPersonsQueryKey();
    await queryClient.invalidateQueries({
      queryKey: queryKey,
    });
  }, [queryClient]);

  const createMutation = useMutation({
    ...createPersonMutation(),
    onSuccess: createMutationOnSuccess,
    onError: (err) => console.error(err),
  });

  const addRandomPersonButtonClicked = useCallback(async () => {
    await createMutation.mutateAsync({
      body: {
        name: "Person " + getRandomInt(100),
        surname: "Surname " + getRandomInt(100),
        age: getRandomInt(100),
      },
    });
  }, [createMutation]);

  return (
    <button onClick={addRandomPersonButtonClicked}>Add Random Person</button>
  );
};

export default AddRandomPerson;
