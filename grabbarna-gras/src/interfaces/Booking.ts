import { SelectedSize } from "./Config";
import { Day } from "./Day";

export type Booking = {
  id: number;
  day: Day;
  address: string;
  name: string;
  completed: boolean;
  createdAt: Date;
  phone: string;
  price: number;
  size: string;
  options: string;
};
