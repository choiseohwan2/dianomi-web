import { render } from "@testing-library/react";

import ShopLayout from "./ShopLayout";

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe("BlogLayout", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<ShopLayout />);
    }).not.toThrow();
  });
});
