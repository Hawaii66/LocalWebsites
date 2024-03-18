"use server";

import { Day } from "@/interfaces/Day";
import HandlePrismaConnection from "./prisma";

export async function AddDay(day: Day) {
  const createdDay = await HandlePrismaConnection(async (prisma) => {
    return prisma.day.create({
      data: {
        day: day.day,
        month: day.month,
        year: day.year,
        maxBookings: day.maxBookings,
      },
    });
  });

  return createdDay;
}

export async function UpdateDays(days: Day[], toDelete: Day[]) {
  console.log(days, toDelete);
  await HandlePrismaConnection(async (prisma) => {
    await prisma.day.deleteMany({
      where: {
        id: {
          in: toDelete.map((i) => i.id),
        },
      },
    });

    const activeDays = await prisma.day.findMany({
      select: {
        id: true,
      },
    });

    const newdays = days
      .filter((i) => !activeDays.map((i) => i.id).includes(i.id))
      .map((day) => ({
        day: day.day,
        month: day.month,
        year: day.year,
        maxBookings: day.maxBookings,
      }));
    await prisma.day.createMany({
      data: newdays,
    });

    const toMap = days.filter((i) =>
      activeDays.map((i) => i.id).includes(i.id),
    );
    for (var i = 0; i < toMap.length; i++) {
      await prisma.day.update({
        data: {
          day: toMap[i].day,
          month: toMap[i].month,
          year: toMap[i].year,
          maxBookings: toMap[i].maxBookings,
        },
        where: {
          id: toMap[i].id,
        },
      });
    }
  });
}

export async function GetDays() {
  const dates = await HandlePrismaConnection(async (prisma) => {
    return prisma.day.findMany({});
  });

  return dates;
}

export async function GetFreeDays() {
  const dates = await HandlePrismaConnection(async (prisma) => {
    return prisma.day.findMany({
      include: {
        bookings: true,
      },
    });
  });

  return dates?.filter((date) => date.bookings.length < date.maxBookings);
}
