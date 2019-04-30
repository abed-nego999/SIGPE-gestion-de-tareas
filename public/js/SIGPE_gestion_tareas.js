/**
 * 
 * Campos del modelo:
 * Numero: String,
 * Tipo: String ('Petición', 'Incidencia')
 * Ambito: String ('Privado', 'Público')
 * Reutilizada: Boolean
 * Titulo: String
 * Descripcion: String
 * Estado:  ('Verde', 'Amarillo', 'Naranja', 'Rojo')
 * Fecha_llegada:  Date (yyyy-MM-ddTHH:mm:ss.SSSZ)
 * Fecha_salida: Date (yyyy-MM-ddTHH:mm:ss.SSSZ)
 * Tecnico_devoteam: String
 * Tecnico_rsi: String
 * Funcional: String
 * Fecha_subida: Date (yyyy-MM-ddTHH:mm:ss.SSSZ)
 * Comentarios: String
 * Elementos:  String
 * 
 */

function getDeleteButton (id, name) {
    var boton = $('<button></button>');
    var newClass = 'eliminarSigpe_' + id;
    boton.attr('id', newClass);
    boton.html(name);
    boton.click(deleteSigpe);
    return boton;
}

function reloadList () {
    var list = $('#sigpeList');
    $.get('sigpes').done((data) => {
        list.html('');
        for (sigpeIndex in data) {
            var sigpe = data[sigpeIndex];
            var newDiv = $('<div></div>');
            var newParagraph = $('<p></p>');
            newDiv.attr('id', 'sigpe_' + sigpe._id);
            newDiv.addClass('cuadroSigpes');
            newParagraph.html(JSON.stringify(data[sigpeIndex]));
            newDiv.append(newParagraph);
            newDiv.append(getDeleteButton(sigpe._id, 'Eliminar SIGPE "' + sigpe.Titulo + '"'));
            list.append(newDiv);
        }
    });
};

function submitNewSigpe (event) {
    event.preventDefault();
    $.post('sigpes', $("#sigpeForm").serialize()).done(() => {
        reloadList();
    }).fail((jqXHR, textStatus, errorThrown) => {
        alert(jqXHR);
        alert(textStatus);
        alert(errorThrown);
    });
}

function deleteSigpe (event) {
    event.preventDefault();
    var _id = $(this).attr('id').substr('eliminarSigpe_'.length);
    $.ajax({url: 'sigpes/' + _id,
        type: 'delete'}).done(() => {
        reloadList();
    }).fail((jqXHR, textStatus, errorThrown) => {
        alert(jqXHR);
        alert(textStatus);
        alert(errorThrown);
    });
}

$(document).ready(() => {
    $('#postSigpeButton').click(submitNewSigpe);
    reloadList();
})