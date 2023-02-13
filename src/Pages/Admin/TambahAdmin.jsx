import Header from "./Header"
import Sidebar from "./Sidebar"
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const TambahAdmin = () => {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [level, setLevel] = useState('Admin');
    const navigate = useNavigate();

    const addAdmin = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:4000/users/addUsers/', {
                nama,
                email,
                password,
                confPassword,
                level
            });
            navigate('/admin/dataadmin')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        <section className="px-4 py-6 bg-gray-100 min-h-screen md:pl-72 lg:pl-80 lg:pr-12">
        <Sidebar />
        <Header />

        <div className="bg-white px-4 py-6 rounded-md shadow-md my-6 lg:px-8">
            <h1 className="text-gray-800 font-semibold">Tambah Data Admin</h1>
            <form onSubmit={addAdmin}>
                <div className="lg:flex lg:mt-4 lg:gap-4">
                    <div className="mt-6 lg:mt-0">
                        <input type="text" id="name" className="form-control" placeholder="Masukkan Nama Lengkap" autoComplete="off" required onChange={(event) => setNama(event.target.value)} value={nama} />
                    </div>
                    <div className="mt-3 lg:mt-0">
                        <input type="text" id="email" className="form-control" placeholder="Masukkan Email" autoComplete="off" required onChange={(event) => setEmail(event.target.value)} value={email} />
                    </div>
                </div>
                <div className="lg:flex lg:gap-4">
                    <div className="mt-3 lg:mt-0">
                        <input type="password" id="password" className="form-control" placeholder="Masukkan Password" autoComplete="off" required onChange={(event) => setPassword(event.target.value)} value={password} />
                    </div>
                    <div className="mt-3 lg:mt-0">
                        <input type="password" id="confPassword" className="form-control" placeholder="Konfirmasi Password" autoComplete="off" required onChange={(event) => setConfPassword(event.target.value)} value={confPassword} />
                    </div>
                </div>
                <div className="mt-3 flex gap-4 lg:mt-0 lg:w-[40%]">
                    <button className="form-button">Tambah</button>
                    <button className="reset-button">Reset</button>
                </div>
            </form>
        </div>
        </section>
        </>
    )
}

export default TambahAdmin;