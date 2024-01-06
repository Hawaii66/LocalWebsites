"use server";
import { Booking } from "@/interfaces/Booking";
import HandlePrismaConnection from "./prisma";

export async function CreateBooking(booking: Booking) {
  const createdBooking = HandlePrismaConnection(async (prisma) => {
    return prisma.booking.create({
      data: {
        address: booking.address,
        edge: booking.edge,
        fertilizer: booking.fertilizer,
        grass: booking.grass,
        name: booking.name,
        size: booking.size,
        createdAt: new Date(),
        day: {
          connect: {
            id: booking.day.id,
          },
        },
      },
    });
  });

  return createdBooking;
}

export async function GetBookings() {
  const bookings = HandlePrismaConnection(async (prisma) => {
    return prisma.booking.findMany({
      include: {
        day: true,
      },
    });
  });

  return bookings;
}

export async function CompleteBooking(id: number, state: boolean) {
  HandlePrismaConnection(async (prisma) => {
    prisma.booking.update({
      data: {
        completed: state,
      },
      where: {
        id: id,
      },
    });
  });
}
