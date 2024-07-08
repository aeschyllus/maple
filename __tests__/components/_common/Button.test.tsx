import Button from "@/components/_common/Button";
import { fireEvent, render } from "@testing-library/react-native";

it("renders with the correct text", () => {
  const { getByText } = render(
    <Button onPress={() => console.log("hi")} text="click me!" />
  );
  expect(getByText("click me!")).toBeDefined();
});

it("should be clickable", () => {
  const mockClick = jest.fn();
  const { getByRole } = render(<Button onPress={mockClick} text="click me!" />);
  const btn = getByRole("button");
  fireEvent.press(btn);
  expect(mockClick).toHaveBeenCalledTimes(1);
});

it("should not be clickable when disabled", () => {
  const mockClick = jest.fn();
  const { getByRole } = render(
    <Button onPress={mockClick} text="click me!" disabled />
  );
  const btn = getByRole("button");
  fireEvent.press(btn);
  expect(mockClick).not.toHaveBeenCalledTimes(1);
});
