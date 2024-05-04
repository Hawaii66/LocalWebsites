import AdminPassword from "@/components/AdminPassword";
import AvailableTimes from "@/components/AvailableTimes";
import BookingList from "@/components/BookingList";
import { GetBookings } from "@/lib/booking";
import { GetDays } from "@/lib/day";
import React from "react";

export const revalidate = 0;

async function Page() {
  const bookings = await GetBookings();
  const days = await GetDays();

  if (!bookings) {
    return <p>Kunde inte ladda bokningar</p>;
  }

  if (!days) {
    return <p>Kunde inte ladda dagar</p>;
  }

  return (
    <AdminPassword>
      <div className="flex flex-col gap-24">
        <BookingList bookings={bookings} />
        <AvailableTimes days={days} />
        <div className="h-24" />
      </div>
    </AdminPassword>
  );
}

export default Page;
