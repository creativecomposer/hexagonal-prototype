import { describe, expect, it } from "vitest";
import Todo from "./todo";

describe("Todo business logic", () => {
  it("should create a TODO", () => {
    const expectedDescription = "Buy carrots";

    const todo = Todo.create(expectedDescription);

    expect(todo.description).toBe(expectedDescription);
  });

  it("should not create an empty TODO", () => {});
});
