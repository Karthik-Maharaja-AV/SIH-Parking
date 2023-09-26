import { Link } from "react-router-dom"

export default function Qr(){
    return(
        <div className="text-center flex flex-col items-center justify-center p-10">
            <h1 className="text-4xl font-bold p-10">The Slot has been Booked!!!!!!</h1>
            <h1 className="text-2xl font-bold">The Qr has been Generated</h1>
            <div className="w-1/4 flex flex-col gap-10 items-center justify-center h-96">
                <img className="w-48" alt="QR" src="/QR.png" />
                <Link to="/payment">
                    <button className="btn bg-blue-400 border-none text-white hover:bg-blue-800 hover:shadow hover:shadow-xl hover:shadow-orange-400 font-bold">Make Payment</button>
                </Link>
            </div>
        </div>
    )
}