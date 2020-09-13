//(1)me traigo la base de datos
const fs = require('fs')
const path = require('path')
let productos = fs.readFileSync(path.join(__dirname, '..', 'data', 'productos.json'),
    'utf-8')
productos = JSON.parse(productos)

let productController = {
        listado: (req, res) => {
            res.render('productos', {
                titulo: 'todos mis productos',
                listadoDeProductos: productos
            })
        },
        detalleProducto: (req, res) => {
            //ver codigo de zapatilla
            let id = req.params.id //el usuario brinda la informacion
                //Buscar zapatilla en el deposito(1)
            let productoElegido;
            productos.forEach(producto => {
                if (producto.id == id) {
                    productoElegido = producto
                }
            })
            res.render('detalleProducto', {
                titulo: productoElegido.nombre,
                /* */
                producto: productoElegido
            })
        }
    }
    /*me lo tengo que traer al main.js*/
module.exports = productsController