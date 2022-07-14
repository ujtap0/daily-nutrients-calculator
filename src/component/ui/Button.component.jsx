import { FilledBtn } from "./Button.style";

export const BUTTON_TYPE_CLASSES = {
  filled: 'filed',
  inverted: 'inverted'
}
const getButton = (buttonType = BUTTON_TYPE_CLASSES.filled) =>
({
  [BUTTON_TYPE_CLASSES.filled]: FilledBtn,
}[buttonType]);

const Button = ({children, buttonType, ...otherProps}) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>
}
export default Button;