import Hero from "./Components/hero";
import Navbar from "./Components/navbar";
import Book from "./Pages/book";
import Payment from "./Pages/payment";
import Success from "./Pages/success";
import Qr from "./Pages/qr";
import { Routes, Route } from "react-router-dom";
import City from "./Pages/city";



export default function App() {
  return (
    <h1 data-theme="light" className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/book" element={<Book />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/qr" element={<Qr />} />
        <Route path="/success" element={<Success />} />
        <Route path="/city" element={<City />} />
      </Routes>
    </h1>
  );
}
