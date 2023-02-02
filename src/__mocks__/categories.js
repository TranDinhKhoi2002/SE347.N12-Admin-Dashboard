import { v4 as uuid } from "uuid";

export const categories = [
  {
    id: uuid(),
    name: "Thực phẩm",
    description: "Thực phẩm tươi",
    numberOfProducts: 10,
  },
  {
    id: uuid(),
    name: "Trái cây",
    description: "Trái cây tươi",
    numberOfProducts: 20,
  },
  {
    id: uuid(),
    name: "Hạt",
    description: "Các loại hạt",
    numberOfProducts: 20,
  },
  {
    id: uuid(),
    name: "Rau",
    description: "Rau tươi",
    numberOfProducts: 40,
  },
  {
    id: uuid(),
    name: "Ngũ cốc",
    description: "Thực phẩm giàu chất xơ",
    numberOfProducts: 15,
  },
];
