/*Aca requiere express la ejecucion del Router*/
const express = require("express")
const mainController = require("../controllers/mainController")
const router = express.Router()

router.get("/", mainController.index) /*esto se estaria conectando a un controlador ESTA ES LA RUTA PRINCIPAL DE LA PAGINA*/

module.exports = router
    /*pero despues se tiene q registrar las rutas y tengo que llevarlo a (app.js) */

/*cree en controllers*/