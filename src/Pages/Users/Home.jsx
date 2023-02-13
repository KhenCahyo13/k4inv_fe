import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    const [nama, setNama] = useState('');
    useEffect(() => {
        const store = sessionStorage.getItem('datas');
        const parse = JSON.parse(store);
        setNama(parse.nama_user);
        AOS.init()
    }, [])
    return (
        <>
        <Navbar />
        {/* Section Hero */}
        <section className="mt-6 lg:h-[260px]">
            <img className="absolute top-0 -z-10 h-72 w-full lg:h-96" src="image/background.png" alt="Background K4" />
            <div className="flex flex-col justify-center md:justify-start md:px-10 lg:px-32 lg:mt-8">
                <h1 className="text-center text-gray-100 font-semibold md:text-left md:text-xl lg:text-3xl">Selamat Datang {nama},<br />Buat Undangan Anda Sekarang Juga</h1>
                <p className="mt-1 text-gray-100 text-[13px] text-center md:text-left lg:text-lg">Buat undangan anda dengan secara cepat dan<br/>
                    simple dengan berbagai tema pilihan yang<br/>menarik secara gratis
                </p>
                <button className="mt-3 w-[38%] mx-auto bg-blue-400 text-center text-[12px] px-4 py-2 rounded-md shadow-md shadow-blue-400 text-gray-100 hover:bg-blue-500 hover:shadow-blue-500 transition duration-300 md:mx-0 md:w-[24%] lg:text-sm lg:mt-5">Buat Undangan</button>
            </div>
            <div className="bg-white w-[70%] px-4 py-2 mt-8 rounded-md shadow-md flex justify-center gap-8 absolute left-14 top-56 md:w-[42%] md:left-56 md:top-[14.5rem] lg:top-[20.5rem] lg:left-[30rem] lg:w-[26%]">
                <div className="text-center">
                    <h1 className="font-semibold text-gray-800 text-[19px]">5</h1>
                    <p className="text-gray-800 font-light text-sm">Kategori</p>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold text-gray-800 text-[19px]">3</h1>
                    <p className="text-gray-800 font-light text-sm">Tema</p>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold text-gray-800 text-[19px]">96</h1>
                    <p className="text-gray-800 font-light text-sm">Dibuat</p>
                </div>
            </div>
        </section>

        {/* Section Mengapa */}
        <section className="bg-cream-100 w-full px-6 pt-4 pb-8 mt-12 md:pt-8 lg:px-24 lg:gap-12 lg:pb-14">
            <h1 className="text-gray-800 text-center mt-12 font-medium text-lg md:text-xl lg:text-2xl">Mengapa Harus K4Invitation.?</h1>
            <div data-aos="fade-up" className="mt-6 md:flex md:gap-8 md:mx-12 md:items-center md:mt-8 lg:mx-32 lg:mt-12">
                <img className="w-44 mx-auto lg:w-52" src="image/Foto1.png" alt="Foto 1" />
                <div className="md:block">
                    <h1 className="text-blue-400 font-medium mt-2 text-center md:text-left md:text-lg lg:text-2xl">Buat Undangan Anda Secara Cepat</h1>
                    <p className="text-gray-800 text-sm text-center font-light mt-1 md:text-left lg:text-base lg:pr-32">Buat undangan anda secara cepat dimanapun dan kapanpun anda berada dengan berbagai pilihan yang kami sediakan dan dan dengan segala kemudahan yang kami buat
                    </p>
                </div>
            </div>
            <div data-aos="fade-up" className="mt-6 md:flex md:flex-row-reverse md:gap-8 md:mx-12 md:items-center md:mt-8 lg:mx-32 lg:mt-14">
                <img className="w-44 mx-auto lg:w-52" src="image/Foto2.png" alt="Foto 2" />
                <div className="md:block">
                    <h1 className="text-blue-400 font-medium mt-2 text-center md:text-left md:text-lg lg:text-2xl">Berbagai Macam Kategori Undangan</h1>
                    <p className="text-gray-800 text-sm text-center font-light mt-1 md:text-left">Berbagai macam kategori undangan yang bisa anda pilih sesuai keinginan anda mulai dari wisuda, ulang tahun, dan berbagai macam kategori lainnya yang kami sediakan
                    </p>
                    <button className="mt-3 w-[38%] block mx-auto bg-blue-400 text-center text-[12px] px-4 py-2 rounded-md shadow-md shadow-blue-400 text-gray-100 hover:bg-blue-500 hover:shadow-blue-500 transition duration-300 md:mx-0 lg:w-[28%] lg:text-sm">Lihat Sekarang</button>
                </div>
            </div>
            <div data-aos="fade-up" className="mt-6 md:flex md:gap-8 md:mx-12 md:items-center md:mt-8 lg:mx-32 lg:mt-16">
                <img className="w-44 mx-auto lg:w-52" src="image/Foto3.png" alt="Foto 3" />
                <div className="md:block">
                    <h1 className="text-blue-400 font-medium mt-2 text-center md:text-lg md:text-left lg:text-2xl">Dilengkapi Dengan QR Code Tamu</h1>
                    <p className="text-gray-800 text-sm text-center font-light mt-1 md:text-left lg:pr-12">Keunggulan dari fitur kamu adalah QR Code untuk para tamu undangan anda agar terhindar dari tamu yang tidak diinginkan.
                    </p>
                </div>
            </div>
        </section>

        {/* Section Berbagai */}
        <section data-aos="fade-up" className="bg-cream-200 w-full px-6 pt-4 pb-6 md:pt-8 md:pb-8 lg:pb-14 lg:pt-12">
            <h1 className="text-gray-800 text-center text-lg font-medium md:text-xl lg:text-2xl">Berbagai Tema Tersedia</h1>
            <p className="text-center text-[13px] font-light mt-1 md:text-sm md:px-14 lg:text-[15px]">Dengan berbagai tema yang tersedia pada web kami, anda bisa membuat undangan yang elegant dengan cepat dan mudah.</p>
            <div className="flex justify-center items-center gap-4 mt-6 md:gap-8 lg:mt-10 lg:gap-10">
                <img src="image/Tema1.png" className="w-24 hover:scale-110 transition duration-300 md:w-36 lg:w-52" alt="" />
                <img src="image/Tema2.png" className="w-24 hover:scale-110 transition duration-300 md:w-36 lg:w-52" alt="" />
                <img src="image/Tema3.png" className="w-24 hover:scale-110 transition duration-300 md:w-36 lg:w-52" alt="" />
            </div>
        </section>

        {/* Section Kategori */}
        <section data-aos="fade-up" className="bg-cream-100 w-full px-6 pt-4 pb-6 md:pt-8 md:pb-8 lg:pb-12 lg:pt-14">
            <h1 className="text-gray-800 text-center text-lg font-medium md:text-xl lg:text-2xl">Kategori Undangan Kami</h1>
            <p className="text-center text-[13px] font-light mt-1 md:text-sm lg:text-[15px]">Pilih kategori undangan yang sesuai dengan kebutuhan anda</p>
            <div className="mt-5 md:flex md:gap-4 md:justify-center md:mt-7 lg:mt-8 lg:gap-6">
                <div className="flex justify-center gap-2 md:block">
                    <img src="image/Pernikahan.png" className="w-40 hover:scale-110 transition duration-300 md:w-48 lg:w-64" alt="" />
                    <img src="image/Wisuda.png" className="w-40 hover:scale-110 transition duration-300 md:w-48 md:mt-4 lg:w-64 lg:mt-6" alt="" />
                </div>
                <div className="flex justify-center gap-2 mt-2 md:block md:mt-0">
                    <img src="image/Rapat.png" className="w-40 hover:scale-110 transition duration-300 md:w-48 lg:w-64" alt="" />
                    <img src="image/Seminar.png" className="w-40 hover:scale-110 transition duration-300 md:w-48 md:mt-4 lg:w-64 lg:mt-6" alt="" />
                </div>
                <div className="flex justify-center gap-2 mt-2  md:block md:mt-0">
                    <img src="image/Ultah.png" className="w-40 hover:scale-110 transition duration-300 md:w-48 lg:w-64" alt="" />
                </div>
            </div>
        </section>
        <Footer data-aos="fade-up" />
        </>
    )
}

export default Home;