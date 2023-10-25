export default function AppInp(props) {
    const { label, onChange, type, value, name } = props;
    return (
      <>
        <input
          className="p-3 w-full outline-none"
          placeholder={label}
          name={name}
          value={value}
          onChange={onChange}
          type={type ?? "text"}
        ></input>
      </>
    );
  }