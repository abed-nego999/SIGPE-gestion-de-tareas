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

function getButton (id, text, title, action) {
    var boton = $('<a></a>');
    boton.attr('id', id).html(text).attr('href', '#').attr('title', title).click(action);
    return boton;
}

function reloadList () {
    var list = $('#sigpeList tbody');
    $.get('sigpes').done((data) => {
        list.html('');
        for (sigpeIndex in data) {
            var sigpe = data[sigpeIndex];
            var newRow = $('<tr></tr>');
            newRow.append($('<td></td>').addClass('d-none').attr('scope', 'row').html(sigpe._id));
            newRow.append($('<td></td>').html(sigpe.Numero));
            newRow.append($('<td></td>').html(sigpe.Tipo));
            newRow.append($('<td></td>').html(sigpe.Ambito));
            newRow.append($('<td></td>').html(sigpe.Reutilizada));
            newRow.append($('<td></td>').html(sigpe.Titulo));
            newRow.append($('<td></td>').html(sigpe.Descripcion));
            newRow.append($('<td></td>').html(sigpe.Estado));
            newRow.append($('<td></td>').html(sigpe.Fecha_llegada));
            newRow.append($('<td></td>').html(sigpe.Fecha_salida));
            newRow.append($('<td></td>').html(sigpe.Tecnico_devoteam));
            newRow.append($('<td></td>').html(sigpe.Tecnico_rsi));
            newRow.append($('<td></td>').html(sigpe.Funcional));
            newRow.append($('<td></td>').html(sigpe.Fecha_subida));
            newRow.append($('<td></td>').html(sigpe.Comentarios));
            newRow.append($('<td></td>').html(sigpe.Elementos));
            newRow.append($('<td></td>').append(getButton('modificarSigpe_' + sigpe._id, '♻️', 'Modificar', modifySigpe)).append(getButton('eliminarSigpe_' + sigpe._id, '🗑️', 'Eliminar', deleteSigpe)));
            list.append(newRow);
        }
    });
};

function submitNewSigpe (event) {
    event.preventDefault();
    $.post('sigpes', $("#newSigpeForm").serialize()).done(() => {
        reloadList();
    }).fail((jqXHR, textStatus, errorThrown) => {
        alert(jqXHR);
        alert(textStatus);
        alert(errorThrown);
    });
}

function replaceSigpe (event) {
    event.preventDefault();
    $.ajax({url: 'sigpes/' + _id,
        type: 'put'}, $("#saveSigpeForm").serialize()).done(() => {
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

function modifySigpe (event) {
    event.preventDefault();
    var _id = $(this).attr('id').substr('modificarSigpe_'.length);
    $.ajax({url: 'sigpes/' + _id,
        type: 'get'}).done((data) => {
        populate($("#saveSigpeForm"), data);
        $('#modifySigpeModal').modal('show');
    }).fail((jqXHR, textStatus, errorThrown) => {
        alert(jqXHR);
        alert(textStatus);
        alert(errorThrown);
    });
}

$(document).ready(() => {
    $('#postSigpeButton').click(submitNewSigpe);
    $('#saveSigpeButton').click(replaceSigpe);
    reloadList();
})

function populate(form, data) {
    $.each(data[0], (key, value) => {
        var ctrl = $('[name=' + key + ']', form);
        switch(ctrl.prop("type")) { 
            case "radio": case "checkbox":   
                ctrl.each(() => {
                    if($(this).attr('value') == value)
                        $(this).attr("checked",value);
                });   
                break;  
            default:
                ctrl.val(value); 
        }
    });
}