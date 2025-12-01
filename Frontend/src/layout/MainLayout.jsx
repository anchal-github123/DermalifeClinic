import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollTop from "../components/common/ScrollTop";

export default function MainLayout() {
  return (
    <div>
      {/* Scroll to top on route change */}
      <ScrollTop />

      <Navbar />

      <div className="max-w-7xl m-auto p-4">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
