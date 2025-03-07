# haroldvalencia27.github.io
Mi repositorio Harold Valencia Grupo 411

/* Estilos generales */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}

header {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

header nav ul li {
    margin-left: 20px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
}

main {
    padding: 20px;
}

/* Estilos de artículos */
.articles {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
}

article {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 20px;
    text-align: center;
    width: 45%;
}

.image {
    width: 80px;
    height: 80px;
    background-color: #eee;
    margin: 0 auto 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Estilos del formulario de contacto */
.contacto-info {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 20px;
    margin-bottom: 20px;
}

.contacto-info form label {
    display: block;
    margin-bottom: 5px;
}

contacto-info form input[type="text"],
contacto-info form input[type="email"],
contacto-info form textarea {
    width: calc(100% - 12px); /* Ajuste para el padding y borde */
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
}

/* Estilos de la tabla de notas */
.Notas Estudiantes {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 20px;
}

.Notas Estudiantes table {
    width: 100%;
    border-collapse: collapse;
}

.Notas Estudiantes th,
.Notas Estudiantes td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.Notas Estudiantes th {
    background-color: #f2f2f2;
}

.Notas Estudiantes tfoot td {
    text-align: right;
}

/* Estilos del footer */
footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
}

footer a {
    color: #fff;
}

