import Label from "../Label";
import Input from "../Input";

type LabelWithInputProps = {
  //input
  className?: string;
  name?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  //label
  htmlFor?: string;
  label?: string;
};

function LabelWithInput({
  className,
  name,
  id,
  type,
  placeholder,
  htmlFor,
  label,
  value,
  onChange
}: LabelWithInputProps) {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        className={className}
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default LabelWithInput;
