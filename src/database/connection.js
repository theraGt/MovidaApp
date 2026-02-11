import { Pool } from 'pg'

const dbSettings = {
    user: 'theradb',
    host: '144.91.117.86',
    database: 'thera-ia',
    password: "TheraGuate2026",
    port: 5432,
    ssl: false, // La opción `ssl` reemplaza a `encrypt` y `trustServerCertificate`
}

export async function getConnection() {
    try {
        const pool = new Pool(dbSettings)
        console.log('Conexión a PostgreSQL establecida')
        return pool
    } catch (error) {
        console.error('Error al conectar a la base de datos PostgreSQL:', error)
        throw error
    }
}
