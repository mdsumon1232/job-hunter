import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Toaster
        toastOptions={{
          className: "bg-[#9873ff] font-semibold",
        }}
      />
    </div>
  );
};

export default Main;
