import { Input ,PhoneNo} from "../Atoms/Input";
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

export function PhoneWithLabel({text,type,pattern,placeholder,onChangeInput}){

  return (
    <>
    <Label text={text}/>
    <Input
    type={type}
    pattern={pattern}
    placeholder={placeholder}
    onChangeInput={onChangeInput}
    />
    
    </>
  )
}

