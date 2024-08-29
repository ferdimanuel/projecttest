// src/components/PengajuanCuti.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PengajuanCuti = () => {
    const [pengajuanCuti, setPengajuanCuti] = useState([]);

    useEffect(() => {
        const url = 'https://13fe-36-94-179-68.ngrok-free.app/api/pengajuan-cuti';

        axios.get(url, { headers: { 'ngrok-skip-browser-warning': '1' } })
            .then(response => {
                if (Array.isArray(response.data)) {
                    setPengajuanCuti(response.data);
                } else {
                    console.error("Expected an array but received:", response.data);
                    setPengajuanCuti([]);  // Fallback jika data tidak sesuai
                }
            })
            .catch(error => {
                console.error("There was an error fetching the pengajuan cuti data!", error);
                setPengajuanCuti([]);  // Fallback jika terjadi error
            });
    }, []);

    return (
        <div>
            <h2>Daftar Pengajuan Cuti</h2>
            {pengajuanCuti.length > 0 ? (
                <ul>
                    {pengajuanCuti.map(p => (
                        <li key={p.id}>
                            Pegawai ID: {p.id_pegawai}, Tanggal Mulai: {p.tanggal_mulai}, Tanggal Akhir: {p.tanggal_akhir}, Alasan: {p.alasan}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Data pengajuan cuti tidak tersedia atau ada kesalahan dalam memuat data.</p>
            )}
        </div>
    );
};

export default PengajuanCuti;
