"use client";

import { FormState, updateTask } from '@/actions/task';
import { TaskDocument } from '@/models/task'
import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
interface EditTaskFormProps { task: TaskDocument }

const EditTaskForm: React.FC<EditTaskFormProps> = ({ task }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const initialState: FormState = { error: "" }
  const [state, formAction] = useFormState(updateTask, initialState);

  const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        className='mt-8 py-2 w-full rounded-md text-white bg-gray-800 hover:bg-gray-700 text-sm font-semibold shadow-sm disabled:bg-gray-400'
        disabled={pending}>
        Edit
      </button>
    )
  };

  return (
    <div className='mt-10 mx-auto w-full max-w-sm'>
      <form action={formAction}>
        <input type="hidden" name="id" value={task._id as string} />
        <div>
          <label htmlFor='title' className='block text-sm font-medium'>タイトル</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            name="title"
            required
            className='block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300'
          />
        </div>
        <div className='mt-6'>
          <label htmlFor='description' className='block text-sm font-medium'>説明</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            name="description"
            required
            className='block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300'
          />
        </div>
        <div className='mt-6'>
          <label htmlFor='dueDate' className='block text-sm font-medium'>期限</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            id="dueDate"
            name="dueDate"
            min="2022-01-01"
            max="2999-12-31"
            required
            className='block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300'
          />
        </div>
        <div className='mt-6 flex items-center'>
          <input
            type="checkbox"
            value={isCompleted ? "true" : "false"}
            onChange={(e) => setIsCompleted(e.target.checked)}
            id="isCompleted"
            name="isCompleted"
            className='mr-2 w-4 h-4'
            checked={isCompleted}
          />
          <label htmlFor="isCompleted" className='text-sm'>タスクを完了にする</label>
        </div>
        <SubmitButton />
        {state.error && <p className='text-red-500 text-sm mt-2'>{state.error}</p>}
      </form>
    </div>
  )
}

export default EditTaskForm