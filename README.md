# Device

This app was developed in mind for a Pixel 4 phone.

## Test Files

The test files are located in app\components

### AppButton.test.js

- A unit test that ensures AppButton's onPress event functions

Differences:

- An integration test would ensure AppButton works in conjuction to another component e.g. can use AppButtons to navigate (logout)
- A system test would ensure how the whole app works e.g. Is data retained after logout (prerequisite - being able to logout)

Importancce:

- If onPress doesn't function you're stuck (Welcome Screen), register and login are AppButtons

### TextInput.test.js

- A unit test that ensures TextInput can accept text

Differences:

- An integration test would ensure how TextInput and AppButton work together e.g. are inputted details submitted when AppButton is pressed
- A system test would ensure how the whole app works e.g. Can you add a charity (prerequisite - login successful)

Importance:

- If TextInput doesn't accept text you can't use any of the text inputs e.g. register, login, add...
