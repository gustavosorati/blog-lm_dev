import { ShoppingCart } from "phosphor-react";
import { WidgetContainer } from "./styles";

export function Widget() {
  return (
    <WidgetContainer title={"Cart"}>
      <ShoppingCart size={24} color="#fff"  />
    </WidgetContainer>
  )
}
