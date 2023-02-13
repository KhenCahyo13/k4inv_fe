import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios'

const DataUndangan = () => {
    const { id } = useParams();
    const [dataPernikahan, setDataPernikahan] = useState([]);
    const [nama, setNama] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(() => {
        const store = sessionStorage.getItem('datas');
        const parse = JSON.parse(store);
        setNama(parse.nama_user)
        getPernikahanById();
    }, [])

    const getPernikahanById = async () => {
        await axios.get(`http://localhost:4000/pernikahan/${id}`)
        .then((response) => {
            const datas = response.data;
            console.log(datas);
            setDataPernikahan(datas);
        }).catch((error) => {
            console.log(error)
        })
    }

    const deletePernikahan = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/pernikahan/${id}`)
            .then((response) => {
                setMsg(response.data.msg);
                setTimeout(() => {
                    setMsg('');
                }, 3000)
            }).catch((error) => {
                console.log(error);
            });
            getPernikahanById();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="bg-gray-400 min-h-screen px-2 py-2 lg:px-12 lg:py-8">
            <div className="bg-white px-2 py-4 rounded-md shadow-md mt-6 lg:px-8 lg:py-6">                
                <h1 className="text-lg font-semibold text-center text-gray-800 mb-2">- Data Undangan Anda -</h1>
                <p className="text-green-500 text-sm text-center">{msg}</p>
                <div className="overflow-x-auto relative">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Nama User
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Pasangan
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Preview
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Tamu
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataPernikahan.map((pernikahan, index) =>(
                            <tr key={pernikahan.id_pernikahan} class="bg-white dark:bg-gray-800">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {nama}
                                </th>
                                <td className="py-4 px-6">
                                    {pernikahan.nama_perempuan} & {pernikahan.nama_laki}
                                </td>
                                <td className="py-4 px-3">
                                    <button className="form-button"><Link to={`/undanganpernikahan/${pernikahan.id_pernikahan}`}>Dibuat Oleh Anda</Link></button>
                                </td>
                                <td className="py-4 px-3">
                                <button className="reset-button"><Link to={`/datatamu/${pernikahan.id_pernikahan}`}>Cek Tamu</Link></button>
                                </td>
                                <td className="py-4 px-3">
                                    <button onClick={() => deletePernikahan(pernikahan.id_pernikahan)} className="bg-red-400 rounded-md shadow-md shadow-red-400 px-6 py-2 hover:shadow-red-500 hover:bg-red-500 transition duration-300"><i className="fa-solid fa-trash text-white"></i></button>
                                    <Link to={`/editpernikahan/${pernikahan.id_pernikahan}`}><button className="reset-button mt-4 lg:w-[36%] lg:ml-4"><i className="fa-solid fa-pen-to-square text-gray-800"></i></button></Link>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="bg-blue-400 bg-opacity-30 px-4 py-2 mt-4 rounded-md lg:w-[50%]">
                    <p className="text-blue-500 font-light"><span className="font-semibold">NOTE :</span> Angka didalam kolom id_user adalah id_user yang anda miliki didalam website kami 😁</p> 
                </div>
                <Link to="/user"><button className="mt-4 ml-4 text-sm"><i className="fa-solid fa-arrow-left text-gray-800 mr-3"></i>Kembali Ke Beranda</button></Link>
            </div>
        </section>
    )
}

export default DataUndangan;