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

type Props = {
  bookings: Booking[];
};

function BookingList({ bookings: defaultBookings }: Props) {
  const [bookings, setBookings] = useState(defaultBookings);

  const [showCompleted, setShowCompleted] = useState(false);
  const [showEarly, setShowEarly] = useState(false);

  const markDone = (index: number, state: boolean) => {
    const old = [...bookings];
    old[index] = { ...old[index], completed: state };
    console.log(old);
    setBookings([...old]);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="w-full px-12 pt-8 text-left text-3xl font-bold text-black">
        Admin
      </h1>
      <div className="px-12 ">
        <h2 className="px-8 py-4 text-lg font-semibold text-black">
          Tabell inställningar
        </h2>
        <div className="flex items-center justify-start gap-4 px-12">
          <Label className="flex items-center justify-center text-lg">
            Visa färdiga
          </Label>
          <Checkbox
            checked={showCompleted}
            onCheckedChange={(c) => setShowCompleted(c ? true : false)}
          />
        </div>
        <div className="flex items-center justify-start gap-4 px-12">
          <Label className="flex items-center justify-center text-lg">
            Visa tidigare
          </Label>
          <Checkbox
            checked={showEarly}
            onCheckedChange={(c) => setShowEarly(c ? true : false)}
          />
        </div>
      </div>
      <Table className="w-11/12">
        <TableCaption>Alla bookningar</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Namn</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Datum</TableHead>
            <TableHead>Tjänster</TableHead>
            <TableHead>Färdig</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings
            .filter(
              (i) =>
                (showCompleted ? true : !i.completed) &&
                (showEarly ? true : !isBefore(DayToDate(i.day), new Date())),
            )
            .sort(
              (a, b) => DayToDate(a.day).getTime() - DayToDate(b.day).getTime(),
            )
            .map((booking, idx) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.name}</TableCell>
                <TableCell>{booking.address}</TableCell>
                <TableCell>
                  {format(DayToDate(booking.day), "yyyy-MM-dd")}
                </TableCell>
                <TableCell>
                  {[
                    {
                      label: "Gräss",
                      enabled: booking.grass,
                    },
                    {
                      label: "Kant",
                      enabled: booking.edge,
                    },
                    {
                      label: "Gödsel",
                      enabled: booking.fertilizer,
                    },
                  ]
                    .map((i) => (i.enabled ? i.label : undefined))
                    .filter((i) => i !== undefined)
                    .join(", ")}
                </TableCell>
                <TableCell className="flex flex-row items-center justify-start gap-4">
                  <Checkbox
                    onCheckedChange={(e) => {
                      console.log(e);
                      markDone(idx, e ? true : false);
                    }}
                    checked={booking.completed}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>
              <Button>Spara</Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default BookingList;
