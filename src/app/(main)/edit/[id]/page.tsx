import EditTaskForm from "@/components/EditTaskForm/EditTaskForm";
import { TaskDocument } from "@/models/task";

interface Params {
  params: Promise<{ id: string }>;
}

const getTask = async (id: string) => {
  const response = await fetch(`${process.env.API_URI}/tasks/${id}`, {
    cache: "no-store",
  });

  console.log(response)
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.task as TaskDocument;
}

const EditTaskPage = async (props: Params) => {
  const params = await props.params;
  const id = params.id;
  const task = await getTask(id);

  return (
    <div className="flex flex-col justify-center py-20">
      <h2 className="text-center text-2xl font-bold">Edit Task</h2>
      <EditTaskForm task={task} />
    </div>
  )
}

export default EditTaskPage