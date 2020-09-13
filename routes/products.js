/*Aca requiere express la ejecucion del Router/Aca se copia igual siempre*/
const express = require('express')
const router = express.Router()
const productsController = require('/controllers/productController') /*despues voy a (productcontroller.js) a hacer una funcion*/
    /*ACA SE AGREGARIA LA LOGICA DE AGREGAR PRODUCTOS */
    /*SE RECOMIENDA USAR EL ID PARA QUE NO TENGAMOS CONFLICTOS EN EL CODIGO */
router.get('/', productsController.listado) //se agregara una funcion que se llame listado en productController
router.get('/:id', productsController.detalleProducto) /*Esto es una ruta adsolupta */
module.exports = router
    /*pero despues se tiene q registrar las rutas y tengo que llevarlo a (app.js) */