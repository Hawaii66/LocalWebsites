"use client";

import { Day } from "@/interfaces/Day";
import React, { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Input } from "./ui/input";
import { getDate, getMonth, getYear } from "date-fns";
import { Loader, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { DayToDate, GetDayFromDate, IsInside, SortDays } from "@/lib/utils";
import { GetDays, UpdateDays } from "@/lib/day";

type Props = {
  days: Day[];
};

function AvailableTimes({ days: defaultDays }: Props) {
  const [days, setDays] = useState(defaultDays);
  const [deleted, setDeleted] = useState<Day[]>([]);
  const [loading, setLoading] = useState(false);

  const addDay = (date: Date[] | undefined) => {
    if (!date) {
      setDays([]);
      return;
    }

    const toAdd: Day[] = [];

    date.map((date) => {
      var previous = GetDayFromDate(date, days);
      if (!previous) {
        previous = {
          day: getDate(date),
          id: Math.floor(Math.random() * 1_000_000_000),
          maxBookings: 5,
          month: getMonth(date),
          year: getYear(date),
        };
      }

      toAdd.push(previous);
    });

    const toAddDeleted: Day[] = [];

    days.map((day) => {
      if (!IsInside(day, toAdd)) {
        toAddDeleted.push(day);
      }
    });

    setDays(toAdd);
    setDeleted((old) => [...old, ...toAddDeleted]);
  };

  const saveDays = async () => {
    setLoading(true);
    await UpdateDays(days, deleted);
    const newDays = await GetDays();
    setLoading(false);
    if (!newDays) {
      alert("Kunde inte ta bort datum, Är en bokning på denna dag?");
      return;
    }
    setDays(newDays);
    setDeleted([]);
  };

  const updateDay = (index: number, day: Partial<Day>) => {
    const old = [...days];
    old[index] = { ...old[index], ...day };
    setDays(old);
  };

  const StringToNum = (str: string) => {
    const num = parseInt(str);
    if (isNaN(num)) {
      return 0;
    }

    return num;
  };

  return (
    <div className="w-11/12">
      <h2 className="px-8 py-4 text-center text-lg font-semibold text-black">
        Tillgängliga dagar
      </h2>
      <div className="flex w-full flex-row gap-4">
        <div className="flex w-1/2 items-start justify-center">
          <Calendar
            className="rounded-md border"
            mode="multiple"
            onSelect={(d) => addDay(d)}
            selected={days.map((i) => DayToDate(i))}
            weekStartsOn={1}
          />
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center gap-2">
          <Button onClick={saveDays} disabled={loading}>
            {loading ? <Loader className="animate-spin" /> : "Spara"}
          </Button>
          <div className="flex flex-row items-center justify-between gap-2">
            <Input readOnly value="År" />
            <Input readOnly value="Månad" />
            <Input readOnly value="Dag" />
            <div className="w-24" />
            <Input readOnly value="Max antal bokningar" />
          </div>
          <p className="w-full text-left text-sm text-neutral-500">
            Månad: (0 = januari, 1 = februari... 11 = december)
          </p>
          {SortDays(days).map((i, idx) => (
            <div
              key={`${i.id}`}
              className="flex flex-row items-center justify-between gap-2"
            >
              <Input
                onChange={(e) =>
                  updateDay(idx, { year: StringToNum(e.target.value) })
                }
                value={i.year}
              />
              <Input
                onChange={(e) =>
                  updateDay(idx, { month: StringToNum(e.target.value) })
                }
                value={i.month}
              />
              <Input
                onChange={(e) =>
                  updateDay(idx, { day: StringToNum(e.target.value) })
                }
                value={i.day}
              />
              <div className="w-24" />
              <Input
                onChange={(e) =>
                  updateDay(idx, { maxBookings: StringToNum(e.target.value) })
                }
                value={i.maxBookings}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvailableTimes;
