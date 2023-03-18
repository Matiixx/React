import { range } from "lodash";

export const generateSpaces = (text: string) => (from: number, to: number) =>
  range(from, to).map((index) => ({
    name: `${text} ${index}`,
  }));

type Address = {
  address: string;
  country: string;
};

export const generateAdresses = (country: string) => (street: string) => (
  from: number,
  to: number
): Address[] =>
  range(from, to).map((index) => ({
    address: `${street} ${index}`,
    country,
  }));