import { returnText, sum } from "../function";

test("Returs string", () => {
  expect(returnText()).toBe("Text from function.js");
});
test("Adds numbers", () => {
  expect(sum(5, 4)).toBe(9);
});
