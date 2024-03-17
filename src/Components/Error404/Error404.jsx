import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-200">
      <div className="md:h-1/4 h-2/4 flex flex-col items-center">
        <h1 className="text-9xl mb-7">😌</h1>
        <h2 className="text-4xl font-bold">404</h2>
        <p className="text-xl py-4">This page not found</p>
        <button
          onClick={redirect}
          className="bg-[#9873ff] px-10 py-3 text-xl text-black rounded"
        >
          Go To Home
        </button>
      </div>
    </div>
  );
};

export default Error404;
