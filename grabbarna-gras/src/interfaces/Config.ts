export type Size = {
  value: string;
  label: string;
  price: number;
};
export type Service = {
  value: string;
  label: string;
  prices: { value: Size["value"]; price: number }[];
};
