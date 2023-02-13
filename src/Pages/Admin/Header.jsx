import { Link } from "react-router-dom";
import axios from "axios";
import Datetime from 'react-datetime';

const Header = () => {
    const current = new Date().toLocaleString();
    const showSidebar = () => {
        const sidebar = document.getElementById('sideBar');
        const iconMenu = document.getElementById('iconMenu');
        const dropSetting = document.getElementById('dropSetting');
        dropSetting.classList.toggle('opacity-100');
        iconMenu.classList.toggle('fa-xmark');
        sidebar.classList.toggle('-translate-x-0');
    }

    const showDropSetting = () => {
        const dropSetting = document.getElementById('dropSetting');
        dropSetting.classList.toggle('hidden')
    }
    return (
        <>
        <div className="bg-white px-4 py-3 flex items-center justify-between rounded-md shadow-md lg:px-8 lg:py-4">
            <p className="text-gray-800 text-sm hidden md:block">{current}</p>
            <button className="flex gap-2 items-center z-10 md:justify-end" onClick={showDropSetting}>
            <i className="fa-solid fa-circle-user text-3xl text-gray-800"></i>
            </button>
            <i className="fa-solid fa-bars md:hidden cursor-pointer" id="iconMenu" onClick={showSidebar}></i>
        </div>
        <div className="bg-white px-4 py-2 rounded-md shadow-md w-[50%] mt-2 absolute transition duration-300 hidden" id="dropSetting">
            <p className="font-light text-[15px] px-2 py-2 rounded-md cursor-pointer hover:bg-sidebar-100 hover:bg-opacity-30 transition duration-300"><i className="fa-solid fa-gear mr-1"></i> Pengaturan</p>
            <p className="font-light text-[15px] px-2 py-2 rounded-md cursor-pointer hover:bg-sidebar-100 hover:bg-opacity-30 transition duration-300"><i className="fa-solid fa-right-from-bracket mr-1"></i> <Link to="/">Logout</Link></p>
        </div>
        </>
    )
}

export default Header;