"use client";

import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { X } from "lucide-react";
import CalendarTask from "./CalendarTask";
import { Textarea } from "./ui/textarea";

interface TaskCardProps {
  onClose: () => void;
}

const TaskCard = ({ onClose }: TaskCardProps) => {
  return (
    <Card className="bg-black text-white border-0 md:w-[300]">
      <CardHeader>
        <CardAction>
          <X onClick={onClose} className="cursor-pointer" />
        </CardAction>
        <CardTitle>Adicione sua Tarefa</CardTitle>
      </CardHeader>

      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="taskName">Nome Tarefa:</Label>
              <Input
                id="taskName"
                type="text"
                placeholder="Digite o nome da tarefa"
                required
              />
            </div>

            <div className="grid gap-2">
              <CalendarTask />
            </div>
            <div className="grid gap-2">
              <div className="grid gap-2">
                <Label htmlFor="taskName">Observações:</Label>
                <Textarea placeholder="Digite uma observação" />
              </div>
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button variant="outline" className="w-full bg-white text-black">
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
