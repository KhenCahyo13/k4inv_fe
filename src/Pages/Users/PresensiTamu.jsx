import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PresensiTamu = () => {
    const [namaTamu, setNamaTamu] = useState('');
    const [level, setLevel] = useState('');
    const { idTamu } = useParams();

    useEffect(() => {
        const store = sessionStorage.getItem('datas');
        const parse = JSON.parse(store);
        console.log(parse);
        getDataTamu();
    }, [])

    const getDataTamu = async () => {
        try {
            await axios.get(`http://localhost:4000/tamu/${idTamu}`)
            .then((response) => {
                setNamaTamu(response.data.nama_tamu);
            }).catch((error) => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="bg-gray-400 px-6 py-24 min-h-screen w-full lg:px-14 lg:py-8">
            <div className="bg-white px-4 py-6 text-center mx-auto rounded-md shadow-md">
                <h1 className="text-lg font-semibold text-gray-800">Hallo, {namaTamu}</h1>
                <p className="font-medium text-gray-800 mt-4">Klik Tombol Hadir Untuk Melakukan Presensi</p>
                <button className="bg-green-400 rounded-md shadow-md shadow-green-400 px-6 py-2 hover:bg-green-500 hover:shadow-green-500 transition duration-300 text-white mt-2">Sudah Hadir</button>
            </div>
        </section>
    )
}

export default PresensiTamu;