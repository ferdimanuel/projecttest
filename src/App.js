// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import PegawaiList from './components/PegawaiList';
import PengajuanCuti from './components/PengajuanCuti';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/pegawai">Daftar Pegawai</Link></li>
                        <li><Link to="/pengajuan-cuti">Pengajuan Cuti</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/pegawai" element={<PegawaiList />} />
                    <Route path="/pengajuan-cuti" element={<PengajuanCuti />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
