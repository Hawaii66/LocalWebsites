"use server";

import BookingRenderer from "@/components/BookingRenderer";
import { GetFreeDays } from "@/lib/day";
import React from "react";

async function Page() {
  const days = await GetFreeDays();

  if (!days) {
    return <p className="text-red-500">Cant find available days</p>;
  }

  return <BookingRenderer days={days} />;
}

export default Page;
