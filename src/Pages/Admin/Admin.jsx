import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

const Admin = () => {   
    const [nama, setNama] = useState('');
    useEffect(() => {
        const store = sessionStorage.getItem('datas');
        const parse = JSON.parse(store);
        setNama(parse.nama_user);
    }, []) 
    return (
        <>
       <section className="bg-gray-100 px-6 py-4 w-full md:pl-72 lg:pl-80 lg:pr-12">
        {/* Sidebar */}
        <Sidebar />
        {/* Header Section */}
        <Header />

        {/* Section Welcome */}
        <div className="bg-white px-4 pt-3 rounded-md shadow-md my-6 md:pt-6 md:px-8">
            <div>
                <h1 className="font-semibold text-lg text-gray-800">Selamat Datang Kembali, {nama} 👋</h1>
                <p className="font-light text-sm text-gray-800 mt-1">Bagaimana tingkatan data hari ini.? apakah ada kemajuan atau penurunan.?</p>
            </div>
            <div className="mt-4 md:flex md:justify-end">
                <img src="image/Admin1.png" className="w-36" alt="" />
            </div>
        </div>

        {/* Section Data */}
        <div className="bg-white px-4 pt-3 rounded-md shadow-md my-6 md:pt-6 md:px-8 lg:px-12">
            <h1 className="font-semibold text-lg text-gray-800">Berikut data yang kami kumpulkan 🧐</h1>
            <p className="font-light text-sm text-gray-800 mt-1">Kami mengumpulkan data dari website kita selama beberapa pekan terakhir</p>
            <div className="block mx-auto my-4 lg:columns-2">
                <div className="bg-sidebar-100 px-4 py-4 rounded-md shadow-md my-4 lg:my-0">
                    <p className="text-white text-lg font-semibold"><i className="fa-solid fa-envelope mr-2"></i> 37 Undangan</p>
                    <p className="text-white text-[15px] font-light mt-1 lg:mt-2">Ada 37 Undangan yang telah dibuat hari ini 🧐</p>
                </div>
                <div className="bg-yellow-400 px-4 py-4 rounded-md shadow-md my-4 lg:mt-6">
                    <p className="text-lg font-semibold text-gray-800"><i className="fa-solid fa-user text-gray-800"></i> 10 User</p>
                    <p className="text-gray-800 text-[15px] font-light lg:mt-2">Ada 10 User yang sedang login di website kita 😁</p>
                </div>
                <div className="bg-green-500 px-4 py-4 rounded-md shadow-md my-4 lg:my-0">
                    <p className="text-lg font-semibold text-white"><i className="fa-solid fa-envelope text-white"></i> 127 Undangan</p>
                    <p className="text-white text-[15px] font-light lg:mt-2">Ada 127 Undangan yang telah dibuat didalam website kita 🧐</p>
                </div>
                <div className="bg-red-500 px-4 py-4 rounded-md shadow-md my-4 lg:mt-6">
                    <p className="text-lg font-semibold text-white"><i className="fa-solid fa-check-double text-white"></i> Result Akhir</p>
                    <p className="text-white text-[15px] font-light lg:mt-2">Yahh sayangnya tingkat penggunaan menurun 😥</p>
                </div>
            </div>
            <img src="image/Admin2.png" className="w-56" alt="" />
        </div>

        {/* Section Tingkatkan */}
        <div className="bg-white rounded-md shadow-md px-4 pt-3 my-6 md:pt-6 md:px-8 lg:px-12">
            <h1 className="font-semibold text-lg text-gray-800">Ayo terus tingkatkan kualitas website kita 🚀</h1>
            <p className="font-light text-sm text-gray-800 mt-1">Semakin meningkat kualitas website kita maka semakin banyak pula pelanggan yang kita dapatkan, Semangat..!!!</p>
            <img src="image/Admin3.png" className="w-62 mt-6 lg:w-80 lg:mx-auto" alt="" />
        </div>
       </section>
       </>
    )
}

export default Admin;