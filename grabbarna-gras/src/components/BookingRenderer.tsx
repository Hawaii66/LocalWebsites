"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { services, sizes } from "@/lib/config";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";
import { getDate, getMonth, getYear, isBefore } from "date-fns";
import { Loader2 } from "lucide-react";
import { CreateBooking } from "@/lib/booking";
import { Day } from "@/interfaces/Day";
import { GetDayFromDate, IsAvailable } from "@/lib/utils";

type Props = {
  days: Day[];
};

function BookingRenderer({ days }: Props) {
  const [size, setSize] = useState<string>("small");
  const [selectedServices, setServices] = useState<string[]>(["grass"]);
  const [address, setAddress] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<
    { text: string; success: boolean } | undefined
  >();

  const price =
    sizes.find((i) => i.value === size)!.price +
    selectedServices.reduce(
      (t, c) =>
        t +
        services
          .find((i) => i.value === c)!
          .prices.find((j) => j.value === size)!.price,
      0,
    );

  const send = async () => {
    setLoading(true);

    if (!date) return;
    const day = GetDayFromDate(date, days);
    if (!day) return;

    const grass = !!services.find((i) => i.value === "grass");
    const edge = !!services.find((i) => i.value === "edge");
    const fertilizer = !!services.find((i) => i.value === "fertilizer");

    const booking = await CreateBooking({
      size: size,
      address: address,
      name: name,
      day: day,
      edge: edge,
      fertilizer: fertilizer,
      grass: grass,
      completed: false,
      createdAt: new Date(),
      id: -1,
    });

    setLoading(false);
    window.scroll({ top: 0, behavior: "smooth" });

    if (booking) {
      setResponse({
        success: true,
        text: "Bokningen har registrerats. Tack så mycket!",
      });
    } else {
      setResponse({
        success: false,
        text: "Kunde inte genomföra besöket. Försök igen",
      });
    }

    setSize("small");
    setServices([]);
    setAddress("");
    setName("");
    setDate(undefined);
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-center ">
        <h1 className="text-4xl font-bold text-green-600">Grabbarna Gräs</h1>
        <p className="text-xl font-semibold text-black">Boka ett besök nu</p>
        <Link href={"/"}>
          <Button
            variant={
              response && response.success === true ? "default" : "outline"
            }
          >
            Tillbaka
          </Button>
        </Link>
      </div>
      <div className="flex w-11/12 flex-col items-center justify-center md:w-1/2">
        <div className="flex w-11/12 flex-col gap-8 md:w-2/3">
          <div className="flex flex-col gap-2">
            {response && (
              <>
                <Separator className="my-4" />
                <Label
                  className={`text-lg ${
                    response.success ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {response.text}
                </Label>
              </>
            )}
            <Separator className="my-4" />
            <Label className="text-lg">Storlek på gräsmattan</Label>
            <Select value={size} onValueChange={setSize}>
              <SelectTrigger className="w-2/3">
                <SelectValue placeholder="Välj storlek..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Liten 100 kr</SelectItem>
                <SelectItem value="medium">Mellan 120 kr</SelectItem>
                <SelectItem value="large">Stor 150 kr</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-left text-lg">Tjänster</Label>
            <ToggleGroup
              onValueChange={setServices}
              value={selectedServices}
              type="multiple"
            >
              {services.map((service) => (
                <ToggleGroupItem key={service.value} value={service.value}>
                  {service.label} (+
                  {service.prices.find((i) => i.value === size)!.price} kr)
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-lg">Address</Label>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Nyköping gata husnummer"
              className="w-11/12 md:w-2/3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-lg">Namn</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Förnamn Efternamn"
              className="w-11/12 md:w-2/3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-lg">Tid</Label>
            <div className="flex flex-row">
              <Calendar
                disabled={(date) => {
                  return !IsAvailable(date, days);
                }}
                weekStartsOn={1}
                selected={date}
                onSelect={setDate}
                mode="single"
                className="rounded-md border"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm">
              - Totalt: {price}
              kr
            </Label>
            <Separator className="my-4" />
          </div>
        </div>
        <Button
          disabled={
            address === "" ||
            name === "" ||
            !date ||
            selectedServices.length === 0 ||
            loading
          }
          onClick={send}
          className="w-1/2"
        >
          {loading ? <Loader2 className="animate-spin" /> : "Boka"}
        </Button>
      </div>
    </div>
  );
}

export default BookingRenderer;
