export function Input({ type, placeholder, onChangeInput }) {
 
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChangeInput}
    ></input>
  );
}
