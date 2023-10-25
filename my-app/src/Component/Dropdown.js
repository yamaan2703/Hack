

function Dropdown({ options, selectedValue, onChange }) {
    return (
      <select value={selectedValue} onChange={onChange}
       className="bg-sky-900 outline-none text-center text-white py-3 px-2 w-[230px]">
        {options.map((option) => (
          <option key={option.value} value={option.value} className="py-1">
            {option.label}
          </option>
        ))}
      </select>
    );
  }
  
  export default Dropdown;