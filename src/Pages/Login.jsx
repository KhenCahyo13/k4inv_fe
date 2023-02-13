import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:4000/login/', {
                email,
                password
            }).then((response) => {
                sessionStorage.setItem('datas', JSON.stringify(response.data))
                if (response.data.level === 'Admin') {
                    setLoading(true);
                    setMsg(response.data.msg);
                    setEmail('');
                    setPassword('');
                    setTimeout(() => {
                        navigate('/admin');
                    }, 3000)
                } else if (response.data.level === 'Pengguna') {
                    setLoading(true);
                    setMsg(response.data.msg);
                    setEmail('');
                    setPassword('');
                    setTimeout(() => {
                        navigate('/user');
                    }, 3000)
                } else {
                    setErrorMsg('Level Anda Tidak Ditentukan');
                    setTimeout(() => {
                        setErrorMsg('')
                    }, 3000);
                }
            }).catch((error) => {
                setErrorMsg(error.response.data.msg);
                setTimeout(() => {
                setErrorMsg('');
            }, 3000)
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="my-12 md:my-44 lg:my-10">
            <img src="image/logo.png" className="w-[144px] mx-auto" alt="Logo K4Invitation" />
            <img className="fixed -z-10 min-h-screen top-0" src="image/gradient.png" alt="Background Page" />
            <div className="login-box">
                <h1 className="login-title text-center">Masuk</h1>
                <p className="text-[15px] text-gray-800 mb-5 text-center">Halo, harap masuk untuk melanjutkan</p>
                <p className="text-sm text-green-500 text-center mb-2">{msg}</p>
                <p className="text-sm text-red-500 text-center mb-2">{errorMsg}</p>
                <form onSubmit={handleLogin}>
                    <div className="form-body">
                        <input type="email" id="email" className="form-control" placeholder="Masukkan email anda" autoComplete="off" onChange={(event) => setEmail(event.target.value)} value={email} />
                    </div>
                    <div className="form-body">
                        <input type="password" id="password" className="form-control" placeholder="Masukkan password anda" onChange={(event) => setPassword(event.target.value)} value={password} />
                    </div>
                    <div className="form-body">
                        <button id="masuk" className="form-button">{loading ? 'Loading...' : 'Masuk'}</button>
                    </div>
                </form>
                <p className="text-sm text-gray-800 mb-4 text-center">- atau login dengan -</p>
                <button className="google-button"><img className="w-[22px]" src="image/google.png" alt="Google" /> Google</button>
                <p className="text-sm text-gray-800 mb-2 text-center">Belum punya akun.? <Link className='font-semibold' to='/register'>Daftar</Link></p>
            </div>
        </section>
    )
}

export default Login;