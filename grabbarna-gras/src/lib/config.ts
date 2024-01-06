import { Size, Service } from "@/interfaces/Config";

export const sizes: Size[] = [
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
export const services: Service[] = [
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
