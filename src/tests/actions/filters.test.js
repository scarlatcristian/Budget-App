import {
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
  setTextFilter,
} from "../../actions/filters";
import moment from "moment";

// SET_START_DATE
test("should generate set start date action obj", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({ type: "SET_START_DATE", startDate: moment(0) });
});

// SET_END_DATE
test("should generate set end date action obj", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({ type: "SET_END_DATE", endDate: moment(0) });
});

// SORT_BY_AMOUNT
test("should generate sort by amount action obj", () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: "SORT_BY_AMOUNT" });
});

// SORT_BY_DATE
test("should generate sort by amount action obj", () => {
  const action = sortByDate();
  expect(action).toEqual({ type: "SORT_BY_DATE" });
});

// SET_TEXT_FILTER - provided value
test("should setup text filter action obj with text value", () => {
  const text = "rent";
  const action = setTextFilter(text);
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text });
});

// SET_TEXT_FILTER - default value
test("should setup text filter action obj with default value", () => {
  const action = setTextFilter();
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text: "" });
});
