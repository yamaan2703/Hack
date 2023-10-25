export default function AppBtn(props) {
    const { label, onClick } = props;
  return (
    <>
      <button className="  text-center py-2 text-white w-[200px] bg-sky-900"
      onClick={onClick}>
        {label}
      </button>
    </>
  );
}