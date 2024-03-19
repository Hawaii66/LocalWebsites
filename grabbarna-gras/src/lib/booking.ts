"use server";
import { Booking } from "@/interfaces/Booking";
import HandlePrismaConnection from "./prisma";

export async function CreateBooking(booking: Booking) {
  const createdBooking = HandlePrismaConnection(async (prisma) => {
    return prisma.booking.create({
      data: {
        address: booking.address,
        name: booking.name,
        createdAt: new Date(),
        day: {
          connect: {
            id: booking.day.id,
          },
        },
        phone: booking.phone,
        price: booking.price,
        options: booking.options,
        size: booking.size,
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
    console.log(id, state);

    const t = await prisma.booking.update({
      data: {
        completed: state,
      },
      where: {
        id: id,
      },
    });
    console.log(t);
  });
}
