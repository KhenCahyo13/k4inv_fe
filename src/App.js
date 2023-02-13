import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Admin from './Pages/Admin/Admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Users/Navbar';
import Undangan from './Pages/Users/Undangan';
import Tentang from './Pages/Users/Tentang';
import Landing from './Pages/Users/Landing';
import DataUndangan from './Pages/Users/DataUndangan';
import DataTamu from './Pages/Users/DataTamu';
import FormPernikahan from './Pages/Users/FormPernikahan';
import Home from './Pages/Users/Home';
import TambahUser from './Pages/Admin/TambahUser';
import TambahAdmin from './Pages/Admin/TambahAdmin';
import DataUser from './Pages/Admin/DataUser';
import DataAdmin from './Pages/Admin/DataAdmin';
import EditAdmin from './Pages/Admin/EditAdmin';
import EditUser from './Pages/Admin/EditUser';
import Pernikahan from './Pages/Undangan/Pernikahan'
import TamuPernikahan from './Pages/Undangan/TamuPernikahan'
import EmailForm from './Pages/Users/EmailForm';
import PresensiTamu from './Pages/Users/PresensiTamu';
import FormEditTamu from './Pages/Users/FormEditTamu';
import EditPernikahan from './Pages/Users/EditPernikahan';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user' element={<Home />} />
        <Route path='/undangan' element={<Undangan />} />
        <Route path='/dataundangan/:id' element={<DataUndangan />} />
        <Route path='/datatamu/:id' element={<DataTamu />} />
        <Route path='/edittamu/:id_tamu' element={<FormEditTamu />} />
        <Route path='/undangantamu/:id/:idPernikahan/:idTamu' element={<TamuPernikahan />} />
        <Route path='/formpernikahan' element={<FormPernikahan />} />
        <Route path='/editpernikahan/:id' element={<EditPernikahan />} />
        <Route path='/tentang' element={<Tentang />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/tambahuser' element={<TambahUser />} />
        <Route path='/admin/tambahadmin' element={<TambahAdmin />} />
        <Route path='/admin/datauser' element={<DataUser />} />
        <Route path='/admin/dataadmin' element={<DataAdmin />} />
        <Route path='/admin/editadmin/:id' element={<EditAdmin />} />
        <Route path='/admin/edituser/:id' element={<EditUser />} />
        <Route path='/undanganpernikahan/:id' element={<Pernikahan />} />
        <Route path='/emailform/:id' element={<EmailForm />} />
        <Route path='/presensitamu/:idTamu' element={<PresensiTamu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
