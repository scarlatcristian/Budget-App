import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual[(expenses[0], expenses[2])];
});

test("should NOT remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "NO_ID",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual[(expenses[0], expenses[1], expenses[2])];
});

test("should add expense", () => {
  const expense = {
    id: "4",
    description: "Dog food",
    note: "",
    amount: 3000,
    createdAt: 1,
  };

  const action = {
    type: "ADD_EXPENSE",
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit expense", () => {
  const updates = {
    description: "TEST",
    note: "",
    amount: 1952222,
    createdAt: 0,
    id: expenses[1].id,
  };

  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates,
  };
  const state = expensesReducer(expenses, action);
  expect(state[1]).toEqual(updates);
});

test("should NOT edit expense if id not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount: 123,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
