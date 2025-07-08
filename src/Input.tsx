

type InputProps = {
  className?: string;
  name?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


function Input({ className, name, id, type, placeholder, value, onChange }: InputProps) {
  
  
 

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
      value={value}
      onChange={onChange}

    />
  );
}

export default Input;
