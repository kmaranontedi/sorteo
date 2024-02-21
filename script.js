function divideEquipos() {
    var inputNames = document.getElementById('names').value;
    var namesArray = inputNames.split(',').map(name => name.trim());

    // Validar que haya al menos 2 nombres
    if (namesArray.length < 2) {
        alert('Ingresa al menos dos nombres para dividir en equipos.');
        return;
    }

    // Barajar el array de nombres de manera aleatoria
    namesArray.sort(() => Math.random() - 0.5);

    // Dividir el array en dos equipos
    var halfIndex = Math.ceil(namesArray.length / 2);
    var team1 = namesArray.slice(0, halfIndex);
    var team2 = namesArray.slice(halfIndex);

    // Mostrar los equipos en el HTML
    document.getElementById('team1').innerHTML = '<h3>Equipo 1:</h3>' + team1.join(', ');
    document.getElementById('team2').innerHTML = '<h3>Equipo 2:</h3>' + team2.join(', ');
}
