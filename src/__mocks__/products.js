import { faker } from "@faker-js/faker";

const products = [...Array(6)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.lorem.text(),
  image: `/static/images/products/${faker.datatype.number({ min: 1, max: 8 })}.jpg`,
  price: faker.datatype.number({ min: 100000, max: 1000000 }),
}));

export default products;
