import { SelectedSize, Size } from "@/interfaces/Config";

export const Sizes: Size[] = [
  {
    label: "Liten 400m²",
    price: 300,
    value: "small",
    services: [
      {
        header: "Gräsklippning",
        options: [
          {
            label: "Ingår",
            price: 0,
          },
        ],
      },
      {
        header: "Kantklippning",
        options: [
          {
            label: "Ingår",
            price: 0,
          },
        ],
      },
      {
        header: "Krattning",
        options: [
          {
            label: "+50 kr",
            price: 50,
          },
        ],
      },
      {
        header: "Gödsling",
        options: [
          {
            label: "+320 kr Arbete + Material",
            price: 320,
          },
          {
            label: "+200 kr Arbete + Eget Material",
            price: 200,
          },
          {
            label: "+360 kr Arbete + Material (Algonin)",
            price: 360,
          },
        ],
      },
    ],
  },
  {
    label: "Medium 550m²",
    price: 350,
    value: "medium",
    services: [
      {
        header: "Gräsklippning",
        options: [
          {
            label: "Ingår",
            price: 0,
          },
        ],
      },
      {
        header: "Kantklippning",
        options: [
          {
            label: "Ingår",
            price: 0,
          },
        ],
      },
      {
        header: "Krattning",
        options: [
          {
            label: "+50 kr",
            price: 50,
          },
        ],
      },
      {
        header: "Gödsling",
        options: [
          {
            label: "Arbete + Material",
            price: 320,
          },
          {
            label: "Arbete + Eget Material",
            price: 200,
          },
          {
            label: "Arbete + Material (Algonin)",
            price: 360,
          },
        ],
      },
    ],
  },
  {
    label: "Stor 700m²",
    price: 390,
    value: "large",
    services: [
      {
        header: "Gräsklippning",
        options: [
          {
            label: "Ingår",
            price: 0,
          },
        ],
      },
      {
        header: "Kantklippning",
        options: [
          {
            label: "Ingår",
            price: 0,
          },
        ],
      },
      {
        header: "Krattning",
        options: [
          {
            label: "50 kr",
            price: 50,
          },
        ],
      },
      {
        header: "Gödsling",
        options: [
          {
            label: "Arbete + Material",
            price: 320,
          },
          {
            label: "Arbete + Eget Material",
            price: 200,
          },
          {
            label: "Arbete + Material (Algonin)",
            price: 360,
          },
        ],
      },
    ],
  },
];

export const DefaultSize: SelectedSize = {
  label: Sizes[0].label,
  price: Sizes[0].price,
  value: Sizes[0].value,
  services: Sizes[0].services
    .map((i) => ({
      header: i.header,
      option: i.options[0],
    }))
    .filter((i) => i.option.price === 0),
};

export function SizeToSelected(size: Size): SelectedSize {
  return {
    label: size.label,
    price: size.price,
    value: size.value,
    services: size.services.map((i) => ({
      header: i.header,
      option: i.options[0],
    })),
  };
}
