type LabelProps = {
  htmlFor?: string;
  value?: string;
  children?: string;
};

function Label({ htmlFor, children }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: "inline-block",
        fontSize: "0.9rem",
        width: "5rem",
        textAlign: "right",
        color: "#e66f80",
      }}
    >
      {children}
    </label>
  );
}

export default Label;
