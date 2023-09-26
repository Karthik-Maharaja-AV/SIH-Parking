import { Link } from "react-router-dom";

export default function Payment() {
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <h1 className="text-5xl font-bold text-center p-10">Make Your Payment</h1>
      <table className="table-auto text-center border border-black w-1/2">
        <thead className="bg-gray-400">
          <tr>
            <th>Slot number</th>
            <th>Entry Time</th>
            <th>Exit Time</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Slot 4</td>
            <td>10 : 00 AM</td>
            <td>12 : 00 AM</td>
            <td>Rs.40</td>
          </tr>
        </tbody>
      </table>
      
        
        <Link to="/success">
        <button className="btn bg-blue-400 border-none text-white hover:bg-blue-800 hover:shadow hover:shadow-xl hover:shadow-orange-400 font-bold">Make Payment</button>
        </Link>
    </div>
  );
}
