import Item from "../pages/item";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import * as nextRouter from 'next/router';

// jest.mock("next/router", () => ({
//   useRouter: jest.fn(),
// }));



describe("Item page", () => {
  it("should render", () => {
    render(<Item />);

    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ route: '/checkout' }));
  });
    
    
});