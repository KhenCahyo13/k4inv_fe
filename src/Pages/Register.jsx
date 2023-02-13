import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('')
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate('');
    
    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:4000/users', {
                nama,
                email,
                password,
                confPassword
            });
            setMsg('Pendaftaran Berhasil');
            setLoading(true);
            setNama('');
            setEmail('');
            setPassword('');
            setConfPassword('');
            setTimeout(() => {
                navigate('/')
            }, 3000)
        } catch (error) {
            // if (error.response.status === 400) {
            //     setErrorMsg(error.response.data.msg);
            //     setTimeout(() => {
            //         setErrorMsg('');
            //     }, 2000)
            // }
            console.log(error);
        }
    }

    // const handleRegister = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await axios.post('http://localhost:5000/register', JSON.stringify({
    //             name, email, password, confPassword
    //         }), {
    //             headers: {'Content-Type': 'application/json'},
    //             withCredentials: true
    //         });
    //         setMsg(response.data.msg);
    //         setLoading(true);
    //         setName('');
    //         setEmail('')
    //         setPassword('');
    //         setConfPassword('');
    //         setTimeout(() => {
    //             navigate('/');
    //         }, 3000)
    //     } catch (error) {
    //         if (error.response.status === 400) {
    //             setErrorMsg(error.response.data.msg);
    //             setTimeout(() => {
    //                 setErrorMsg('');
    //             }, 2000)
    //         }
    //     }
    // }
    return (
        <section className="my-12 md:my-44 lg:my-6">
            <img src="image/logo.png" className="w-[144px] mx-auto" alt="Logo K4Invitation" />
            <img className="fixed -z-10 min-h-screen top-0" src="image/gradient.png" alt="Background Page" />
            <div className="login-box">
                <h1 className="login-title text-center">Daftar</h1>
                <p className="text-[15px] text-gray-800 mb-5 text-center font-light">Halo, harap daftar jika tidak mempunyai akun</p>
                <p className="text-sm text-green-500 text-center">{msg}</p>
                <p className="text-sm text-red-500 text-center">{errorMsg}</p>
                <form onSubmit={handleRegister} className="mt-2">
                    <div className="form-body">
                        <input type="text" id="fullname" className="form-control" placeholder="Nama Lengkap" autoComplete="off" onChange={(event) => setNama(event.target.value)} value={nama} />
                    </div>
                    <div className="form-body">
                        <input type="email" id="email" className="form-control" placeholder="Masukkan email anda" autoComplete="off" onChange={(event) => setEmail(event.target.value)} value={email} />
                    </div>
                    <div className="form-body">
                        <input type="password" id="password" className="form-control" placeholder="Masukkan password anda" onChange={(event) => setPassword(event.target.value)} value={password} />
                    </div>
                    <div className="form-body">
                        <input type="password" id="confPassword" className="form-control" placeholder="Konfirmasi Password" onChange={(event) => setConfPassword(event.target.value)} value={confPassword} />
                    </div>
                    <div className="form-body">
                        <button id="masuk" className="form-button">{loading ? 'Loading...' : 'Daftar'}</button>
                    </div>
                </form>
                <p className="text-sm text-gray-800 mb-4 text-center">- atau daftar dengan -</p>
                <button className="google-button"><img className="w-[22px]" src="image/google.png" alt="Google" /> Google</button>
                <p className="text-sm text-gray-800 mb-2 text-center">Sudah punya akun.? <Link className="font-semibold" to='/'>Masuk</Link></p>
            </div>
        </section>
    )
}

export default Register;