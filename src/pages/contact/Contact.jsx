import logo from "../../assets/logo3.png";
import logoFooter from "../../assets/logo2.png";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
const Contact = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="bg-[#4A69E2]  rounded-[34px]">
        <div className="p-4 md:p-8">
          <div className="flex flex-col md:flex-row justify-around item-start md:items-center">
            <div className="w-full md:w-[40%]">
              <h3 className="text-[24px] md:text-[48px] text-white font-bold py-4">
                Join our KicksPlus Club & get 15% off
              </h3>
              <p className="text-white py-2">
                Sign up for free! Join the community.
              </p>

              <div className="py-4 flex gap-1">
                <input
                  type="email"
                  placeholder="Email address"
                  className="sm:flex-1 px-4 py-3 rounded-md bg-transparent border border-white text-white placeholder-white outline-none focus:ring-2 focus:ring-white"
                />

                <button className="bg-[#232321] text-white px-4 py-2 rounded-sm">
                  SUBMIT
                </button>
              </div>
            </div>

            <div className="py-4 relative inline-block">
              {/* Logo */}
              <img
                src={logo}
                alt="logo"
                className="h-[47px] md:h-[112px] object-contain"
              />

              {/* Circle Badge */}
              <div className="absolute top-2 md:-top-2 right-35 md:-right-2 h-3.5 md:h-7 w-3.5 md:w-7 bg-[#FFA52F] rounded-full flex items-center justify-center shadow-md">
                <IoMdAdd className="text-[#4A69E2] text-sm" />
              </div>
            </div>
          </div>
        </div>

       <div className="bg-[#232321] text-white rounded-[34px] px-4 md:px-8 pt-8">

  <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-8">

    {/* About Us */}
    <div className="w-full sm:w-[48%] lg:w-[30%]">
      <h3 className="text-xl font-bold mb-4 text-[#FFA52F]">
        About Us
      </h3>
      <p className="text-sm">
        We are the biggest hyperstore in the universe. We got you all
        covered with our exclusive collections and latest drops.
      </p>
    </div>

    {/* Categories */}
    <div className="w-full sm:w-[48%] lg:w-[20%]">
      <h3 className="text-xl font-bold mb-4 text-[#FFA52F]">
        Categories
      </h3>
      <ul className="text-sm space-y-2">
        <li>Runners</li>
        <li>Sneakers</li>
        <li>Basketball</li>
        <li>Outdoor</li>
        <li>Golf</li>
        <li>Hiking</li>
      </ul>
    </div>

    {/* Company */}
    <div className="w-full sm:w-[48%] lg:w-[20%]">
      <h3 className="text-xl font-bold mb-4 text-[#FFA52F]">
        Company
      </h3>
      <ul className="text-sm space-y-2">
        <li>About</li>
        <li>Contact</li>
        <li>Blogs</li>
      </ul>
    </div>

    {/* Follow Us */}
    <div className="w-full sm:w-[48%] lg:w-[20%]">
      <h3 className="text-xl font-bold mb-4 text-[#FFA52F]">
        Follow Us
      </h3>
      <div className="flex gap-3 text-2xl">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaTiktok />
      </div>
    </div>

  </div>

  {/* Footer Logo */}
  <div className="mt-8">
    <img src={logoFooter} alt="footer logo" />
  </div>

</div>

      </div>
    </div>
  );
};

export default Contact;
