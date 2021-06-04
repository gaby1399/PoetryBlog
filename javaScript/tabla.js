$(document).ready(function () {
    function loadPersons() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "http://127.0.0.1:5500/LibreríaInfo.json", true);
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                var respuesta = JSON.parse(xmlhttp.responseText);
                var libro = respuesta.Libro;
                var lugar = respuesta.CR-Lugar;
                var tbltop = `<h3>Librería</h3><table>
			    <tr><th>Año</th><th>Nombre de libros</th><th>Lugares donde encontrarlos</th>`;
                var mainLibrería = "";
                for (i = 0; i < Libro.length; i++) {
                    mainLibrería += "<tr><td>" + Libro[i].Year + "</td><td>" + peliculas[i].Name + "</td><td>" + peliculas[i].Lugar + "</td><td>";
                }
                var tblbottom = "</table>";
                var tbl = tbltop + mainLibrería + tblbottom;
                document.getElementById("Libro-info").innerHTML = tbl;

                var ulTop = `<h3>Pueden encontrarlos en Costa Rica</h3><ul>`;
                var mainLugar = "";
                for (i = 0; i < lugar.length; i++) {
                    mainLugar += "<li>" + lugar[i].Name + "</li>";
                }
                var ulbottom = "</ul>";
                var ul = ulTop + mainLugar + ulbottom;
                document.getElementById("CR-info").innerHTML = ul;
            }
        };
        xmlhttp.send();
    }
    window.onload = function () {
        loadPersons();
    }
});
