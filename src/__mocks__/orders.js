import { faker } from "@faker-js/faker";

const STATUS = ["Đã hủy", "Đã giao", "Đang giao"];

const orders = [...Array(10)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.name.fullName(),
  email: faker.internet.email(),
  total: faker.datatype.number({ min: 30000, max: 1000000 }),
  status: faker.helpers.arrayElement(STATUS),
  date: faker.date.birthdate({ min: 2020, max: 2023 }).toLocaleDateString("en-GB"),
}));

export default orders;
