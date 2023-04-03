import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

// REMOVE_EXPENSE
test("should setup remove expense action obj", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

// EDIT_EXPENSE
test("should setup edit expense action obj", () => {
  const action = editExpense("123abc", { note: "New note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "New note value",
    },
  });
});

// ADD_EXPENSE - provided values
test("should setup add expense action obj with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 10000,
    notes: "This was last month rent",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

// ADD_EXPENSE - default values
test("should setup add expense action obj with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      notes: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
