import { useRef, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import emailjs from '@emailjs/browser';

const EmailForm = () => {
    const [emailPengirim, setEmailPengirim] = useState('');
    const [subject, setSubject] = useState('Undangan Pernikahan');
    const [namaTamu, setNamaTamu] = useState('');
    const [idTamu, setIdTamu] = useState('');
    const [emailTamu, setEmailTamu] = useState('');
    const [idPernikahan, setIdPernikahan] = useState('');
    const [url, setUrl] = useState('');
    const [namaPengirim, setNamaPengirim] = useState('');
    const [msg, setMsg] = useState('');
    const { id } = useParams();
    const form = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        getTamu();
        const store = sessionStorage.getItem('datas');
        const parse = JSON.parse(store);
        setEmailPengirim(parse.email_user);
    }, [namaTamu, emailTamu, idPernikahan, idTamu, url])

    const getTamu = async (event) => {
        try {
            axios.get(`http://localhost:4000/tamu/${id}`)
            .then((response) => {
                setNamaTamu(response.data.nama_tamu);
                setEmailTamu(response.data.email_tamu);
                setIdPernikahan(response.data.pernikahanIdPernikahan)
                setIdTamu(response.data.id_tamu);
                setUrl(`http://localhost:3000/undangantamu/${idPernikahan}/${idPernikahan}/${idTamu}`);
            }).catch((error) => {
                console.log(error);
            });
        } catch(error) {
            console.log(error);
        }
    }

    const resetForm = (event) => {
        event.preventDefault();
        setNamaPengirim('');
        setUrl('')
    }

    const sendEmail = async (event) => {
        event.preventDefault();
        try {
            emailjs.sendForm('service_b3itr8l', 'template_hy4bewa', form.current, 'ceCcpNgew5l5Nq8ut')
            .then((response) => {
                setMsg('Email Berhasil Dikirim. Diarahkan ke Halaman Tamu...');
                setTimeout(() => {
                    navigate(`/datatamu/${idPernikahan}`);
                }, 3000)
            }).catch((error) => {
                console.log(error.text);
            })
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <section className="bg-gray-400 px-4 py-4 min-h-screen w-full lg:px-12 lg:py-12">
            <div className="bg-white px-4 py-4 rounded-md shadow-md">
                <form ref={form} onSubmit={sendEmail} id='formEmail'>
                    <h1 className="text-center font-semibold text-lg mb-4">- Form Pengiriman Email -</h1>
                    <p className="text-green-500 text-sm text-center">{msg}</p>
                    <input type="text" name="emailpengirim" className="form-control text-gray-500 hidden" value={emailPengirim} onChange={(event) => setEmailPengirim(event.target.value)} />
                    <input type="text" name="subject" className="form-control text-gray-500" value={subject} onChange={(event) => setSubject(event.target.value)} />
                    <input type="text" name="pengirim" className="form-control" placeholder="Nama Pengirim" value={namaPengirim} onChange={(event) => setNamaPengirim(event.target.value)} />
                    <input type="text" name="tamu" className="form-control text-gray-500" placeholder="Masukkan Nama Tamu" value={namaTamu} onChange={(event) => setNamaTamu(event.target.value)} />
                    <input type="email" name="email" className="form-control text-gray-500" value={emailTamu} onChange={(event) => setEmailTamu(event.target.value)} />
                    <input type="text" name="url" className="form-control hidden" placeholder="Masukkan URL Undangan Tamu" value={url} onChange={(event) => setUrl(event.target.value)} />
                    <div className="flex gap-4 lg:w-[30%]">
                        <button className="form-button">Kirim</button>
                        <button className="reset-button" onClick={resetForm}>Reset</button>
                    </div>
                </form>
                <Link className="text-sm" to={`/datatamu/${idPernikahan}`}><i className="fa-solid fa-arrow-left text-gray-800 mr-3"></i>Kembali Ke Data Undangan</Link>
            </div>
        </section>
    )
}

export default EmailForm;