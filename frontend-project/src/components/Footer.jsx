import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className="mb-5 w-40 h-24 object-contain" alt="" />
                <p  className="w-full md:w-2/3 text-gray-600">
                    Stay connected with us for the latest drops, exclusive offers, and style inspiration. Follow us on social media and subscribe to our newsletter to never miss a beat. For support or inquiries, feel free to reach out—we're here to help.
                </p>
            </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                    <div>
                        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                        <ul className='flex flex-col gap-1 text-gray-600'>
                            <li>+977-9819212135</li>
                            <li>contact@babalwears.com</li>
                        </ul>
                    </div>
        </div>
                <div>
                    <hr />
                    <p className='py-5 text-sm text-center '>copyright  2025 @  babalwears.com  -  All Right Reserved.</p>
                </div>
                
    </div>
  )
}

export default Footer
