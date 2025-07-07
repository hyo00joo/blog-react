type InputProps = {
  className?: string;
  name?: string;
  id?: string;
  type?: string;
  placeholder?: string;
};

function Input({ className, name, id, type, placeholder }: InputProps) {
  return (
    <input
      style={{
        borderColor: "brown",
        borderRadius: "5px",
      }}
      className={className}
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
