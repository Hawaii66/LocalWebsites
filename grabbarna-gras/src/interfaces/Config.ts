export type Size = {
  value: string;
  label: string;
  price: number;
  services: {
    header: string;
    options: {
      label: string;
      price: number;
    }[];
  }[];
};

type Services = Size["services"];
type Option = Services[number]["options"][number];
type Selected = Omit<Services[number], "options">;

export type SelectedSize = Omit<Size, "services"> & {
  services: (Selected & { option: Option })[];
};
