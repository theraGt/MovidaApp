import { getConnection } from '../database/connection.js'
import querys from '../database/queries.js'
import { Pool } from 'pg'; // Importa Pool de 'pg'


export const getVisitas = async (req, res) => {
    let client;
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET, DELETE, PUT");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const pool = await getConnection();
        client = await pool.connect();

        const result = await client.query(querys.visitas_query);
        console.log("visitas ok");

        res.json(result.rows);

    } catch (err) {
        console.error("Error en getVisitas:", err);
        res.status(500).send("Error del servidor");
    } finally {
        if (client) {
            client.release();
        }
    }
}

export const getVisitaById = async (req, res) => {
    let client;
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET, DELETE, PUT");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const pool = await getConnection();
        client = await pool.connect();

        const { id } = req.params;
        const result = await client.query(querys.visita_by_id_query, [id]);

        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send("Visita no encontrada");
        }

    } catch (err) {
        console.error("Error en getActivityById:", err);
        res.status(500).send("Error del servidor");
    } finally {
        if (client) {
            client.release();
        }
    }
}

export const createVisita = async (req, res) => {
    let client;
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET, DELETE, PUT");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const pool = await getConnection();
        client = await pool.connect();

        const {
            fecha, horaInicio, actividad, tipo, estado, pais, comentario, horaFin
        } = req.body;

        const result = await client.query(querys.create_activity_query, [
            fecha, horaInicio, actividad, tipo, estado, pais, comentario, horaFin
        ]);

        res.status(201).json({ id: result.rows[0].id });

    } catch (err) {
        console.error("Error en createActivity:", err);
        res.status(500).send("Error del servidor");
    } finally {
        if (client) {
            client.release();
        }
    }
}

export const updateVisita = async (req, res) => {
    let client;
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET, DELETE, PUT");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const pool = await getConnection();
        client = await pool.connect();

        const { id } = req.params;
        const {
            fecha, horaInicio, actividad, tipo, estado, pais, comentario, horaFin
        } = req.body;

        const result = await client.query(querys.update_visita_query, [
            fecha, horaInicio, actividad, tipo, estado, pais, comentario, horaFin, id
        ]);

        if (result.rowCount > 0) {
            res.json({ message: "Visita actualizada correctamente" });
        } else {
            res.status(404).send("Actividad no encontrada");
        }

    } catch (err) {
        console.error("Error en updateActivity:", err);
        res.status(500).send("Error del servidor");
    } finally {
        if (client) {
            client.release();
        }
    }
}

export const deleteVisita = async (req, res) => {
    let client;
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET, DELETE, PUT");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const pool = await getConnection();
        client = await pool.connect();

        const { id } = req.params;
        const result = await client.query(querys.delete_visita_query, [id]);

        if (result.rowCount > 0) {
            res.json({ message: "Visita eliminada correctamente" });
        } else {
            res.status(404).send("Visita no encontrada");
        }

    } catch (err) {
        console.error("Error en deleteActivity:", err);
        res.status(500).send("Error del servidor");
    } finally {
        if (client) {
            client.release();
        }
    }
}