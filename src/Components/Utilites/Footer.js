import React from 'react'

const Footer = () => {
  return (
    <div className='px-2 md:px-5 flex bg-brandRed text-white w-full rounded-5 mt-5 justify-between items-center'>
          <div className='px-4 py-1 flex justify-between items-center'>
              <ul className='flex pb-3'>
                  <li className='ml-3'><a className='text-sm md:text-xl hover:text-brandYellow transition' href='/'><i class="fa-brands fa-instagram"></i></a></li>
                  <li className='ml-3'><a className='text-sm md:text-xl hover:text-brandYellow transition' href='/'><i class="fa-brands fa-x-twitter"></i></a></li>
                  <li className='ml-3'><a className='text-sm md:text-xl hover:text-brandYellow transition' href='/'><i class="fa-brands fa-youtube"></i></a></li>
                  <li className='ml-3'><a className='text-sm md:text-xl hover:text-brandYellow transition' href='/'><i className="fab fa-whatsapp fa-lg hover:text-yellow-400"></i></a></li>
                  <li className='ml-3'><a className='text-sm md:text-xl hover:text-brandYellow transition' href='/'><i class="fa-brands fa-facebook"></i></a></li>
              </ul>
          </div>
          <div>
        <p className='text-xs md:text-sm'>© 2024 Your Company, Inc. All rights reserved.</p>
          </div>
    </div>
  )
}

export default Footer
