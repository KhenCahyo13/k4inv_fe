import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormPernikahan = () => {
    const [idUser, setIdUser] = useState('');
    const [perempuan, setPerempuan] = useState('');
    const [laki, setLaki] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [jam, setJam] = useState('');
    const [tempat, setTempat] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const store = sessionStorage.getItem('datas');
        const parse = JSON.parse(store);
        setIdUser(parse.id_user);
    }, [])

    const resetForm = () => {
        setPerempuan('');
        setLaki('');
        setTanggal('');
        setJam('');
        setTempat('');
        setDeskripsi('');
    }

    const submitPernikahan = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:4000/pernikahan/', {
                idUser, perempuan, laki, tanggal, jam, tempat, deskripsi
            })
            .then((response) => {
                sessionStorage.setItem('pernikahan', JSON.stringify(response.data));
                setMsg(response.data.msg);
                setLoading(true);
                setTimeout(() => {
                    navigate(`/dataundangan/${response.data.id_user}`);
                }, 3000)
            }).catch((error) => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
        <Navbar />
        <section className="bg-gray-400 px-6 pt-20 absolute top-0 w-full -z-10 min-h-screen lg:px-24">
            <form onSubmit={submitPernikahan} className="bg-white rounded-md shadow-md px-4 pt-4 mb-4 lg:px-8 lg:pb-4 lg:mb-8">
            <h1 className="font-semibold text-gray-800 text-lg text-center">Isi Form Undangan Anda</h1>
                <p className="text-green-400 text-sm font-medium mt-2 text-center">{msg}</p>
                <div className="mt-4">
                    <input type="hidden" id="id_user" className="form-control" placeholder="Id_User" autoComplete="off" required onChange={(event) => setIdUser(event.target.value)} value={idUser} />
                    <div className="lg:flex lg:justify-center lg:gap-8">
                        <input type="text" id="perempuan" className="form-control" placeholder="Nama Perempuan" autoComplete="off" required onChange={(event) => setPerempuan(event.target.value)} value={perempuan} />
                        <input type="text" id="perempuan" className="form-control" placeholder="Nama Laki-Laki" autoComplete="off" required onChange={(event) => setLaki(event.target.value)} value={laki} />
                    </div>
                    <div className="lg:flex lg:justify-center lg:gap-8">
                        <input type="date" id="perempuan" className="form-control text-gray-400" autoComplete="off" required onChange={(event) => setTanggal(event.target.value)} value={tanggal} />
                        <input type="time" id="perempuan" className="form-control text-gray-400" autoComplete="off" required onChange={(event) => setJam(event.target.value)} value={jam} />
                    </div>
                    <div className="lg:gap-8">
                    <input type="text" id="perempuan" className="form-control lg:h-12" placeholder="Tempat Pernikahan" autoComplete="off" required onChange={(event) => setTempat(event.target.value)} value={tempat} />
                    <textarea className="form-control h-44" placeholder="Deskripsi Pernikahan" autoComplete="off" required onChange={(event) => setDeskripsi(event.target.value)} value={deskripsi} />
                    </div>
                    <div className="flex gap-4 lg:w-[40%]">
                    <button className="form-button">{loading ? 'Loading...' : 'Buat Undangan'}</button>
                    <button className="reset-button" onClick={resetForm}>Reset</button>
                    </div>
                </div>
            </form>
        </section>
        </>
    )
}

export default FormPernikahan;