import TaskCard from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";

const getCompletedTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URI}/tasks/completed`, { cache: "no-store" });

  if (response.status !== 200) {
    throw new Error("Failed to fetch tasks");
  }

  const data = await response.json();
  return data.tasks as TaskDocument[];
};

export default async function CompletedTaskPage() {
  const completedTasks = await getCompletedTasks();
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center">Completed Tasks</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {completedTasks.map((task) => (
          <TaskCard key={task._id as string} task={task} />
        ))}
      </div>
    </div >
  );
};