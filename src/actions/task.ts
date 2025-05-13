'use server';

import TaskCard from "@/components/TaskCard/TaskCard";
import { Task, TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database";
import { redirect } from "next/navigation";

export interface FormState {
  error: string;
}

export const createTask = async (state: FormState, formData: FormData) => {
  // Simulate task creation logic
  const newTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: false,
  };

  try {
    await connectDB();
    await TaskModel.create(newTask);
  } catch (error) {
    state.error = "タスクの作成に失敗しました";
    return state;
  }
  redirect("/");
};