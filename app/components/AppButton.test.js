import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { render, screen, fireEvent } from "@testing-library/react-native";

import AppButton from "./AppButton";

test("AppButton can be pressed", () => {
  const onPressMock = jest.fn();
  const eventData = "I have been pressed";
  render(
    <View>
      <AppButton title="Button Test" onPress={onPressMock} />
    </View>
  );
  fireEvent.press(screen.getByText("Button Test"), eventData);
  expect(onPressMock).toHaveBeenCalledWith(eventData);
});
