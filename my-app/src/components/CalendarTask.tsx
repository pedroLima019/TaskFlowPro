"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const CalendarTask = () => {
  const [openStart, setOpenStart] = React.useState(false);
  const [openEnd, setOpenEnd] = React.useState(false);

  const [startDate, setStartDate] = React.useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = React.useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label htmlFor="start" className="px-1 ">
          Quando começa:
        </Label>

        <Popover open={openStart} onOpenChange={setOpenStart}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="start"
              className="w-full justify-between font-normal"
            >
              {startDate
                ? startDate.toLocaleDateString()
                : "Selecione uma data"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            className="w-[250px] overflow-hidden p-1 bg-black text-white"
            align="center"
          >
            <Calendar
              mode="single"
              selected={startDate}
              captionLayout="dropdown"
              onSelect={(date) => {
                setStartDate(date);
                setOpenStart(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="end" className="px-1">
          Quando termina:
        </Label>

        <Popover open={openEnd} onOpenChange={setOpenEnd}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="end"
              className=" justify-between font-normal w-full"
            >
              {endDate ? endDate.toLocaleDateString() : "Selecione uma data"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            className="w-[250px] overflow-hidden p-1 bg-black text-white"
            align="center"
          >
            <Calendar
              mode="single"
              selected={endDate}
              captionLayout="dropdown"
              onSelect={(date) => {
                setEndDate(date);
                setOpenEnd(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default CalendarTask;
