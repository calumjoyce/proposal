import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full p-16 transition-all transition-400 ${isScrolled ? 'bg-white py-8' : ''}`}>
      <div className='module-container'>
        <div className='flex items-center justify-between'>
            <div className='w-full lg:w-6/12 flex items-center'>
              <img src={logo} className="h-20 object-contain w-auto" alt="logo" />
            </div>
            <div className='w-full lg:w-6/12 flex justify-end items-center'>
              <div className='h-10 w-10 relative'>
                <div className='menu-open cursor-pointer inline-flex items-center justify-center flex-col h-full w-full before:content-[""] before:w-full before:h-[2px] before:bg-black before:block before:mb-3 after:content-[""] after:w-full after:h-[2px] after:bg-black after:block'>
                  
                </div>
              </div>                
            </div>
          </div>
      </div>
    </header>
  );
};

export default Header;
