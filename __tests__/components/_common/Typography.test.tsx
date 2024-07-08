import { Typography } from "@/components/_common/Typography";
import { render } from "@testing-library/react-native";

it("renders text correctly", () => {
  const { getByText } = render(<Typography>hello world!</Typography>);
  expect(getByText("hello world!")).toBeDefined();
});
