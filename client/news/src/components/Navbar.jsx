import { useEffect } from "react";
import gsap from "gsap";
import { useNavigate } from 'react-router-dom';
import "./Nav.css"; // Ensure this file exists and contains your CSS imports

function Navbar() {
  useEffect(() => {
    gsap.to('#hello', {
      rotationY: 360,
      repeat: -1,
      duration: 3
    });
  }, []);

  const arr = ['Sports', 'Technology', 'Politics'];
  const navigate = useNavigate();
  
  const handleNavigation = (item) => {
    navigate(`/${item.toLowerCase()}`); // Navigating to a URL based on the item name
  }

  return (
    <header className='flex w-full items-center bg-white'>
      <nav className='flex justify-between w-full items-center'>
        <img id="hello" src="src/assets/download.png" alt="Logo" height={100} width={100} /> {/* Replace with your actual logo path */}
        <div className='flex justify-between items-center'>
          {arr.map((item, index) => (
            <div onClick={() => handleNavigation(item)} key={index} className='px-14 py-4 font-nishu text-slate-900 font-bold cursor-pointer hover:bg-black hover:text-white'>
              {item}
            </div>
          ))}
        </div>
        <div className='flex items-center'>
          <div><input className='border p-2' type="text" placeholder="Search" /></div>
          <div className='p-4'>
            <button className='bg-slate-300 text-slate-900 font-semibold py-1 px-4'>
              <span className="material-symbols-outlined">
                search
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;