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
import Link from "next/link";

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
    <Link
      href={"/boka"}
      className="text-bold z-20 rounded-xl bg-yellow-500 px-8 py-4 text-lg font-semibold !text-neutral-800 shadow-lg shadow-yellow-500 transition-all  hover:bg-yellow-400 active:scale-95 active:bg-yellow-300"
    >
      Boka besök
    </Link>
  );
}

export default ActionButton;
