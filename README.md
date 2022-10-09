# Microservicio de marca de tiempo

<h3>Crea una aplicación full stack de JavaScript que sea funcionalmente similar a esta: https://timestamp-microservice.freecodecamp.rocks/.
<br><br>
Nota: El propósito de este proyecto no es la versión de zonas horarias, por lo que asume que todas las fechas válidas enviadas serán analizadas con new Date() como fechas GMT.</h3>

#

# Tests

✅ Debes proporcionar tu propio proyecto, no la URL del ejemplo.<br><br>
✅ Una petición para /api/:date? con una fecha válida debe devolver un objeto JSON con una clave unix que es una marca de tiempo Unix de la fecha de entrada en milisegundos (como tipo Número).<br><br>
✅ Una petición para /api/:date? con una fecha válida debe devolver un objeto JSON con una clave utc que es una cadena de la fecha de entrada en el formato: Thu, 01 Jan 1970 00:00:00 GMT.<br><br>
✅ Una solicitud a /api/1451001600000 debe devolver { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }.<br><br>
✅ Tu proyecto puede manejar fechas que pueden ser analizadas con éxito por new Date(date_string).<br><br>
✅ Si la fecha de entrada es inválida, la api devuelve un objeto con la estructura { error : "Invalid Date" }.<br><br>
✅ Un parámetro de fecha vacío debe devolver la hora actual en un objeto JSON con una clave unix.<br><br>
✅ Un parámetro de fecha vacío debe devolver la hora actual en un objeto JSON con una clave utc.
