import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormEditTamu = () => {
    const [namaTamu, setNamaTamu] = useState('');
    const [emailTamu, setEmailTamu] = useState('');
    const [idPernikahan, setIdPernikahan] = useState('');
    const [msg, setMsg] = useState('');
    const { id_tamu } = useParams();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getDataTamu();
    }, []);

    const getDataTamu = async () => {
        try {
            await axios.get(`http://localhost:4000/tamu/${id_tamu}`)
            .then((response) => {
                setNamaTamu(response.data.nama_tamu);
                setEmailTamu(response.data.email_tamu);
                setIdPernikahan(response.data.pernikahanIdPernikahan)
            }).catch((error) => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    const editTamu = async (event) => {
        event.preventDefault();
        try {
            await axios.patch(`http://localhost:4000/tamu/${id_tamu}`, {
                nama_tamu: namaTamu,
                email_tamu: emailTamu,
                pernikahanIdPernikahan: idPernikahan
            }).then((response) => {
                setMsg(response.data.msg + '....diarahkan ke halaman tamu');
                setTimeout(() => {
                    navigate(`/datatamu/${idPernikahan}`);
                }, 3000)
            }).catch((error) => {
                console.log(error);
            })
        } catch(error) {
            console.log(error)
        }
    }

    const resetForm = () => {
        setNamaTamu('');
        setEmailTamu('');
        setIdPernikahan('');
    }

    return (
        <section className="bg-gray-400 px-4 py-8 min-h-screen w-full lg:px-14 lg:py-6">
            <div className="bg-white rounded-md shadow-md px-4 py-6 mt-4">
                <h1 className="text-center text-gray-800 text-lg font-semibold">Form Edit Data Tamu</h1>
                <p className="text-green-500 text-sm text-center">{msg}</p>
                <form onSubmit={editTamu} className="mt-4">
                    <div className="lg:flex lg:gap-6">
                        <input type="text" className="form-control" placeholder="Nama Tamu" autoComplete="off" value={namaTamu} onChange={(event) => setNamaTamu(event.target.value)} required/>
                        <input type="email" className="form-control" placeholder="Email Tamu" autoComplete="off" value={emailTamu} onChange={(event) => setEmailTamu(event.target.value)} required />
                    </div>
                    <div className="lg:flex lg:gap-6">
                        <input type="text" className="form-control lg:w-[50%]" placeholder="Id Pernikahan" autoComplete="off" value={idPernikahan} onChange={(event) => setIdPernikahan(event.target.value)} required />
                        <div className="flex gap-4 lg:w-[50%]">
                            <button className="form-button">Edit</button>
                            <button className="reset-button" onClick={resetForm}>Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FormEditTamu;