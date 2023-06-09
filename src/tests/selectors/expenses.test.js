import getVisibleExpenses from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

// FILTER BY TEXT
test("should filter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

// FILTER BY START DATE
test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

// FILTER BY END DATE
test("should filter by endDate", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0),
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[1]]);
});

// FILTER BY DATE
test("should filter by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

// FILTER BY AMOUNT
test("should filter by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
