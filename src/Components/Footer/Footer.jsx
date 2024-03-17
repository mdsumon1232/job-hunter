import { FaFacebook, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-slate-950 p-[100px] ">
      <div className="container mx-auto grid lg:grid-cols-5 grid-cols-1 gap-4">
        <div className="text-center">
          <p className="text-[32px] text-white">CareerHub</p>
          <p className="text-white text-[16px] mt-[26px] ">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <ul className="text-white flex mt-[20px] align justify-center">
            <li className="me-[15px]">
              <Link className="text-2xl">
                <FaFacebook />
              </Link>
            </li>
            <li className="me-[15px]">
              <Link className="text-2xl">
                <FaXTwitter />
              </Link>
            </li>
            <li className="me-[15px]">
              <Link className="text-2xl">
                <FaSquareInstagram />
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <p className="text-[20px] text-white mb-[15px]">Company</p>
          <ul className="text-white">
            <li className="mb-[10px]">
              <Link className="text-[16px]"> About Us</Link>
            </li>
            <li className="mb-[10px]">
              <Link className="text-[16px]"> Work </Link>
            </li>
            <li className="mb-[10px]">
              <Link className="text-[16px]"> Latest News </Link>
            </li>
            <li className="mb-[10px]">
              <Link className="text-[16px]"> Careers </Link>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <p className="text-[20px] text-white mb-[15px]">Product</p>
          <ul className="text-white">
            <li className="mb-[10px]">
              <Link className="text-[16px]"> Prototype</Link>
            </li>
            <li className="mb-[10px]">
              <Link className="text-[16px]"> Plans & Pricing </Link>
            </li>
            <li className="mb-[10px]">
              <Link className="text-[16px]">Customers </Link>
            </li>
            <li className="mb-[10px]">
              <Link className="text-[16px]"> Integrations </Link>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <p className="text-[20px] text-white mb-[15px]">Support</p>
          <ul className="text-white">
            <li className="mb-[10px]">
              <Link className="text-[16px]"> Help Desk</Link>
            </li>
            <li className="mb-[10px]">
              <Link className="text-[16px]"> Sales </Link>
            </li>
            <li className="mb-[10px]">
              <Link className="text-[16px]"> Become a Partner </Link>
            </li>
            <li className="mb-[10px]">
              <Link className="text-[16px]"> Developers </Link>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <p className="text-[20px] text-white mb-[15px]">Contact</p>
          <ul className="text-white">
            <li className="mb-[10px] text-[16px]"> 524 Broadway , NYC</li>
            <li className="mb-[10px] text-[16px]"> +1 777 - 978 - 5570</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
