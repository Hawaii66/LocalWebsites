import { Day } from "./Day";

export type Booking = {
  id: number;
  day: Day;
  size: string;
  grass: boolean;
  edge: boolean;
  fertilizer: boolean;
  address: string;
  name: string;
  completed: boolean;
  createdAt: Date;
};
