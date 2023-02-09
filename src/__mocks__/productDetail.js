import { faker } from "@faker-js/faker";
import { categories as ProductCategorites } from "./categories";

const productDetail = {
  name: faker.lorem.words(2),
  image: `/static/images/products/${faker.datatype.number({ min: 1, max: 8 })}.jpg`,
  price: faker.datatype.number({ min: 100000, max: 1000000 }),
  categories: faker.helpers.arrayElement(ProductCategorites).id,
  discription: faker.lorem.text(),
};

export default productDetail;
