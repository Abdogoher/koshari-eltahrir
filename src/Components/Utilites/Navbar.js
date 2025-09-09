import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-brandRed text-white shadow-lg rounded-b-xl fixed z-10 w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Links */}
        <ul className="flex ">
          <li>
            <a href="/" className="text-xl hover:text-brandYellow transition">
              الصفحةالرئيسية
            </a>
          </li>
          <li>
            <a href='/manu' className="text-xl m-8 hover:text-brandYellow transition">
              المنيو
            </a>
          </li>
              </ul>

              {/* Logo */}
        <h1 className="text-2xl font-bold text-brandYellow">
          كشري التحرير
              </h1> 
              
              <ul className='flex '>
                  <li>
            <a href="/about" className="text-xl m-8 hover:text-brandYellow transition">
              عن المطعم
            </a>
          </li>
          <li>
            <a href="/contact" className="text-xl hover:text-brandYellow transition">
              تواصل معنا
            </a>
          </li>
              </ul>
      </div>
    </nav>
  )
}

export default Navbar
