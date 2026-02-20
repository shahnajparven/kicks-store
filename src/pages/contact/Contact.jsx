import logo from '../../assets/logo3.png'
import logoFooter from '../../assets/logo2.png'
import { FaFacebook,FaInstagram,FaTwitter,FaTiktok  } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="bg-[#4A69E2]  rounded-[34px]">
        <div className="p-4 md:p-8">
          <div className='flex flex-col md:flex-row justify-around item-start md:items-center'>
<div className='w-full md:w-[50%]'>
    <h3 className="text-[24px] md:text-[48px] text-white font-bold py-4">
            Join our KicksPlus Club & get 15% off
          </h3>
          <p className='text-white py-2'>Sign up for free! Join the community.</p>

          <div className='py-4 flex gap-1'>
          <input
  type="email"
  placeholder="Email address"
  className="sm:flex-1 px-4 py-3 rounded-md bg-transparent border border-white text-white placeholder-white outline-none focus:ring-2 focus:ring-white"
/>

            <button className='bg-[#232321] text-white px-4 py-2 rounded-sm'>SUBMIT</button>
          </div>
</div>
            <div className='py-4'>
                <img src={logo} alt="logo" className='h-[47px] md:[112px] object-contain '/>
            </div>
          </div>
        </div>

       <div className="bg-[#232321] text-white rounded-[34px] px-4 md:px-8 pt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#FFA52F]">About Us</h3>
          <p className="text-sm">
            We are the biggest hyperstore in the universe. We got you all covered with our exclusive collections and latest drops.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#FFA52F]">Categories</h3>
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
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#FFA52F]">Company</h3>
          <ul className="text-sm space-y-2">
            <li>About</li>
            <li>Contact</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#FFA52F]">Follow Us</h3>
          <div className="flex gap-3 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaTiktok />
          </div>
        </div>

      </div>
      <div className='px-0 md:px-4 mt-4'>
        <img src={logoFooter} alt='footer logo'/>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Contact;
