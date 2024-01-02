"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRouter } from "next/navigation";

type Size = {
  value: string;
  label: string;
  price: number;
};
type Service = {
  value: string;
  label: string;
  prices: { value: Size["value"]; price: number }[];
};

const sizes: Size[] = [
  {
    value: "small",
    label: "Liten",
    price: 100,
  },
  {
    value: "medium",
    label: "Mellan",
    price: 120,
  },
  {
    value: "large",
    label: "Stor",
    price: 150,
  },
] as const;
const services: Service[] = [
  {
    value: "grass",
    label: "Gräsklippning",
    prices: [
      {
        value: "small",
        price: 50,
      },
      {
        value: "medium",
        price: 100,
      },
      {
        value: "large",
        price: 200,
      },
    ],
  },
  {
    value: "edge",

    label: "Kantklippning",
    prices: [
      {
        value: "small",
        price: 30,
      },
      {
        value: "medium",
        price: 30,
      },
      {
        value: "large",
        price: 30,
      },
    ],
  },
  {
    value: "fertilizer",

    label: "Gödsling",
    prices: [
      {
        value: "small",
        price: 100,
      },
      {
        value: "medium",
        price: 100,
      },
      {
        value: "large",
        price: 100,
      },
    ],
  },
] as const;

function ActionButton() {
  const [size, setSize] = useState<string>("small");
  const [selectedServices, setServices] = useState<string[]>(["grass"]);
  const [address, setAddress] = useState<string>("");
  const [name, setName] = useState<string>("");

  const router = useRouter();

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

  const writeEmail = (copy: boolean) => {
    const content = `Hej, jag vill boka ett besök för gräsklippning. \n\n Valda alternativ: \n- Storlek: ${
      sizes.find((i) => i.value === size)!.label
    }\n- Tjänster: ${selectedServices
      .map((s) => services.find((i) => i.value === s)!.label)
      .join(
        ", ",
      )}\n- Address: ${address}\n- Namn: ${name}\n\nTotalt: ${price} kr\n\nTack!`;
    const mailto = `mailto:hawaiilive@outlook.com?subject=Gräsklippning&body=${encodeURIComponent(
      content,
    )}`;
    if (copy) {
      navigator.clipboard.writeText(content);
    } else {
      router.push(mailto);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="text-bold z-20 rounded-xl bg-yellow-500 px-8 py-8 text-lg font-semibold !text-neutral-800 shadow-lg shadow-yellow-500 transition-all  hover:bg-yellow-400 active:scale-95 active:bg-yellow-300">
          Boka besök
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex items-center justify-center">
        <div className="flex w-11/12 flex-col items-center justify-center md:w-1/2">
          <DrawerHeader>
            <DrawerTitle>Boka besök</DrawerTitle>
            <DrawerDescription>
              Fyll i tjänster och plats nedan
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex w-11/12 flex-col gap-8 md:w-2/3">
            <div className="flex flex-col gap-2">
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
              <Label className="text-sm">- Vi återkommer med tider</Label>
              <Label className="text-sm">
                - Totalt: {price}
                kr
              </Label>
              <Separator className="my-4" />
            </div>
          </div>
          <DrawerFooter className="flex w-11/12 items-center justify-center md:w-2/3">
            <Button
              disabled={address === "" || name === ""}
              onClick={() => writeEmail(false)}
              className="w-full"
            >
              Send
            </Button>
            <Button
              disabled={address === "" || name === ""}
              onClick={() => writeEmail(true)}
              className="w-full"
              variant={"outline"}
            >
              Kopiera meddelande (hawaiilive@outlook.com)
            </Button>
            <DrawerClose className="mt-4 w-2/3">
              <Button className="w-full" variant={"outline"}>
                Stäng
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default ActionButton;
