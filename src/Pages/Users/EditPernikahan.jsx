import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom";

const EditPernikahan = () => {
    const [perempuan, setPerempuan] = useState('');
    const [laki, setLaki] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [jam, setJam] = useState('');
    const [tempat, setTempat] = useState('')
    const [deskripsi, setDeskripsi] = useState('');
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [idUser, setIdUser] = useState('');
    const { id_pernikahan } = useParams();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const store = sessionStorage.getItem('datas');
        const parse = JSON.parse(store);
        setIdUser(parse.id_user);
        getDataPernikahan();
    }, [])

    const getDataPernikahan = async () => {
        try {
            await axios.get(`http://localhost:4000/onepernikahan/${id}`)
            .then((response) => {
                setPerempuan(response.data.nama_perempuan);
                setLaki(response.data.nama_laki);
                setTanggal(response.data.tanggal);
                setJam(response.data.jam);
                setTempat(response.data.tempat);
                setDeskripsi(response.data.deskripsi);
            }).catch((error) => {
                console.log(error);
            })
        } catch(error) {
            console.log(error)
        }
    }

    const updatePernikahan = async (event) => {
        event.preventDefault();
        try {
            await axios.patch(`http://localhost:4000/pernikahan/${id}`, {
                nama_perempuan: perempuan,
                nama_laki: laki,
                tanggal: tanggal,
                jam: jam,
                tempat: tempat,
                deskripsi: deskripsi
            }).then((response) => {
                setMsg(response.data.msg + '...Diarahkan kembali ke halaman undangan')
                setTimeout(() => {
                    navigate(`/dataundangan/${idUser}`);
                }, 3000)
            }).catch((error) => {
                console.log(error);
            })
        } catch(error) {
            console.log(error)
        }
    }
    
    const resetForm = () => {
        setPerempuan('');
        setLaki('');
        setTanggal('');
        setJam('');
        setTempat('');
        setDeskripsi('');
    }
    return (
        <section className="bg-gray-400 px-6 pt-6 absolute top-0 w-full -z-10 min-h-screen">
            <form onSubmit={updatePernikahan} className="bg-white rounded-md shadow-md px-4 pt-4 mb-4">
            <h1 className="font-semibold text-gray-800 text-lg text-center">Form Edit Undangan</h1>
                <p className="text-green-400 text-sm font-medium mt-2 text-center">{msg}</p>
                <div className="mt-4">
                    <input type="text" id="perempuan" className="form-control" placeholder="Nama Perempuan" autoComplete="off" required onChange={(event) => setPerempuan(event.target.value)} value={perempuan} />
                    <input type="text" id="perempuan" className="form-control" placeholder="Nama Laki-Laki" autoComplete="off" required onChange={(event) => setLaki(event.target.value)} value={laki} />
                    <input type="date" id="perempuan" className="form-control text-gray-400" autoComplete="off" required onChange={(event) => setTanggal(event.target.value)} value={tanggal} />
                    <input type="time" id="perempuan" className="form-control text-gray-400" autoComplete="off" required onChange={(event) => setJam(event.target.value)} value={jam} />
                    <input type="text" id="perempuan" className="form-control" placeholder="Tempat Pernikahan" autoComplete="off" required onChange={(event) => setTempat(event.target.value)} value={tempat} />
                    <textarea className="form-control h-44" placeholder="Deskripsi Pernikahan" autoComplete="off" required onChange={(event) => setDeskripsi(event.target.value)} value={deskripsi} />
                    <div className="flex gap-4">
                    <button className="form-button">{loading ? 'Loading...' : 'Update'}</button>
                    <button className="reset-button" onClick={resetForm}>Reset</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default EditPernikahan;