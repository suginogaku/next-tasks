"use client"

import { deleteTask } from "@/actions/task";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FaTrashAlt } from "react-icons/fa";

interface TaskEditButtonProps {
  id: string;
}

const TaskDeleteButton: React.FC<TaskEditButtonProps> = ({ id }) => {
  const [state, formAction] = useFormState(deleteTask, { error: "" });
  useEffect(() => {
    if (state.error) {
      alert(state.error);
    }
  }, [state.error]);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type='submit'
        className="hover:text-gray-700 text-lg cursor-pointer disabled:bg-gray-400"
        disabled={pending}
      >
        <FaTrashAlt />
      </button>
    )
  }

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  )
}

export default TaskDeleteButton