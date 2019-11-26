module.exports = function (app) {

    var Evento = app.models.eventos;
    var Users = app.models.usuarios;

    var EventosController = {
        menu: function (request, response) {
            var usuario = request.session.usuario,
            params = { usuario: usuario };
            response.render('eventos/menu', params);
        },
        cadastroUsuario: function (request, response) {
            const usuario = request.session.usuario
            response.render('eventos/cadUsuario', {usuario});
        },
        cadastroEvento: function (request, response) {
            const usuario = request.session.usuario
            response.render('eventos/cadEvento', {usuario});
        },

        listaEventos: function (request, response) {
            Evento.find(function (erro, eventos) {
                if (erro) {
                    response.render('/menu');
                }
                else {
                    var usuario = request.session.usuario,
                    params = { usuario: usuario, eventos: eventos };
                    response.render('eventos/listaEventos', params);
                }
            });
        },

        novoEvento: function (request, response) {
            var evento = request.body.evento;
            if (evento.descricao.trim().length == 0 || evento.data == 'undefined'
                || evento.preco.trim().length == 0) {
                response.redirect('/cadEvento');
            }
            else {
                Evento.create(evento, function (erro, evento) {
                    if (erro) {
                    response.redirect('/cadEvento');
                    }
                    else {
                    response.redirect('/menu');
                    }
                });
            }
        },

        listaUsuarios: function (request, response) {
            Users.find(function (erro, usuarios) {
                if (erro) {
                    response.render('/menu');
                }
                else {
                    var usuario = request.session.usuario,
                    params = { usuario: usuario, usuarios: usuarios };
                    response.render('eventos/listaUsuarios', params);
                }
            });
        }

    };
    return EventosController;
};