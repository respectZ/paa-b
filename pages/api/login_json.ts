import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from 'pg'

// Buat client untuk pgadmin
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'toko2',
});

// Koneksikan client ke pgadmin
client.connect();


type Data = {
    msg: Array<Person>,
    success: number,
}

// Buat struct untuk menampung data dari database
type Person = {
    id_peran_user: number,
    id_person: number,
    id_peran: number,
    nama_user: string,
    password: string,
    kd_sts_aktif: string,
    created_at: string,
    updated_at: string,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // Dapatkan method dari request
    const reqMethod = req.method;
    // Dapatkan data yang telah dikirm
    const data = req.body;
    console.log(data);
    const data_json = JSON.parse(data);
    console.log(data_json);

    switch (reqMethod) {
        case 'GET':
            res.status(200).json({ msg: [], success: 1 });
            break;
        case 'POST':
            // Query data dari database
            client.query('select t1.* from users.peran_user t1', [], (err, res_db) => {
                console.log(err ? err.stack : res_db.rows[0]) // Hello World!
                // Cek apakah username dan password sesuai
                for (let i = 0; i < res_db.rows.length; i++) {
                    let person = res_db.rows[i];
                    if (person.nama_user == data_json.username && person.password == data_json.password) {
                        // user = person;
                        res.status(200).json({ msg: res_db.rows, success: 1 });
                        break;
                    }
                }
                res.status(200).json({ msg: res_db.rows, success: 0 });
            });
            break;
    }
}
