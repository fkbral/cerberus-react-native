import { DefaultTheme } from "@react-navigation/native";
import "styled-components-react-native";
import { lightTheme } from "../application/theme/light";
declare module "styled-components-react-native" {
  DefaultTheme: typeof lightTheme;
}
