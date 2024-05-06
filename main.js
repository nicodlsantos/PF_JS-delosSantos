const agenda = []

function agendarCliente(nombre, apellido, mes, dia, hora) {
    const clienteAgendado = { nombre: nombre, apellido: apellido, mes: mes, dia: dia, hora: hora }
    agenda.push(clienteAgendado)
}

function verAgenda(nombre, apellido) {
    for (const agendado of agenda) {
        if (agendado.nombre == nombre && agendado.apellido == apellido) {
            alert(agendado.nombre + ' ' + agendado.apellido + ' tu cita esta confirmada para el ' + agendado.dia + '/' + agendado.mes + ' a las ' + agendado.hora + ' hs.')
        } else {
            alert('Su nombre no figura en el sistema. De ser un error, intente nuevamente.')
        }
    }
}

function cancelarAgenda(nombre, apellido) {
    for (let i = 0; i < agenda.length; i++) {
        const agendado = agenda[i];
        if (agendado.nombre === nombre && agendado.apellido === apellido) {
            if (confirm(agendado.nombre + ' ' + agendado.apellido + ', ¿Quieres cancelar tu cita del día ' + agendado.dia + ' a las ' + agendado.hora + '?')) {
                agenda.splice(i, 1);
                alert('Cita cancelada correctamente.');
            } else {
                alert('No se encontró ninguna cita para cancelar.')
            }
        }
    }
}



function main() {
    alert("Bienvenido")
    let continuar = confirm("¿Desea realizar alguna accion?")
    while (continuar) {
        const accion = prompt("Ingrese la accion que desea realizar (Agendarme, Ver agenda, Cancelar agenda)")
        if (accion == "Agendarme") {
            const nombreIngresa = prompt("Ingrese su nombre")
            const apellidoIngresa = prompt("Ingrese su apellido")
            const mesIngresa = parseInt(prompt("Ingresa el mes en que desea agendarse (ej. 04)"))
            const diaIngresa = parseInt(prompt("Ingresa el dia en que desea agendarse (ej. 14)"))
            const horaIngresa = parseInt(prompt("Ingrese la hora en que desea agendarse (ej. 21)"))
            agendarCliente(nombreIngresa, apellidoIngresa, mesIngresa, diaIngresa, horaIngresa)
            verAgenda(nombreIngresa, apellidoIngresa)
        } else if (accion == "Ver agenda") {
            const nombreIngresa = prompt("Ingrese su nombre")
            const apellidoIngresa = prompt("Ingrese su apellido")
            verAgenda(nombreIngresa, apellidoIngresa)
        } else if (accion == "Cancelar agenda") {
            const nombreIngresa = prompt("Ingrese su nombre")
            const apellidoIngresa = prompt("Ingrese su apellido")
            cancelarAgenda(nombreIngresa, apellidoIngresa)
        } else {
            alert("Accion no valida")
        }
        continuar = confirm("¿Desea realizar alguna otra accion?")
    }

}

main()