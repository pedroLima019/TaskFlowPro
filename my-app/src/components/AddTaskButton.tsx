"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";

interface AddTaskButton {
  onClick: () => void;
}

const AddTaskButton = ({ onClick }: AddTaskButton) => {
  return (
    <div className="w-full flex justify-end">
      <Button
        className="bg-black text-white text-xs flex items-center justify-center"
        onClick={onClick}
      >
        Adicionar <Plus size={18} />
      </Button>
    </div>
  );
};

export default AddTaskButton;
