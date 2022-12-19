import { Route, Routes } from "react-router-dom";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import FAQ from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home";
import Kids from "../Components/Products/Kids";
import Mens from "../Components/Products/Mens";
import Products from "../Components/Products/Products";
import Womens from "../Components/Products/Womens";
import MensProductDetails from "../Components/Products/MensProductDetails";
import WomensProductDetails from "../Components/Products/WomensProductDetails";
import KidsProductDetails from "../Components/Products/KidsProductDetails";
import Cart from "../Components/Cart/Cart";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/mens/:id" element={<MensProductDetails />} />
                <Route path="/products/mens" element={<Mens />} />
                <Route path="/products/womens" element={<Womens />} />
                <Route path="/products/womens/:id" element={<WomensProductDetails />} />
                <Route path="/products/kids" element={<Kids />} />
                <Route path="/products/kids/:id" element={<KidsProductDetails />} />
                <Route path="/shoppingcart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    )
};
