import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const DataTamu = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [idUser, setIdUser] = useState('');
    const [dataTamu, setDataTamu] = useState([]);
    const [namaTamu, setNamaTamu] = useState('');
    const [emailTamu, setEmailTamu] = useState('');
    const [idPernikahan, setIdPernikahan] = useState('');
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const store = sessionStorage.getItem('datas');
        const parse = JSON.parse(store);
        setIdUser(parse.id_user);
        getTamuByPernikahan();
    });

    const getTamuByPernikahan = async () => {
        try {
            await axios.get(`http://localhost:4000/tamubypernikahan/${id}`)
            .then((response) => {
                const datas = response.data;
                setDataTamu(datas);
            }).catch((error) => {
                console.log(error);
            })
        } catch(error) {
            console.log(error)
        }
    }

    const addTamu = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:4000/tamu/', {
                namaTamu,
                emailTamu,
                idPernikahan
            }).then((response) => {
                setMsg(response.data.msg);
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    setMsg('');
                    setNamaTamu('')
                    setEmailTamu('')
                    setIdPernikahan('')
                    navigate(`/datatamu/${id}`)
                }, 2000)
            }).catch((error) => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTamu = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/tamu/${id}`)
            .then((response) => {
                console.log(response.data.msg)
            }).catch((error) => {
                console.log(error);
            });
            getTamuByPernikahan();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="bg-gray-400 min-h-screen px-2 py-2 lg:px-12 lg:py-8">
            <div className="bg-white px-2 py-4 rounded-md shadow-md mt-6">                
                <h1 className="text-lg font-semibold text-center text-gray-800 mb-2">- Data Tamu Undangan Anda -</h1>
                <div className="overflow-x-auto relative">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className="text-center">
                                <th scope="col" className="py-3 px-6">
                                    Nama Tamu
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Email Tamu
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Id Pernikahan
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Preview
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Aksi
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Kirim
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataTamu.map((tamu) => (
                            <tr key={tamu.id_tamu} class="bg-white mx-auto text-center dark:bg-gray-800">
                                <td className="py-4 px-6" id='namaTamu'>
                                    {tamu.nama_tamu}
                                </td>
                                <td className="py-4 px-6" id='emailTamu'>
                                    {tamu.email_tamu}
                                </td>
                                <td className="py-4 px-3">
                                    {tamu.pernikahanIdPernikahan}
                                </td>
                                <td className="py-4 px-3">
                                    <button className="bg-green-400 px-6 py-2 rounded-md shadow-md shadow-green-400 hover:bg-green-500 hover:shadow-green-500 transition duration-300 text-white"><Link to={`/undangantamu/${id}/${tamu.pernikahanIdPernikahan}/${tamu.id_tamu}`}>Dibuat Untuk Tamu</Link></button>
                                </td>
                                <td className="py-4 px-3">
                                    <Link to={`/edittamu/${tamu.id_tamu}`}><button className="reset-button lg:w-[42%] lg:mr-4"><i className="fa-solid fa-pen-to-square text-gray-800"></i></button></Link>
                                    <button className="bg-red-400 px-6 py-2 rounded-md shadow-md shadow-red-400 hover:bg-red-500 hover:shadow-red-500 transition duration-300" onClick={() => deleteTamu(tamu.id_tamu)} ><i className="fa-solid fa-trash text-white"></i></button>
                                </td>
                                <td className="py-4 px-3">
                                    <button className="form-button"><Link to={`/emailform/${tamu.id_tamu}`}>Kirim Ke Email</Link></button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Link to={`/dataundangan/${idUser}`}><button className="mt-12 mb-2 ml-4 text-sm"><i className="fa-solid fa-arrow-left text-gray-800 mr-3"></i>Kembali Ke Data Undangan</button></Link>
            </div>
            <div className="bg-white rounded-md shadow-md px-4 py-6 mt-4">
                <h1 className="text-center text-gray-800 text-lg font-semibold">Form Tambah Data Tamu</h1>
                <p className="text-green-500 text-sm text-center">{msg}</p>
                <form onSubmit={addTamu} className="mt-4">
                    <div className='lg:flex lg:justify-center lg:gap-6'>
                        <input type="text" className="form-control" placeholder="Nama Tamu" autoComplete="off" onChange={(event) => setNamaTamu(event.target.value)} value={namaTamu} required/>
                        <input type="email" className="form-control" placeholder="Email Tamu" autoComplete="off" onChange={(event) => setEmailTamu(event.target.value)} value={emailTamu} required />
                    </div>
                    <div className='lg:flex lg:gap-6'>
                        <input type="text" className="form-control hidden" placeholder="Id Pernikahan" autoComplete="off" onChange={(event) => setIdPernikahan(event.target.value)} value={id} required />
                        <button className="form-button lg:w-[30%] lg:justify-start">{loading ? 'Loading...' : 'Tambahkan'}</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default DataTamu;