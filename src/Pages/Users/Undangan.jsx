import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Undangan = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    const navigate = useNavigate();
    
    const lihatDataUndangan = () => {
        const store = sessionStorage.getItem('datas');
        const parse = JSON.parse(store);
        navigate(`/dataundangan/${parse.id_user}`);
    }

    return (
        <>
        <Navbar />
        {/* Section Hero */}
        <section className="mt-6 lg:h-[260px]">
            <img className="absolute top-0 -z-10 h-72 w-full lg:h-96" src="image/bgudg.png" alt="Background K4" />
            <div className="flex flex-col justify-center md:justify-start md:px-10 lg:px-32 lg:mt-8">
                <h1 className="text-center text-gray-100 font-semibold md:text-left md:text-xl lg:text-3xl">Pilih Kategori dan Tema Undang <br/> Sesuai Dengan Kebutuhan Anda</h1>
                <p className="mt-1 text-gray-100 text-[13px] text-center md:text-left lg:text-lg">Dibawah ini sudah terdapat berbagai macam Kategori <br/> dan Tema untuk memudahkan anda dalam membuat undangan
                </p>
                <button onClick={lihatDataUndangan} className="mt-3 w-[38%] mx-auto bg-blue-400 text-center text-[12px] px-4 py-2 rounded-md shadow-md shadow-blue-400 text-gray-100 hover:bg-blue-500 hover:shadow-blue-500 transition duration-300 md:mx-0 md:w-[24%] lg:text-sm lg:mt-5">Kelola Undangan</button>
            </div>
        </section>

        {/* Section Buat */}
        <section className="bg-cream-100 px-4 pt-2 pb-6 mt-8">
            <h1 className="text-gray-800 text-xl font-semibold text-center mt-8">- Pilih Tema Undangan -</h1>
            <div className="text-gray-800">
            <div data-aos="fade-up" className="mt-6">
                <p className="text-lg font-medium text-center">Kategori Pernikahan</p>
                <div className="flex gap-4 justify-center lg:gap-8">
                    <div>
                        <img className="w-24 mt-4 mx-auto hover:scale-110 transition duration-300 md:w-44" src="image/Tema1.png" alt="" />
                        <Link to='/formpernikahan'><button className="form-button mt-2">Buat</button></Link>
                    </div>
                    <div>
                        <img className="w-24 mt-4 mx-auto hover:scale-110 transition duration-300 md:w-44" src="image/Tema2.png" alt="" />
                        <button className="form-button mt-2">Buat</button>
                    </div>
                    <div>
                        <img className="w-24 mt-4 mx-auto hover:scale-110 transition duration-300 md:w-44" src="image/Tema3.png" alt="" />
                        <button className="form-button mt-2">Buat</button>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="mt-6">
                <p className="text-lg font-medium text-center">Kategori Ulang Tahun</p>
                <div className="flex gap-4 justify-center">
                    <div>
                        <img className="w-24 mt-4 mx-auto hover:scale-110 transition duration-300 md:w-44" src="image/Tema1.png" alt="" />
                        <button className="form-button mt-2">Buat</button>
                    </div>
                    <div>
                        <img className="w-24 mt-4 mx-auto hover:scale-110 transition duration-300 md:w-44" src="image/Tema2.png" alt="" />
                        <button className="form-button mt-2">Buat</button>
                    </div>
                    <div>
                        <img className="w-24 mt-4 mx-auto hover:scale-110 transition duration-300 md:w-44" src="image/Tema3.png" alt="" />
                        <button className="form-button mt-2">Buat</button>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="mt-6">
                <p className="text-lg font-medium text-center">Kategori Wisuda</p>
                <div className="flex gap-4 justify-center">
                    <div>
                        <img className="w-24 mt-4 mx-auto hover:scale-110 transition duration-300 md:w-44" src="image/Tema1.png" alt="" />
                        <button className="form-button mt-2">Buat</button>
                    </div>
                    <div>
                        <img className="w-24 mt-4 mx-auto hover:scale-110 transition duration-300 md:w-44" src="image/Tema2.png" alt="" />
                        <button className="form-button mt-2">Buat</button>
                    </div>
                    <div>
                        <img className="w-24 mt-4 mx-auto hover:scale-110 transition duration-300 md:w-44" src="image/Tema3.png" alt="" />
                        <button className="form-button mt-2">Buat</button>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="mt-6">
                <p className="text-lg font-medium text-center">Kategori Rapat</p>
                <div className="flex gap-4 justify-center">
                    <div>
                        <img className="w-24 mt-4 mx-auto hover:scale-110 transition duration-300 md:w-44" src="image/Tema1.png" alt="" />
                        <button className="form-button mt-2">Buat</button>
                    </div>
                    <div>
                        <img className="w-24 mt-4 mx-auto hover:scale-110 transition duration-300 md:w-44" src="image/Tema2.png" alt="" />
                        <button className="form-button mt-2">Buat</button>
                    </div>
                    <div>
                        <img className="w-24 mt-4 mx-auto hover:scale-110 transition duration-300 md:w-44" src="image/Tema3.png" alt="" />
                        <button className="form-button mt-2">Buat</button>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="mt-6">
                <p className="text-lg font-medium text-center">Kategori Seminar</p>
                <div className="flex gap-4 justify-center">
                    <div>
                        <img className="w-24 mt-4 mx-auto hover:scale-110 transition duration-300 md:w-44" src="image/Tema1.png" alt="" />
                        <button className="form-button mt-2">Buat</button>
                    </div>
                    <div>
                        <img className="w-24 mt-4 mx-auto hover:scale-110 transition duration-300 md:w-44" src="image/Tema2.png" alt="" />
                        <button className="form-button mt-2">Buat</button>
                    </div>
                    <div>
                        <img className="w-24 mt-4 mx-auto hover:scale-110 transition duration-300 md:w-44" src="image/Tema3.png" alt="" />
                        <button className="form-button mt-2">Buat</button>
                    </div>
                </div>
            </div>
            </div>
        </section>
        <Footer data-aos="fade-up" />
        </>
    )
}

export default Undangan;