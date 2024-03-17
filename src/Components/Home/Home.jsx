import heroImg from "../../assets/hero.png";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import HeroArea from "../HeroArea/HeroArea";

const Home = () => {
  return (
    <>
      <div className="w-ful">
        <HeroArea>
          <div className="lg:flex items-center justify-center z-0 lg:container w-full mx-auto relative lg:h-auto h-[600px]">
            <div className="xl:w-[570px] xl:h-[508px] lg:w-2/4 lg:ms-4 lg:h-[500px]  lg:bg-transparent bg-[#848e9bc0] h-[600px] z-50  lg:block flex items-center justify-center flex-col">
              <h1 className="2xl:text-[80px] text-[30px]  lg:text-[60px]  text-center lg:text-left">
                One Step Closer To Your
                <span className="text-[#7e90fe]">Dream Job</span>
              </h1>
              <p className="text-[18px] mt-[24px] w-full px-10 md:px-0 md:w-[519px] text-center lg:text-left">
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
              <button className="bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-[20px] border rounded w-[170px] h-[62px] mt-[50px] mb-[44px]">
                Get Started
              </button>
            </div>
            <div className="xl:w-[816px] -z-10 lg:z-50 xl:h-[744px] lg:static lg:w-2/4  absolute top-0 w-full h-[600px] ">
              <img className="h-full mx-auto" src={heroImg} alt="hero images" />
            </div>
          </div>
        </HeroArea>
      </div>
      <Category />
      <Featured />
    </>
  );
};

export default Home;
