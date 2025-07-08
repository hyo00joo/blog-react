
type ButtonProps = {
  id?: string;
  value?: string;
  onClick?: () => void;
};



function Button({ id, value, onClick  }: ButtonProps) {
  return (
    <button
      id={id}
      onClick={onClick}
      style={{
        backgroundColor: "#f82a498b",
        fontSize: "0.6rem",
        color: "white",
        border: "none",
        borderRadius: "0.25rem",
        padding: "0.5rem 1rem",
        transition: "backgroundColor 0.5s",
      }}
    >
      {value}
    </button>
  );
}

export default Button;
