function Button(props) {
  const { name, type } = props;
  return (
    <button className="btn btn-primary w-100 mt-4" type={type ? type : "submit"}>
      {name.toUpperCase()}
    </button>
  );
}

export default Button;
