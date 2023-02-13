import Footer from "./Footer";
import Navbar from "./Navbar";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Tentang = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
        <Navbar />
        {/* Section Hero */}
        <section className="mt-6 lg:h-[260px]">
            <img className="absolute top-0 -z-10 h-72 w-full lg:h-96" src="image/about.png" alt="Background K4" />
            <div className="flex flex-col justify-center md:justify-start md:px-10 lg:px-32 lg:mt-8">
                <h1 className="text-center text-gray-100 font-semibold md:text-left md:text-xl lg:text-3xl">Ketahui Tentang Apa Itu K4Invitation <br/> dan Siapa Saja Bagian Dari Kami</h1>
                <p className="mt-1 text-gray-100 text-[13px] text-center md:text-left lg:text-lg">K4Invitation adalah sebuah web yang memudahkan <br/>  anda dalam membuat sebuah undangan digital dengan mudah dan cepat
                </p>
                <button className="mt-3 w-[38%] mx-auto bg-blue-400 text-center text-[12px] px-4 py-2 rounded-md shadow-md shadow-blue-400 text-gray-100 hover:bg-blue-500 hover:shadow-blue-500 transition duration-300 md:mx-0 md:w-[24%] lg:text-sm lg:mt-5">Selengkapnya</button>
            </div>
        </section>

        {/* Section Apa */}
        <section data-aos="fade-up" className="bg-cream-100 w-full px-6 pt-1 pb-8 mt-12 md:pt-8 lg:px-24 lg:gap-12 lg:pb-14">
            <h1 className="text-gray-800 text-center mt-6 font-medium text-lg md:text-xl lg:text-2xl">Apa Itu K4 Invitation.?</h1>
            <div className="mt-6 md:flex md:gap-8 md:mx-12 md:items-center md:mt-8 lg:mx-32 lg:mt-12">
                <img className="w-52 mx-auto lg:w-52" src="image/Image 3.png" alt="Foto 1" />
                <div className="md:block">
                    <p className="text-gray-800 text-sm text-center font-light mt-2 md:text-left lg:text-base lg:pr-32">K4Invitation adalah sebuah karya website dari kami yang memudahkan user dalam membuat suatu Undangan, Tidak hanya undangan pernikahan namun Kami mempunyai total 5 Kategori template Undangan yang mempermudah anda dalam membuat Sebuah Undangan
                    </p>
                </div>
            </div>
        </section>

        {/* Section Tim Kami */}
        <section className="bg-cream-200 w-full px-6 py-8 md:px-14">
        <h1 className="text-gray-800 text-center mb-6 font-medium text-lg md:text-xl lg:text-2xl lg:mb-12">Tim Kami</h1>
            <div data-aos="fade-up" className="bg-white pt-2 pb-4 rounded-xl shadow-md md:flex md:py-0 md:pr-6 md:gap-2 lg:items-center">
                <img className="w-44 mx-auto" src="image/1.png" alt="" />
                <div className="text-center px-4 mt-2 md:text-left">
                    <h1 className="text-blue-400 font-semibold text-lg">Khen Muhammad Cahyo</h1>
                    <p className="text-sm text-gray-800">Ketua Tim</p>
                    <p className="text-[13px] text-gray-800 font-light">Lahirpada tanggal 13 April 2002, Mempunyai keinginan untuk
                    menjadi seorang Web Developer, lulus dari SMK Al-Mahrusiyah
                    Kediri pada tahun 2022 dan sekarang sedang menjadi mahasiswa
                    di kampus Politeknik Negeri Malang di jurusan Teknologi Informasi</p>
                </div>
            </div>
            <div data-aos="fade-up" className="bg-white pt-2 pb-4 rounded-xl shadow-md mt-6 md:flex md:py-0 md:pl-3 md:gap-2 md:flex-row-reverse lg:items-center">
                <img className="w-44 mx-auto" src="image/2.png" alt="" />
                <div className="text-center px-4 mt-2 md:text-left">
                    <h1 className="text-blue-400 font-semibold text-lg">Danendra Adhipramana</h1>
                    <p className="text-sm text-gray-800">Ketua Tim</p>
                    <p className="text-[13px] text-gray-800 font-light">Lahirpada tanggal 13 April 2002, Mempunyai keinginan untuk
                    menjadi seorang Web Developer, lulus dari SMK Al-Mahrusiyah
                    Kediri pada tahun 2022 dan sekarang sedang menjadi mahasiswa
                    di kampus Politeknik Negeri Malang di jurusan Teknologi Informasi</p>
                </div>
            </div>
            <div data-aos="fade-up" className="bg-white pt-2 pb-4 rounded-xl shadow-md mt-6 md:flex md:py-0 md:pr-6 md:gap-2 lg:items-center">
                <img className="w-44 mx-auto" src="image/3.png" alt="" />
                <div className="text-center px-4 mt-2 md:text-left">
                    <h1 className="text-blue-400 font-semibold text-lg">Ilham Faturachman</h1>
                    <p className="text-sm text-gray-800">Ketua Tim</p>
                    <p className="text-[13px] text-gray-800 font-light">Lahirpada tanggal 13 April 2002, Mempunyai keinginan untuk
                    menjadi seorang Web Developer, lulus dari SMK Al-Mahrusiyah
                    Kediri pada tahun 2022 dan sekarang sedang menjadi mahasiswa
                    di kampus Politeknik Negeri Malang di jurusan Teknologi Informasi</p>
                </div>
            </div>
        </section>

        {/* Section Rating */}
        <section data-aos="fade-left" className="bg-cream-100 w-full py-8 px-6 md:pt-8 lg:px-24 lg:gap-12 lg:pb-14 md:flex md:gap-4">
            <div className="bg-white pt-4 pb-4 rounded-xl shadow-md">
                <div className="flex items-center mx-6 gap-4">
                    <img className="w-16" src="image/4.png" alt="" />
                    <h2 className="text-yellow-500 font-semibold text-lg">Rose Garden</h2>
                </div>
                <div className="mx-6 mt-4">
                    <p className="font-medium text-[15px] text-gray-800 mb-2">Desain Undangan Menarik</p>
                    <div className="bg-gray-800 py-[0.5px]"></div>
                    <p className="font-light text-[13px] text-gray-800 mt-2">Desain undangan yang ada pada website ini
                    sangat bagus dan menarik untuk dilihat
                    saya pasti akan menggunakan website ini
                    untuk pembuatan undangan ulang tahun
                    anak saya</p>
                </div>
                <div className="flex mx-4 justify-between items-center mt-6">
                    <img className="w-24" src="image/Star.png" alt="" />
                    <p className="font-medium text-sm">7 Juli 2022</p>
                </div>
            </div>
            <div className="bg-white pt-4 pb-4 rounded-xl shadow-md mt-6 md:mt-0">
                <div className="flex items-center mx-6 gap-4">
                    <img className="w-16" src="image/5.png" alt="" />
                    <h2 className="text-yellow-500 font-semibold text-lg">John Adimus</h2>
                </div>
                <div className="mx-6 mt-4">
                    <p className="font-medium text-[15px] text-gray-800 mb-2">Desain Undangan Menarik</p>
                    <div className="bg-gray-800 py-[0.5px]"></div>
                    <p className="font-light text-[13px] text-gray-800 mt-2">Desain undangan yang ada pada website ini
                    sangat bagus dan menarik untuk dilihat
                    saya pasti akan menggunakan website ini
                    untuk pembuatan undangan ulang tahun
                    anak saya</p>
                </div>
                <div className="flex mx-4 justify-between items-center mt-6">
                    <img className="w-24" src="image/Star.png" alt="" />
                    <p className="font-medium text-sm">7 Juli 2022</p>
                </div>
            </div>
            <div className="bg-white pt-4 pb-4 rounded-xl shadow-md mt-6 md:mt-0">
                <div className="flex items-center mx-6 gap-4">
                    <img className="w-16" src="image/6.png" alt="" />
                    <h2 className="text-yellow-500 font-semibold text-lg">Marcella Justin</h2>
                </div>
                <div className="mx-6 mt-4">
                    <p className="font-medium text-[15px] text-gray-800 mb-2">Desain Undangan Menarik</p>
                    <div className="bg-gray-800 py-[0.5px]"></div>
                    <p className="font-light text-[13px] text-gray-800 mt-2">Desain undangan yang ada pada website ini
                    sangat bagus dan menarik untuk dilihat
                    saya pasti akan menggunakan website ini
                    untuk pembuatan undangan ulang tahun
                    anak saya</p>
                </div>
                <div className="flex mx-4 justify-between items-center mt-6">
                    <img className="w-24" src="image/Star.png" alt="" />
                    <p className="font-medium text-sm">7 Juli 2022</p>
                </div>
            </div>
        </section>
        <Footer data-aos="fade-up" />
        </>
    )
}

export default Tentang;