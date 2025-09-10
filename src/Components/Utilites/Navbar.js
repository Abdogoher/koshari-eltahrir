import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-brandRed text-white shadow-lg rounded-b-xl fixed z-10 w-full ">
      <div className="container mx-auto px-2 md:px-4 py-0 md:py-3 flex justify-between items-center">

        {/* Links */}
        <ul className="flex pb-4">
          <li>
            <a href="/" className="text-sm md:text-xl hover:text-brandYellow transition">
              الصفحةالرئيسية
            </a>
          </li>
          <li>
            <a href='/manu' className="text-sm md:text-xl m-2 md:m-8 hover:text-brandYellow transition">
              المنيو
            </a>
          </li>
              </ul>

              {/* Logo */}
        <h1 className="text-sm md:text-xl font-bold text-brandYellow">
          كشري التحرير
              </h1> 
              
              <ul className='flex pb-4'>
                  <li>
            <a href="/about" className="text-sm md:text-xl m-2 md:m-8 hover:text-brandYellow transition">
              عن المطعم
            </a>
          </li>
          <li>
            <a href="/contact" className="text-sm md:text-xl hover:text-brandYellow transition">
              تواصل معنا
            </a>
          </li>
              </ul>
      </div>
    </nav>
  )
}

export default Navbar
