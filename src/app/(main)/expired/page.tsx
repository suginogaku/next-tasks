import TaskCard from '@/components/TaskCard/TaskCard';
import React from 'react'

const ExpiredTaskPage = () => {
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center">Expired Tasks</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        <TaskCard />
      </div>
    </div >
  );
}

export default ExpiredTaskPage