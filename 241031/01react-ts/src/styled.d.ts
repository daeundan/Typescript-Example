import "styled-components";
import { StringLiteral } from "typescript";

declare module "styled-components" {
  interface DefaultTheme {
    bgColor: string;
    textColor: string;
    accentsColor: string;
    cardBgColor: string;
  }
}
