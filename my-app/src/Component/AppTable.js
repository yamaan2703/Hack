export default function AppTable({ data, column }) {
  const TableHeadItem = ({ item }) => <th>{item.heading}</th>;

  const TableRow = ({ item, column }) => {
    console.log(item);
    return (
      <tr>
        {column.map((columnItem, index) => {
          return <td key={index}>{item[columnItem.value]}</td>
        })}
      </tr>
    );
  };

  return (
    <div>
      <table className="border w-[800px] shadow-lg shadow-white my-10">
        <thead className="bg-sky-900 text-white text-2xl">
          <tr>
            {column.map((item, index) => <TableHeadItem key={index} item={item} />)}
          </tr>
        </thead>
        <tbody className="bg-sky-700 text-white py-2">
          {/* {data.map((item, index) => <TableRow key={index} item={item} column={column} />)} */}
          {data.map((x,i)=>{
              return (<tr key={i}>
                <td>{x.name}</td>
                <td>{x.contact}</td>
                <td>{x.gender}</td>
                <td>{x.bloodgroup}</td>
              </tr>)
            })}
        </tbody>
      </table>
    </div>
  );
}








