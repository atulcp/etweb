const NavbarThree = () => {
    return (
      <nav className="bg-transparent bg-opacity-70 text-white absolute w-full">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* <div className="font-bold text-lg">Eternity Solutions</div> */}
          <div className="space-x-4">
            <a href="#" className="  hover:bg-opacity-30 px-3 py-2 rounded">Home</a>
            <a href="#" className=" hover:bg-opacity-30 px-3 py-2 rounded">Services</a>
            <a href="#" className=" hover:bg-opacity-30 px-3 py-2 rounded">About</a>
            <a href="#" className=" hover:bg-opacity-30 px-3 py-2 rounded">Contact</a>
          </div>
        </div>
      </nav>
    );
  };
export default NavbarThree;  