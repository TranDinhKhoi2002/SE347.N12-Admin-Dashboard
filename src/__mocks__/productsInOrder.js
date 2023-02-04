import { faker } from "@faker-js/faker";

const productsInOrder = [...Array(6)].map((_, index) => ({
  name: faker.lorem.words(2),
  image: `/static/images/products/${faker.datatype.number({ min: 1, max: 8 })}.jpg`,
  price: faker.datatype.number({ min: 100000, max: 1000000 }),
  quantity: faker.datatype.number({ min: 1, max: 100 }),
}));

export default productsInOrder;
