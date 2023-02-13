import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DataAdmin = () => {
    const [dataAdmin, setDataAdmin] = useState([]);

    useEffect(() => {
        getAdminData();
    }, [])

    const getAdminData = () => {
        axios.get('http://localhost:4000/users/admin')
        .then((response) => {
            setDataAdmin(response.data);
        }).catch ((error) => {
            console.log(error);
        }) 
    }

    const deleteAdmin = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/users/${id}`);
            getAdminData();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <Sidebar />
        <div className="bg-gray-100 px-4 py-4 min-h-screen md:pl-72 lg:pl-80 lg:pr-12">
            <Header />

            <div className="bg-white px-4 py-4 rounded-md shadow-md mt-4">
                <div className="">
                    <h1 className="font-semibold text-lg text-gray-800">Hallo Admin !!</h1>
                    <p className="font-light text-sm text-gray-800">Berikut adalah List admin yang mengatur website K4 Invitation</p>
                </div>
                <div className="">
                    <img src="image/Admin4.png" className="" alt="" />
                </div>
            </div>

            <div className="bg-white px-4 py-4 rounded-md shadow-md mt-4">
                
    <div class="overflow-x-auto relative rounded-md shadow-md">
        <button className="form-button mt-4 lg:w-36"><Link to='/admin/tambahadmin'>Tambah Data</Link></button>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        No
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Nama
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Level
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Email
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Opsi
                    </th>
                </tr>
            </thead>
            <tbody>
                {dataAdmin.map((admin, index) => (
                <tr key={admin.id_user} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {index}
                    </th>
                    <td class="py-4 px-6">
                        {admin.nama_user}
                    </td>
                    <td class="py-4 px-6">
                        {admin.level}
                    </td>
                    <td class="py-4 px-6">
                        {admin.email_user}
                    </td>
                    <td class="py-4 px-2 lg:flex lg:justify-center lg:gap-2">
                        <button className="delete-button" onClick={() => deleteAdmin(admin.id_user)}>Hapus</button>
                        <button className="reset-button"><Link to={`/admin/editadmin/${admin.id_user}`}>Edit</Link></button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
            </div>
        </div>
        </>
    )
}

export default DataAdmin;