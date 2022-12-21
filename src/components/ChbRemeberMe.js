function ChbRemeberMe(props) {
  const { setState } = props;

  const handle = (ev) => {
    setState(ev.target.checked);
  };
  return (
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="rememberme" onChange={handle} />
      <label class="form-check-label" for="rememberme">
        Remember me
      </label>
    </div>
  );
}

export default ChbRemeberMe;
