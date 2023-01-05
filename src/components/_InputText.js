function InputText(props) {
  const { name, type, state, setState, onBlur, error } = props;

  const handleOnChange = (ev) => {
    setState(ev.target.value);
  };

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        type={type ? type : "text"}
        class={`form-control ${error === undefined || (error ? "is-invalid" : "is-valid")}`}
        id={name}
        placeholder={name}
        value={state}
        onChange={handleOnChange}
        onBlur={onBlur}
        autoComplete="off"
      ></input>
      <small className="text-danger">
        {error ? (
          <>
            <i className="fa-solid fa-xmark me-1" />
            {error}
          </>
        ) : (
          ""
        )}
      </small>
    </div>
  );
}

export default InputText;
