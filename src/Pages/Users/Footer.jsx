import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Footer = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section data-aos="fade-up" className="bg-cream-200 px-6 py-4 w-full md:px-12 md:py-8 lg:px-28 lg:pt-12">
            <div className="md:flex md:gap-16 lg:gap-32">
                <div className="mt-2 md:mt-0">
                    <h1 className="text-gray-800 font-semibold text-lg md:text-xl lg:text-2xl">Kontak Kami</h1>
                    <p className="text-sm font-light text-gray-800 mt-2 lg:text-lg">Jl. Soekarno Hatta No.12 Kota Malang</p>
                    <p className="text-sm font-light text-gray-800 mt-1 lg:text-lg">k4invitation@gmail.comm</p>
                    <p className="text-sm font-light text-gray-800 mt-1 lg:text-lg">08813102165</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <h1 className="text-gray-800 font-semibold text-lg md:text-xl lg:text-2xl">Sosial Media</h1>
                    <p className="text-sm font-light text-gray-800 mt-2 lg:text-lg">Facebook</p>
                    <p className="text-sm font-light text-gray-800 mt-1 lg:text-lg">Youtube</p>
                    <p className="text-sm font-light text-gray-800 mt-1 lg:text-lg">Twitter</p>
                    <p className="text-sm font-light text-gray-800 mt-1 lg:text-lg">Instagram</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <h1 className="text-gray-800 font-semibold text-lg md:text-xl lg:text-2xl">Menu</h1>
                    <p className="text-sm font-light text-gray-800 mt-2 lg:text-lg">Home</p>
                    <p className="text-sm font-light text-gray-800 mt-1 lg:text-lg">Undangan</p>
                    <p className="text-sm font-light text-gray-800 mt-1 lg:text-lg">Tentang</p>
                    <p className="text-sm font-light text-gray-800 mt-1 lg:text-lg">Kategori & Tema</p>
                </div>
            </div>
            <div className="w-full py-[0.5px] mx-auto block bg-gray-800 mt-6"></div>
            <div className="mt-3 md:flex md:gap-4 md:items-center md:justify-center">
                <div className="flex gap-3 justify-center">
                    <i className="fa-brands fa-facebook text-gray-800 hover:text-blue-400 transition duuration-300 text-lg"></i>
                    <i className="fa-brands fa-youtube text-gray-800 hover:text-blue-400 transition duuration-300 text-lg"></i>
                    <i className="fa-brands fa-twitter text-gray-800 hover:text-blue-400 transition duuration-300 text-lg"></i>
                    <i className="fa-brands fa-instagram text-gray-800 hover:text-blue-400 transition duuration-300 text-lg"></i>
                </div>
                <p className="text-sm text-gray-800 font-light text-center mt-3 md:mt-0 md:text-[12px]">Copyright 2022 | Kelompok 4 | Khen - Danen - Ilham</p>
                <p className="text-[12px] text-gray-800 font-light text-center mt-5 md:mt-0">Syarat & Ketentuan | Kebijakan Privasi</p>
            </div>
        </section>
    )
}

export default Footer;