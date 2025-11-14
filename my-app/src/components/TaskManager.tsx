"use client";
import AddTaskButton from "./AddTaskButton";
import TaskCard from "./TaskCard";
import { useState } from "react";

const TaskManager = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <AddTaskButton onClick={() => setIsOpen(true)} />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className=" rounded-2xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <TaskCard onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskManager;
