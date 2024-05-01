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
import { Input } from "@/components/ui/input";
import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";
import { Loader2 } from "lucide-react";
import { CreateBooking } from "@/lib/booking";
import { Day } from "@/interfaces/Day";
import { GetDayFromDate, IsAvailable } from "@/lib/utils";
import { SelectedSize } from "@/interfaces/Config";
import { DefaultSize, SizeToSelected, Sizes } from "@/lib/config";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Toggle } from "./ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

type Props = {
  days: Day[];
};

function BookingRenderer({ days }: Props) {
  const [address, setAddress] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<
    { text: string; success: boolean } | undefined
  >();
  const [size, setSize] = useState<SelectedSize>(DefaultSize);

  const price = useMemo(() => {
    return (
      size.price + size.services.reduce((prev, i) => i.option.price + prev, 0)
    );
  }, [size]);

  const send = async () => {
    setLoading(true);

    if (!date) return;
    const day = GetDayFromDate(date, days);
    if (!day) return;

    if (!size) {
      return;
    }

    const options = size.services
      .map((i) => `${i.header}: ${i.option.label}`)
      .join("\n");

    const booking = await CreateBooking({
      address: address,
      name: name,
      day: day,
      completed: false,
      createdAt: new Date(),
      id: -1,
      phone: phone,
      price: price,
      size: size.label,
      options: options,
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

    setAddress("");
    setName("");
    setDate(undefined);
  };

  const selectedSize = Sizes.find((i) => i.value === size.value)!;

  return (
    <div className="flex flex-col justify-center items-center py-12">
      <div className="text-center">
        <h1 className="font-bold text-4xl text-green-600">Grabbarna Gräs</h1>
        <p className="font-semibold text-black text-xl">Boka ett besök nu</p>
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
      <div className="flex flex-col justify-center items-center w-11/12 lg:w-3/4 2xl:w-1/2">
        <div className="flex flex-col gap-8 w-11/12 md:w-2/3">
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
            <Select
              value={size.value}
              onValueChange={(e) => {
                const size = Sizes.find((i) => i.value === e)!;
                setSize({
                  ...size,
                  services: size.services
                    .map((i) => ({ header: i.header, option: i.options[0] }))
                    .filter((i) => i.option.price === 0),
                });
              }}
            >
              <SelectTrigger className="w-2/3">
                <SelectValue placeholder="Välj storlek..." />
              </SelectTrigger>
              <SelectContent>
                {Sizes.map((size) => (
                  <SelectItem key={size.value} value={size.value}>
                    {size.label} {size.price}kr
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-left text-lg">Tjänster</Label>
            <div className="flex flex-col gap-4">
              {selectedSize.services.map((service) => (
                <div key={service.header}>
                  <p className="font-bold text-md">{service.header}</p>
                  {service.options.length === 1 ? (
                    <Toggle
                      size={"sm"}
                      className="bg-neutral-200 data-[state=on]:bg-neutral-600 px-8 py-4 text-neutral-700 data-[state=on]:text-neutral-100"
                      defaultPressed={service.options[0].price === 0}
                      pressed={
                        size.services.find((i) => i.header === service.header)
                          ? size.services.find(
                              (i) => i.header === service.header,
                            )!.option.label === service.options[0].label
                          : false
                      }
                      onPressedChange={(state) => {
                        if (state) {
                          setSize((s) => ({
                            ...s,
                            services: s.services.concat({
                              header: service.header,
                              option: service.options[0],
                            }),
                          }));
                        } else {
                          setSize((s) => ({
                            ...s,
                            services: s.services.filter(
                              (i) => i.header !== service.header,
                            ),
                          }));
                        }
                      }}
                    >
                      {service.options[0].label}
                    </Toggle>
                  ) : (
                    <ToggleGroup
                      defaultValue={
                        service.options[0].price === 0
                          ? service.options[0].label
                          : undefined
                      }
                      type="single"
                      className="justify-start"
                      onValueChange={(e) => {
                        const currentService = size.services.find(
                          (i) => i.header === service.header,
                        );
                        if (currentService) {
                          if (e === "") {
                            setSize((s) => ({
                              ...s,
                              services: s.services.filter(
                                (i) => i.header !== currentService.header,
                              ),
                            }));
                          } else {
                            setSize((s) => ({
                              ...s,
                              services: s.services
                                .filter(
                                  (i) => i.header !== currentService.header,
                                )
                                .concat({
                                  header: service.header,
                                  option: {
                                    label: e,
                                    price: service.options.find(
                                      (i) => i.label === e,
                                    )!.price,
                                  },
                                }),
                            }));
                          }
                        } else {
                          setSize((s) => ({
                            ...s,
                            services: s.services.concat({
                              header: service.header,
                              option: {
                                label: e,
                                price: service.options.find(
                                  (i) => i.label === e,
                                )!.price,
                              },
                            }),
                          }));
                        }
                      }}
                    >
                      {service.options.map((option) => (
                        <ToggleGroupItem
                          size={"sm"}
                          className="bg-neutral-200 data-[state=on]:bg-neutral-600 py-2 h-auto text-neutral-700 data-[state=on]:text-neutral-100"
                          value={option.label}
                          key={option.label}
                        >
                          {option.label}
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-lg">Address</Label>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
            <Label className="text-lg">Telefon nummer</Label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="070 123 4567"
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
                className="border rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-lg">
              - Totalt: <span className="text-green-600">{price} </span>
              kr
            </Label>
            <Separator className="my-4" />
          </div>
        </div>
        <Button
          disabled={address === "" || name === "" || !date || loading}
          onClick={send}
          className="w-1/2"
        >
          {loading ? <Loader2 className="animate-spin" /> : `Boka ${price} kr`}
        </Button>
      </div>
    </div>
  );
}

export default BookingRenderer;
