import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Pernikahan = () => {
    const [perempuan, setPerempuan] = useState('');
    const [laki, setLaki] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [jam, setJam] = useState('');
    const [tempat, setTempat] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [tamu, setTamu] = useState('');
    const { id } = useParams();

    useEffect(() => {
        getOnePernikahanById();
        AOS.init();
    }, []);

    const getOnePernikahanById = async () => {
        try {
            await axios.get(`http://localhost:4000/onepernikahan/${id}`)
            .then((response) => {
                setPerempuan(response.data.nama_perempuan);
                setLaki(response.data.nama_laki);
                setTanggal(response.data.tanggal);
                setJam(response.data.jam);
                setTempat(response.data.tempat);
                setDeskripsi(response.data.deskripsi);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <div className='header'>
            <h1 className='text-center text-white font-bold text-5xl'>{laki}</h1>
            <h1 className='text-center text-white text-5xl mt-2'>&</h1>
            <h1 className='text-center text-white font-bold text-5xl mt-2'>{perempuan}</h1>
            <p className='text-center text-white font-normal text-2xl mt-12'>- Segera Menikah -</p>
        </div>
        <div className='bg-cream-100 w-full h-full px-8 py-8 lg:px-32 lg:py-12'>
            <div data-aos="fade-up" className='bg-white rounded-md shadow-md px-6 py-4 lg:py-12'>
                <h1 className='text-center text-gray-800 text-2xl font-semibold'>Deskripsi Acara</h1>
                <div className='mt-6'>
                    <h2 className='text-center text-md text-gray-800'>" {deskripsi} "</h2>
                </div>
            </div>
            <div data-aos="fade-up" className='bg-white rounded-md shadow-md px-6 py-4 mt-6 lg:mt-10 lg:py-8'>
                <h1 className='text-center text-gray-800 text-2xl font-semibold'>Detail</h1>
                <div className='mt-6'>
                    <h2 className='text-center text-lg text-gray-800'><i className='fa-solid fa-location-pin mr-2'></i> Tempat : {tempat}</h2>
                    <h2 className='text-center text-lg text-gray-800 mt-4'><i className='fa-solid fa-clock mr-2'></i> Waktu : {jam}</h2>
                    <h2 className='text-center text-lg text-gray-800 mt-4'><i className='fa-solid fa-calendar-days mr-2'></i> Tanggal : {tanggal}</h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default Pernikahan;