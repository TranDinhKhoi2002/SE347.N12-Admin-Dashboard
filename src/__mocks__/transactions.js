import { faker } from "@faker-js/faker";

const METHODS = ["VISA", "Master Card"];
const PRODUCT_NAMES = ["Product 1", "Product 2", "Product 3", "Product 4"];

const PRODUCTS = [...Array(3)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.helpers.arrayElement(PRODUCT_NAMES),
}));

const transactions = [...Array(6)].map((_, index) => ({
  id: faker.datatype.uuid(),
  paid: faker.datatype.number({ min: 100000, max: 1000000 }),
  method: faker.helpers.arrayElement(METHODS),
  created: faker.datatype.datetime(),
  supplier: faker.name.fullName(),
  address: faker.address.country(),
  email: faker.internet.email(),
  products: PRODUCTS,
}));

export default transactions;
