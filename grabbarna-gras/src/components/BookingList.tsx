"use client";

import { Booking } from "@/interfaces/Booking";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { format, isBefore } from "date-fns";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { DayToDate } from "@/lib/utils";
import { CompleteBooking } from "@/lib/booking";
import { Loader } from "lucide-react";

type Props = {
  bookings: Booking[];
};

function BookingList({ bookings: defaultBookings }: Props) {
  const [bookings, setBookings] = useState(defaultBookings);

  const [showCompleted, setShowCompleted] = useState(false);
  const [savingBookings, setSavingBookings] = useState(false);

  const markDone = (index: number, state: boolean) => {
    const old = [...bookings];
    old[index] = { ...old[index], completed: state };
    setBookings([...old]);
  };

  const saveChanges = async () => {
    setSavingBookings(true);
    for (var i = 0; i < bookings.length; i++) {
      const originalBooking = defaultBookings.find(
        (j) => j.id === bookings[i].id,
      );
      if (originalBooking?.completed !== bookings[i].completed) {
        await CompleteBooking(bookings[i].id, bookings[i].completed);
      }
    }
    setSavingBookings(false);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="px-12 pt-8 w-full font-bold text-3xl text-black text-left">
        Grabbarn Gräs - Admin
      </h1>
      <div className="px-12">
        <h2 className="px-8 py-4 font-semibold text-black text-lg">
          Tabell inställningar
        </h2>
        <div className="flex justify-start items-center gap-4 px-12">
          <Label className="flex justify-center items-center text-lg">
            Visa färdiga
          </Label>
          <Checkbox
            checked={showCompleted}
            onCheckedChange={(c) => setShowCompleted(c ? true : false)}
          />
        </div>
      </div>
      <Table className="w-11/12">
        <TableCaption>Alla bookningar</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead className="min-w-32">Namn</TableHead>
            <TableHead className="min-w-32">Address</TableHead>
            <TableHead className="min-w-32">Telefon</TableHead>
            <TableHead className="min-w-32">Pris</TableHead>
            <TableHead className="min-w-32">Datum</TableHead>
            <TableHead className="min-w-32">Tjänster</TableHead>
            <TableHead className="min-w-32">Färdig</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings
            .filter((i) => (showCompleted ? true : !i.completed))
            .sort(
              (a, b) => DayToDate(a.day).getTime() - DayToDate(b.day).getTime(),
            )
            .map((booking, idx) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.name}</TableCell>
                <TableCell>{booking.address}</TableCell>
                <TableCell>{booking.phone}</TableCell>
                <TableCell>{booking.price}</TableCell>
                <TableCell>
                  {format(DayToDate(booking.day), "yyyy-MM-dd")}
                </TableCell>
                <TableCell>
                  {booking.options.split("\n").map((i) => (
                    <>
                      {i}
                      <br />
                    </>
                  ))}
                </TableCell>
                <TableCell className="flex flex-row justify-start items-center gap-4">
                  <Checkbox
                    onCheckedChange={(e) => {
                      markDone(idx, e ? true : false);
                    }}
                    className="w-10 h-10"
                    checked={booking.completed}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>
              <Button onClick={saveChanges}>
                {savingBookings ? <Loader className="animate-spin" /> : "Spara"}
              </Button>
            </TableCell>
            <TableCell>
              {bookings.filter((i) => (showCompleted ? true : !i.completed))
                .length === 0 && (
                <p className="w-full font-bold text-center text-lg">
                  Inga bokningar att visa
                </p>
              )}
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default BookingList;
