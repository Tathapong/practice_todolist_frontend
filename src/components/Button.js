function Button(props) {
  const { name, type, disabled } = props;
  return (
    <button className="btn btn-primary w-100 mt-4" type={type ? type : "submit"} disabled={disabled}>
      {name.toUpperCase()}
    </button>
  );
}

export default Button;
