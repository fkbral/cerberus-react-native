import { DefaultTheme } from "styled-components-react-native";
import { lightTheme } from "../application/theme/light";

type CustomTheme = typeof lightTheme;
declare module "styled-components/native" {
  export interface DefaultTheme extends CustomTheme {}
}
