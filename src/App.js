import React from "react";

// components
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Button";
import { GlobalStyle } from "./utils";

const App = () => (
  <div>
    <PrimaryButton modifiers="small">Hello World</PrimaryButton>
    <SecondaryButton modifiers={["large"]}>Goodbye World</SecondaryButton>
    <TertiaryButton>Hey World</TertiaryButton>
    <PrimaryButton disabled>Hello World</PrimaryButton>
    <SecondaryButton disabled>Goodbye World</SecondaryButton>
    <TertiaryButton disabled>Hey World</TertiaryButton>
    <GlobalStyle />
  </div>
);

export default App;
