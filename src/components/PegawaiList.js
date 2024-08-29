import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PegawaiList = () => {
    const [pegawai, setPegawai] = useState([]);

    useEffect(() => {
        const url = 'https://13fe-36-94-179-68.ngrok-free.app/api/pegawai';

        axios.get(url, { headers: { 'ngrok-skip-browser-warning': '1' } })
            .then(response => {
                if (Array.isArray(response.data)) {
                    setPegawai(response.data);
                } else {
                    console.error("Expected an array but received:", response.data);
                    setPegawai([]);  // Fallback jika data tidak sesuai
                }
            })
            .catch(error => {
                console.error("There was an error fetching the pegawai data!", error);
                setPegawai([]);  // Fallback jika terjadi error
            });
    }, []);

    return (
        <div>
            <h2>Daftar Pegawai</h2>
            {pegawai.length > 0 ? (
                <ul>
                    {pegawai.map(p => (
                        <li key={p.id_pegawai}>
                            {p.nama_lengkap} - {p.jabatan} ({p.departemen})
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Data pegawai tidak tersedia atau ada kesalahan dalam memuat data.</p>
            )}
        </div>
    );
};

export default PegawaiList;
