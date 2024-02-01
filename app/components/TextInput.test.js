import { View, TextInput } from "react-native";
import { render, screen, fireEvent } from "@testing-library/react-native";

import AppTextInput from "./AppTextInput";

test("TextInput can accept text", () => {
  const onChangeTextMock = jest.fn();
  const eventData = "Some input";

  render(
    <View>
      <AppTextInput
        placeholder="Enter some data"
        onChangeText={onChangeTextMock}
      />
    </View>
  );

  fireEvent.changeText(
    screen.getByPlaceholderText("Enter some data"),
    eventData
  );
});
