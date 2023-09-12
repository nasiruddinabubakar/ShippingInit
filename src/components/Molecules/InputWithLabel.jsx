import { Input } from "../Atoms/Input";
import { Label } from "../Atoms/Label";
// import styles from "./SignUp.module.css";

export function InputWithLabel({ text, type, placeholder, onChangeInput }) {
 
  return (
    <>
      <Label text={text} />
      <Input
        type={type}
        placeholder={placeholder}
        onChangeInput={onChangeInput}
      />
    </>
  );
}

