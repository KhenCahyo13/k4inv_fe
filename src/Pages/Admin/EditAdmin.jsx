import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditAdmin = () => {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [level, setLevel] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getDataById();
    }, [])

    const updateAdmin = async (event) => {
        event.preventDefault();
        try {
            await axios.patch(`http://localhost:4000/users/${id}`, {
                nama_user: nama,
                email_user: email,
                level: level
            });
            navigate('/admin/dataadmin');
        } catch (error) {
            console.log(error);
        }
    }

    const getDataById = async () => {
        try {
            await axios.get(`http://localhost:4000/users/${id}`)
            .then((response) => {
                setNama(response.data.nama_user);
                setEmail(response.data.email_user);
                setLevel(response.data.level);
            }).catch ((error) => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <section className="px-4 py-6 bg-gray-100 min-h-screen md:pl-72 lg:pl-80 lg:pr-12">
        <Sidebar />
        <Header />

        <div className="bg-white px-4 py-6 rounded-md shadow-md my-6 lg:px-8">
            <h1 className="text-gray-800 font-semibold">Edit Data Admin</h1>
            <form onSubmit={updateAdmin} className="lg:columns-2 lg:gap-8 lg:mt-5">
                <div className="mt-6 lg:mt-0">
                    <input type="text" id="name" className="form-control" placeholder="Masukkan Nama Lengkap" autoComplete="off" required onChange={(event) => setNama(event.target.value)} value={nama} />
                </div>
                <div className="mt-3 lg:mt-0">
                    <input type="text" id="email" className="form-control" placeholder="Masukkan Email" autoComplete="off" required onChange={(event) => setEmail(event.target.value)} value={email} />
                </div>
                <div className="mt-3 lg:mt-0">
                    <input type="text" id="email" className="form-control" placeholder="Level Tidak Bisa Diubah" autoComplete="off" required onChange={(event) => setLevel(event.target.value)} value={level} disabled />
                </div>
                <div className="mt-3 flex gap-4 lg:mt-0">
                    <button className="form-button">Edit</button>
                    <button className="reset-button">Reset</button>
                </div>
            </form>
        </div>
        </section>
        </>
    )
}

export default EditAdmin;