import { ReactNode } from "react";
import Navbar from "../components/Cparts/Navbar";
import Sidebar from "../components/Cparts/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import MainUser from "./MainUser";
import Orders from "./Orders";
import Customers from "./Customers";
import Products from "./Products";
import ChatBot from "./Chat-Bot";
import ChatOnline from "./Chat-Online";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="App">
      <div className="AppGlass">
        <div
          className="secondcontainer"
          style={{ backgroundColor: "white", display: "flex" }}
        >
          <Sidebar />
          <div style={{ flex: 1 }}>
            <Navbar />
            <div style={{ padding: "10px" }}>
              <Routes>
                <Route path="/user" element={<MainUser />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/Customers" element={<Customers />} />
                <Route path="/products" element={<Products/>} />
                <Route path="/chat" element={<ChatOnline/>}/>
                <Route path="/chatbot" element={<ChatBot/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
