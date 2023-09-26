import { Link } from "react-router-dom"



export default function City() {
  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <div className="bg-gray-200 w-1/2 collapse collapse-plus ">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-2xl font-bold">Chennai</div>
          <div className="collapse-content text-white text-center flex-col flex  items-center justify-center  gap-5">
            <Link to={"/book"}  className="bg-blue-400 flex  items-center justify-center  h-10 w-32 rounded">Anna Nagar</Link>
            <Link to={"/book"} className="bg-blue-400 flex  items-center justify-center h-10 w-32 rounded">T Nagar</Link>
            <Link to={"/book"} className="bg-blue-400 flex  items-center justify-center h-10 w-32 rounded">KK Nagar</Link>
          </div>
        </div>
        <div className="bg-gray-200 w-1/2 collapse collapse-plus ">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">Mumbai</div>
          <div className="collapse-content text-white text-center flex-col flex  items-center justify-center  gap-5">
            <Link to={"/book"}  className="bg-blue-400 flex  items-center justify-center  h-10 w-32 rounded">Anna Nagar</Link>
            <Link to={"/book"} className="bg-blue-400 flex  items-center justify-center h-10 w-32 rounded">T Nagar</Link>
            <Link to={"/book"} className="bg-blue-400 flex  items-center justify-center h-10 w-32 rounded">KK Nagar</Link>
          </div>
        </div>
        <div className="bg-gray-200 w-1/2 collapse collapse-plus ">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">Delhi</div>
          <div className="collapse-content text-white text-center flex-col flex  items-center justify-center  gap-5">
            <Link to={"/book"}  className="bg-blue-400 flex  items-center justify-center  h-10 w-32 rounded">Anna Nagar</Link>
            <Link to={"/book"} className="bg-blue-400 flex  items-center justify-center h-10 w-32 rounded">T Nagar</Link>
            <Link to={"/book"} className="bg-blue-400 flex  items-center justify-center h-10 w-32 rounded">KK Nagar</Link>
          </div>    
        </div>
      </div>
    </div>
  );
}
