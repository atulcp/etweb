 import React from 'react'
 
 const NavbarFive = () => {
   return (
     <div>
        <nav className="bg-amber-500 text-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold">Eternity Solutions</div>
          <div className="space-x-4">
            <a href="#services" className="hover:underline">Calendar</a>
            <a href="#testimonials" className="hover:underline">Notes</a>
            <a href="#contact" className="hover:underline">Account</a>
          </div>
        </div>
      </nav> 
     </div>
   )
 }
 
 export default NavbarFive
 