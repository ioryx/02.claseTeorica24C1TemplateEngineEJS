let maincontroller = {
    index: (req, res) => {
        let usuario = 'Pio';
        res.render('home', {
                usuarioIngresado: usuario, //usuario/usuario tambien sirve
                apellido: 'clu'
            })
            //la informacion viaja por (usuarioIngresado)
            //aca enviamos la respuesta renderizando home
    }
}
module.exports = maincontroller
    /*me lo tengo que traer al main.js */
    /*req (parametro)que tiene mnton de informacion sobre lo que el usuario nos envie /toda la informacion viaja por req */
    /*res (parametro)es la respuesta a los requerimientos */