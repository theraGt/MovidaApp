
export default {
    login_query: "SELECT id_user, fecha, hora, coordenada, nombre, correo, pass, activo, 'admin' FROM users_thera where activo='1' and correo=$1 AND pass=$2",
    voluntarios_query: "SELECT id_voluntario, fecha_inscripcion, hora_inscripcion, nombre_completo, pais, nacionalidad, documento_identificacion, fecha_nacimiento, edad, genero, profesion_oficio, ocupacion, telefono, estado_civil, departamento_region, municipio_provincia, ciudad, grado_academico, estudios_adicionales, correo, facebook, instagram, tiktok, iglesia, pastor, contacto_pastor, denominacion, areas_servicio, dones_talentos, curso_storyline, diploma_storyline, curso_vaya_movilizar, diploma_vaya_movilizar, cimas_asistidos, areas_servicio_cima, programas_participados, tipo_voluntariado, testimonio, carta_pastoral, foto, datos_completos FROM voluntarios",
    visitas_query: "SELECT id_visita, id_actividad, inicio, coordenada, descripcion, contacto, encargado, foto, tipo, pais, personas_alcanzadas, contactos_nuevos, km_recorridos, tiempo_invertido, gasolina, comida, otros_gastos, total_inversion FROM movida.visitas",
    actividades_query: "SELECT id_actividad from actividades"
}
