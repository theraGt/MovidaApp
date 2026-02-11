import { getConnection } from '../database/connection.js'
import querys from '../database/queries.js'
import { Resend } from 'resend';

const resend = new Resend('re_4wAmx22K_E3WVZPrTd9Cgb1tCUKCdp5nN');

export const LoginMovida = async (req, res) => {
    let client;
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        const data_sql = req.body;
        console.log(data_sql);

        const pool = await getConnection();
        client = await pool.connect();

        const values = [
            data_sql.correo,
            data_sql.pass,
        ];

        const result = await client.query(querys.login_query, values);
        console.dir(result);

        res.send('Usuario Ingresado: ' + JSON.stringify(data_sql));
        
        // Función para enviar correo electrónico con Resend
        (async function () {
            const { data, error } = await resend.emails.send({
                from: 'Movida-Notify <Movida@resend.dev>',
                to: ['gt.developer.apps@gmail.com'],
                subject: 'Ingreso a Movida App',
                html: '<h1> El usuario ' + JSON.stringify(data_sql.correo) + ' ha ingresado al portal</h1>',
            });

            if (error) {
                return console.error({ error });
            }
            console.log({ data });
        })();

    } catch (err) {
        console.error("Error en Login:", err);
        res.status(500).send(err.message);
    } finally {
        if (client) {
            client.release();
        }
    }
};