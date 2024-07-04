import { render } from "@testing-library/react-native";
import { Typography } from "../navigation/Typography";

it("renders text correctly", () => {
  const { getByText } = render(<Typography>hello world!</Typography>);
  expect(getByText("hello world!")).toBeDefined();
});
