"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = {
  login_query: "SELECT id_user, fecha, hora, coordenada, nombre, correo, pass, activo, 'admin' FROM users_thera where activo='1' and correo=$1 AND pass=$2",
  // Voluntarios
  voluntarios_query: "SELECT \n        id_voluntario AS \"id\", \n        fecha_inscripcion AS \"fechaInscripcion\", \n        hora_inscripcion AS \"horaInscripcion\", \n        nombre_completo AS \"nombreCompleto\", \n        pais, nacionalidad, \n        documento_identificacion AS \"documentoIdentificacion\", \n        fecha_nacimiento AS \"fechaNacimiento\", \n        edad, genero, \n        profesion_oficio AS \"profesionOficio\", \n        ocupacion, telefono, \n        estado_civil AS \"estadoCivil\", \n        departamento_region AS \"departamentoRegion\", \n        municipio_provincia AS \"municipioProvincia\", \n        ciudad, \n        grado_academico AS \"gradoAcademico\", \n        estudios_adicionales AS \"estudiosAdicionales\", \n        correo, facebook, instagram, tiktok, iglesia, pastor, \n        contacto_pastor AS \"contactoPastor\", \n        denominacion, \n        areas_servicio AS \"areasServicio\", \n        dones_talentos AS \"donesTalentos\", \n        curso_storyline AS \"cursoStoryline\", \n        diploma_storyline AS \"diplomaStoryline\", \n        curso_vaya_movilizar AS \"cursoVayaMovilizar\", \n        diploma_vaya_movilizar AS \"diplomaVayaMovilizar\", \n        cimas_asistidos AS \"cimasAsistidos\", \n        areas_servicio_cima AS \"areasServicioCima\", \n        programas_participados AS \"programasParticipados\", \n        tipo_voluntariado AS \"tipoVoluntariado\", \n        testimonio, \n        carta_pastoral AS \"cartaPastoral\", \n        foto, \n        datos_completos AS \"datosCompletos\" \n        FROM movida.voluntarios",
  // Visitas
  visitas_query: "SELECT \n        id_visita AS \"id\", \n        id_actividad AS \"idActividad\", \n        inicio, coordenada, descripcion, contacto, encargado, foto, tipo, pais, \n        personas_alcanzadas AS \"personasAlcanzadas\", \n        contactos_nuevos AS \"contactosNuevos\", \n        km_recorridos AS \"kmRecorridos\", \n        tiempo_invertido AS \"tiempoInvertido\", \n        gasolina, comida, \n        otros_gastos AS \"otrosGastos\", \n        total_inversion AS \"totalInversion\" \n        FROM movida.visitas",
  visita_by_id_query: "SELECT \n        id_visita AS \"id\", \n        id_actividad AS \"idActividad\", \n        inicio, coordenada, descripcion, contacto, encargado, foto, tipo, pais, \n        personas_alcanzadas AS \"personasAlcanzadas\", \n        contactos_nuevos AS \"contactosNuevos\", \n        km_recorridos AS \"kmRecorridos\", \n        tiempo_invertido AS \"tiempoInvertido\", \n        gasolina, comida, \n        otros_gastos AS \"otrosGastos\", \n        total_inversion AS \"totalInversion\" \n        FROM movida.visitas WHERE id_visita=$1",
  create_visita_query: "INSERT INTO movida.visitas (id_actividad, inicio, coordenada, descripcion, contacto, encargado, foto, tipo, pais, personas_alcanzadas, contactos_nuevos, km_recorridos, tiempo_invertido, gasolina, comida, otros_gastos, total_inversion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING id_visita",
  update_visita_query: "UPDATE movida.visitas SET id_actividad=$1, inicio=$2, coordenada=$3, descripcion=$4, contacto=$5, encargado=$6, foto=$7, tipo=$8, pais=$9, personas_alcanzadas=$10, contactos_nuevos=$11, km_recorridos=$12, tiempo_invertido=$13, gasolina=$14, comida=$15, otros_gastos=$16, total_inversion=$17 WHERE id_visita=$18",
  delete_visita_query: "DELETE FROM movida.visitas WHERE id_visita=$1",
  // Actividades
  activity_query: "SELECT \n        id_calendario AS \"id_calendario\", \n        fecha, \n        hora AS \"hora\", \n        actividad, tipo, estado, pais, comentario\n        FROM movida.actividades",
  activity_by_id_query: "SELECT \n        id_calendario AS \"id_calendario\", \n        fecha, \n        hora AS \"hora\", \n        actividad, tipo, estado, pais, comentario\n        FROM actividades WHERE id_calendario=$1",
  create_activity_query: "INSERT INTO actividades (fecha, hora, actividad, tipo, estado, pais, comentario) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id_calendario",
  update_activity_query: "UPDATE actividades SET fecha=$1, hora=$2, actividad=$3, tipo=$4, estado=$5, pais=$6, comentario=$7 WHERE id_calendario=$8",
  delete_activity_query: "DELETE FROM actividades WHERE id_calendario=$1",
  // Copiloto Emocional - Usuarios
  copiloto_register: "INSERT INTO movida.copiloto_usuarios (email, password_hash, nombre) VALUES ($1, $2, $3) RETURNING id, email, nombre, activo, created_at",
  copiloto_login: "SELECT id, email, nombre, activo, created_at FROM movida.copiloto_usuarios WHERE email = $1 AND password_hash = $2 AND activo = true",
  copiloto_check_email: "SELECT id FROM movida.copiloto_usuarios WHERE email = $1",
  // Copiloto Emocional - Mensajes
  copiloto_save_message: "INSERT INTO movida.copiloto_messages (user_id, area, session_id, role, content, categoria, intensidad) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id",
  copiloto_get_history: "SELECT id, role, content, categoria, intensidad, created_at \n        FROM movida.copiloto_messages \n        WHERE user_id = $1 AND area = $2 AND session_id = $3\n        ORDER BY created_at ASC \n        LIMIT $4",
  copiloto_get_recent_messages: "SELECT id, role, content, categoria, intensidad, created_at \n        FROM movida.copiloto_messages \n        WHERE user_id = $1 AND area = $2\n        ORDER BY created_at DESC \n        LIMIT $4",
  copiloto_count_messages: "SELECT COUNT(*) as count FROM movida.copiloto_messages WHERE user_id = $1 AND area = $2",
  // Copiloto Emocional - Memoria
  copiloto_save_memory: "INSERT INTO movida.copiloto_memory (user_id, area, summary) VALUES ($1, $2, $3) RETURNING id",
  copiloto_get_memory: "SELECT id, summary, created_at FROM movida.copiloto_memory WHERE user_id = $1 AND area = $2 ORDER BY created_at DESC LIMIT 10",
  // Copiloto Emocional - Acciones
  copiloto_save_action: "INSERT INTO movida.copiloto_actions (user_id, area, title, description, urgency) VALUES ($1, $2, $3, $4, $5) RETURNING id",
  copiloto_get_actions: "SELECT id, title, description, urgency, completed, created_at FROM movida.copiloto_actions WHERE user_id = $1 AND area = $2 ORDER BY created_at DESC",
  copiloto_get_all_actions: "SELECT ca.id, ca.title, ca.description, ca.urgency, ca.completed, ca.created_at, ca.area FROM movida.copiloto_actions ca WHERE ca.user_id = $1 ORDER BY ca.completed ASC, ca.created_at DESC",
  copiloto_toggle_action: "UPDATE movida.copiloto_actions SET completed = NOT completed WHERE id = $1 AND user_id = $2 RETURNING id, completed",
  copiloto_update_action: "UPDATE movida.copiloto_actions SET title = COALESCE($3, title), description = COALESCE($4, description), urgency = COALESCE($5, urgency), area = COALESCE($6, area) WHERE id = $1 AND user_id = $2 RETURNING id, title, description, urgency, area",
  copiloto_delete_action: "DELETE FROM movida.copiloto_actions WHERE id = $1 AND user_id = $2",
  // Copiloto Emocional - Conversaciones
  copiloto_get_conversations_by_area: "SELECT id, role, content, categoria, intensidad, created_at \n        FROM movida.copiloto_messages \n        WHERE user_id = $1 AND area = $2\n        ORDER BY created_at ASC",
  copiloto_get_all_conversations: "SELECT id, role, content, categoria, intensidad, area, created_at \n        FROM movida.copiloto_messages \n        WHERE user_id = $1\n        ORDER BY created_at DESC"
};