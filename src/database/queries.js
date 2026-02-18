
export default {
    login_query: "SELECT id_user, fecha, hora, coordenada, nombre, correo, pass, activo, 'admin' FROM users_thera where activo='1' and correo=$1 AND pass=$2",

    // Voluntarios
    voluntarios_query: `SELECT 
        id_voluntario AS "id", 
        fecha_inscripcion AS "fechaInscripcion", 
        hora_inscripcion AS "horaInscripcion", 
        nombre_completo AS "nombreCompleto", 
        pais, nacionalidad, 
        documento_identificacion AS "documentoIdentificacion", 
        fecha_nacimiento AS "fechaNacimiento", 
        edad, genero, 
        profesion_oficio AS "profesionOficio", 
        ocupacion, telefono, 
        estado_civil AS "estadoCivil", 
        departamento_region AS "departamentoRegion", 
        municipio_provincia AS "municipioProvincia", 
        ciudad, 
        grado_academico AS "gradoAcademico", 
        estudios_adicionales AS "estudiosAdicionales", 
        correo, facebook, instagram, tiktok, iglesia, pastor, 
        contacto_pastor AS "contactoPastor", 
        denominacion, 
        areas_servicio AS "areasServicio", 
        dones_talentos AS "donesTalentos", 
        curso_storyline AS "cursoStoryline", 
        diploma_storyline AS "diplomaStoryline", 
        curso_vaya_movilizar AS "cursoVayaMovilizar", 
        diploma_vaya_movilizar AS "diplomaVayaMovilizar", 
        cimas_asistidos AS "cimasAsistidos", 
        areas_servicio_cima AS "areasServicioCima", 
        programas_participados AS "programasParticipados", 
        tipo_voluntariado AS "tipoVoluntariado", 
        testimonio, 
        carta_pastoral AS "cartaPastoral", 
        foto, 
        datos_completos AS "datosCompletos" 
        FROM movida.voluntarios`,

    // Visitas
    visitas_query: `SELECT 
        id_visita AS "id", 
        id_actividad AS "idActividad", 
        inicio, coordenada, descripcion, contacto, encargado, foto, tipo, pais, 
        personas_alcanzadas AS "personasAlcanzadas", 
        contactos_nuevos AS "contactosNuevos", 
        km_recorridos AS "kmRecorridos", 
        tiempo_invertido AS "tiempoInvertido", 
        gasolina, comida, 
        otros_gastos AS "otrosGastos", 
        total_inversion AS "totalInversion" 
        FROM movida.visitas`,

    visita_by_id_query: `SELECT 
        id_visita AS "id", 
        id_actividad AS "idActividad", 
        inicio, coordenada, descripcion, contacto, encargado, foto, tipo, pais, 
        personas_alcanzadas AS "personasAlcanzadas", 
        contactos_nuevos AS "contactosNuevos", 
        km_recorridos AS "kmRecorridos", 
        tiempo_invertido AS "tiempoInvertido", 
        gasolina, comida, 
        otros_gastos AS "otrosGastos", 
        total_inversion AS "totalInversion" 
        FROM movida.visitas WHERE id_visita=$1`,

    create_visita_query: "INSERT INTO movida.visitas (id_actividad, inicio, coordenada, descripcion, contacto, encargado, foto, tipo, pais, personas_alcanzadas, contactos_nuevos, km_recorridos, tiempo_invertido, gasolina, comida, otros_gastos, total_inversion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING id_visita",
    update_visita_query: "UPDATE movida.visitas SET id_actividad=$1, inicio=$2, coordenada=$3, descripcion=$4, contacto=$5, encargado=$6, foto=$7, tipo=$8, pais=$9, personas_alcanzadas=$10, contactos_nuevos=$11, km_recorridos=$12, tiempo_invertido=$13, gasolina=$14, comida=$15, otros_gastos=$16, total_inversion=$17 WHERE id_visita=$18",
    delete_visita_query: "DELETE FROM movida.visitas WHERE id_visita=$1",

    // Actividades
    activity_query: `SELECT 
        id_calendario AS "id_calendario", 
        fecha, 
        hora AS "hora", 
        actividad, tipo, estado, pais, comentario
        FROM movida.actividades`,

    activity_by_id_query: `SELECT 
        id_calendario AS "id_calendario", 
        fecha, 
        hora AS "hora", 
        actividad, tipo, estado, pais, comentario
        FROM actividades WHERE id_calendario=$1`,

    create_activity_query: "INSERT INTO actividades (fecha, hora, actividad, tipo, estado, pais, comentario) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id_calendario",
    update_activity_query: "UPDATE actividades SET fecha=$1, hora=$2, actividad=$3, tipo=$4, estado=$5, pais=$6, comentario=$7 WHERE id_calendario=$8",
    delete_activity_query: "DELETE FROM actividades WHERE id_calendario=$1"
}
