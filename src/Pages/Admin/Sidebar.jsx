import { Link } from 'react-router-dom';

const Sidebar = () => {
    const showDropUser = () => {
        const iconUser = document.getElementById('iconUser');
        const dropUser = document.getElementById('dropUser');
        dropUser.classList.toggle('hidden')
        iconUser.classList.toggle('fa-caret-up');
    }

    const showDropAdmin = () => {
        const dropAdmin = document.getElementById('dropAdmin');
        dropAdmin.classList.toggle('hidden');
    }

    const showDropTema = () => {
        const dropTema = document.getElementById('dropTema');
        dropTema.classList.toggle('hidden')
    }

    
    return (
        <div className="bg-sidebar-100 w-[60%] h-full fixed bottom-0 top-0 left-0 right-0 shadow-md px-4 py-6 -translate-x-80 transition duration-300 md:translate-x-0 md:w-[34%] md:px-8 lg:w-[20%] z-50" id="sideBar">
            {/* <img src="image/Logo.png" className="w-36 block mx-auto" alt="" /> */}
            <h1 className="text-white font-semibold text-center text-lg">K4 INVITATION</h1>
            <p className="text-white text-sm text-center">Admin Dashboard</p>
            <hr className="my-4" />
                <ul>
                    <li className="text-white text-lg font-light mt-4 cursor-pointer hover:bg-blue-400 hover:bg-opacity-40 transition duration-300 px-2 py-2 rounded-md lg:text-[15px] lg:mt-2"><i className="fa-solid fa-table-columns text-white text-lg mr-2"></i><Link to='/admin'>Dashboard</Link></li>
                    <li className="text-white text-lg font-light mt-4 cursor-pointer hover:bg-blue-400 hover:bg-opacity-40 transition duration-300 px-2 py-2 rounded-md lg:text-[15px] lg:mt-2"><i className="fa-solid fa-user text-white text-lg mr-2"></i> Data User <i className="fa-solid fa-caret-down text-white text-[13px] ml-2" id="iconUser" onClick={showDropUser}></i></li>
                    {/* Dropdown Data User */}
                    <div className="bg-sidebar-100 mx-1 px-2 py-1 rounded-md shadow-md my-2 hidden" id="dropUser">
                        <ul>
                            <li className="text-white font-light mt-2 cursor-pointer hover:text-blue-400 transition duration-300"><Link to='/admin/tambahuser'>Tambah Data User</Link></li>
                            <li className="text-white font-light my-4 cursor-pointer hover:text-blue-400 transition duration-300"><Link to='/admin/datauser'>Lihat Data User</Link></li>
                        </ul>
                    </div>
                    <li className="text-white text-lg font-light mt-4 cursor-pointer hover:bg-blue-400 hover:bg-opacity-40 transition duration-300 px-2 py-2 rounded-md lg:text-[15px] lg:mt-2"><i className="fa-solid fa-lock text-white text-lg mr-2"></i> Data Admin <i className="fa-solid fa-caret-down text-white text-[13px] ml-2" onClick={showDropAdmin}></i></li>
                    {/* Dropdown Data User */}
                    <div className="bg-sidebar-100 mx-1 px-2 py-1 rounded-md shadow-md my-2 hidden" id="dropAdmin">
                        <ul>
                            <li className="text-white font-light mt-2 cursor-pointer hover:text-blue-400 transition duration-300"><Link to='/admin/tambahadmin'>Tambah Data Admin</Link></li>
                            <li className="text-white font-light my-4 cursor-pointer hover:text-blue-400 transition duration-300"><Link to='/admin/dataadmin'>Lihat Data Admin</Link></li>
                        </ul>
                    </div>
                    <li className="text-white text-lg font-light mt-4 cursor-pointer hover:bg-blue-400 hover:bg-opacity-40 transition duration-300 px-2 py-2 rounded-md lg:text-[15px] lg:mt-2"><i className="fa-solid fa-sun text-white text-lg mr-2"></i> Tema <i class="fa-solid fa-caret-down text-white text-[13px] ml-2" onClick={showDropTema}></i></li>
                    {/* Dropdown Data User */}
                    <div className="bg-sidebar-100 mx-1 px-2 py-1 rounded-md shadow-md my-2 hidden" id="dropTema">
                        <ul>
                            <li className="text-white font-light mt-2 cursor-pointer hover:text-blue-400 transition duration-300">Terang</li>
                            <li className="text-white font-light my-4 cursor-pointer hover:text-blue-400 transition duration-300">Gelap</li>
                        </ul>
                    </div>
                </ul>
        </div>
    )
}

export default Sidebar;