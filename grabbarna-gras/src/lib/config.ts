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
            label: "+75 kr",
            price: 75,
          },
        ],
      },
      {
        header: "Gödsling",
        options: [
          {
            label: "+425 kr Arbete + Material",
            price: 425,
          },
          {
            label: "+150 kr Arbete + Eget Material",
            price: 150,
          },
          {
            label: "+500 kr Arbete + Material (Algonin)",
            price: 500,
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
            label: "+40 kr",
            price: 40,
          },
        ],
      },
      {
        header: "Krattning",
        options: [
          {
            label: "95 kr",
            price: 95,
          },
        ],
      },
      {
        header: "Gödsling",
        options: [
          {
            label: "+515 kr Arbete + Material",
            price: 515,
          },
          {
            label: "+350 kr Arbete + Eget Material",
            price: 350,
          },
          {
            label: "+600 kr Arbete + Material (Algonin)",
            price: 600,
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
