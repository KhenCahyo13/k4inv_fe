import { Link } from "react-router-dom";

const Navbar = () => {
    const showMenu = () => {
        const menu = document.getElementById('menu');
        const iconMenu = document.getElementById('iconButton');
        iconMenu.classList.toggle('fa-xmark')
        menu.classList.toggle('show-menu');
    }

const showSetting = () => {
    document.getElementById('dropSetting').classList.toggle('hidden')
}

const showProfile = () => {
    document.getElementById('profile').classList.toggle('hidden')
}
    return (
        <>
        <section className="navbar-box">
            <img className="w-[102px] h-[40px] md:w-[118px]" src="image/logo.png" alt="Logo" />
            <button onClick={showMenu} className="md:hidden"><i className="fa-solid fa-bars text-gray-100 text-xl hover:text-blue-400 transition duration-300" id="iconButton"></i></button>

            {/* Mobile Menu */}
            <div className="mobile-menu -translate-x-96 transition duration-500 z-50" id="menu">
                <div className="flex items-center justify-between cursor-pointer" onClick={showSetting}>
                    <i className="fa-solid fa-circle-user text-gray-800 text-3xl"></i>
                </div>
                <div className="bg-white px-4 py-2 rounded-md shadow-md mt-2 absolute transition duration-300 hidden" id="dropSetting">
                    <p className="font-light text-[15px] px-2 py-2 rounded-md cursor-pointer hover:bg-sidebar-100 hover:bg-opacity-30 transition duration-300"><i className="fa-solid fa-gear mr-1"></i> Pengaturan</p>
                    <p className="font-light text-[15px] px-2 py-2 rounded-md cursor-pointer hover:bg-sidebar-100   hover:bg-opacity-30 transition duration-300"><i className="fa-solid fa-right-from-bracket mr-1"></i><Link to="/">Logout</Link></p>
                </div>
                <hr className="my-4 text-gray-800" />
                <ul>
                    <li className="mobile-link"><Link to="/user">Home</Link></li>
                    <li className="mobile-link"><Link to="/undangan">Undangan</Link></li>
                    <li className="mobile-link"><Link to="/tentang">Tentang</Link></li>
                </ul>
            </div>

            {/* Desktop & Tablet Menu */}
            <ul className="hidden md:flex md:items-center md:gap-4 lg:gap-10">
                <li className="desk-link"><Link to="/user">Home</Link></li>
                <li className="desk-link"><Link to="/undangan">Undangan</Link></li>
                <li className="desk-link"><Link to="/tentang">Tentang</Link></li>
                <li className="cursor-pointer" onClick={showSetting}>
                    <i className="fa-solid fa-circle-user text-white text-2xl ml-6 mr-3" onClick={showProfile}></i>
                    <ul className='absolute mt-2 hidden bg-white rounded-md shadow-md px-4 py-2 flex-col' id="profile">
                        <li className="font-light text-[15px] px-2 py-2 rounded-md cursor-pointer hover:bg-sidebar-100 hover:bg-opacity-30 transition duration-300"><i className="fa-solid fa-gear mr-1"></i> Pengaturan</li>
                        <li className="font-light text-[15px] px-2 py-2 rounded-md cursor-pointer hover:bg-sidebar-100   hover:bg-opacity-30 transition duration-300"><i className="fa-solid fa-right-from-bracket mr-1"></i><Link to="/">Logout</Link></li>
                    </ul>
                </li>
            </ul>
        </section>
        </>
    )
}

export default Navbar;