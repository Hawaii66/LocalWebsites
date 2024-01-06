import { Day } from "@/interfaces/Day";
import { type ClassValue, clsx } from "clsx";
import { getDate, getMonth, getYear, set } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function IsAvailable(date: Date, days: Day[]) {
  const month = getMonth(date);
  const day = getDate(date);
  const year = getYear(date);

  return (
    days.find((possibleDate) => {
      return (
        possibleDate.day === day &&
        possibleDate.month === month &&
        possibleDate.year === year
      );
    }) !== undefined
  );
}

export function GetDayFromDate(date: Date, days: Day[]) {
  const month = getMonth(date);
  const day = getDate(date);
  const year = getYear(date);

  return days.find((possibleDate) => {
    return (
      possibleDate.day === day &&
      possibleDate.month === month &&
      possibleDate.year === year
    );
  });
}

export function DayToDate(day: Day) {
  return set(new Date(), {
    month: day.month,
    year: day.year,
    date: day.day,
  });
}

export function SortDays(days: Day[]) {
  return days.sort((a, b) => {
    const dateA = DayToDate(a);
    const dateB = DayToDate(b);
    return dateA.getTime() - dateB.getTime();
  });
}

export function IsInside(day: Day, days: Day[]) {
  return !!days.find((i) => IsSame(day, i));
}

export function IsSame(a: Day, b: Day) {
  return a.id === b.id;
}
