export function Input({ type, placeholder, onChangeInput }) {
 
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChangeInput}
    ></input>
  );
}

export function PhoneNo({type,pattern,placeholder,onChangeInput}){

  return <input
  
    type={type}
    pattern={pattern}
    placeholder={placeholder}
    onChange={onChangeInput}
  required
  ></input>
}

