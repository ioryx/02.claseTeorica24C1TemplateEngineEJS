const express = require("express") /*me traigo express */
const routes = require('./routes/main')
const app = express() /*requiero el entre point */
const path = require('path') //se usa el metodo path(6)
app.listen(3030, () => console.log('servidor levantado en el puerto 3030'))

/*Luego registramos nuestras RUTAS /luego ir a router/main.js que va a menejar las rutas principales
El app es la puerta de entrada para los usuarios que quieran usar la aplicacion van a ingresar por este archivo*/
app.set('view engine', 'ejs') //PARA USAR [EJS(2)LUEGO CREAR LA CARPETA(view)
app.set('views', path.join(__dirname + 'views')) //(6)la carpeta donde estan las vistas tienen q ir en view o se tiene q llamar asi
    /*el (__dirname es la direccion que me permite llevar a la direccion) */
app.use(express.static(__dirname + '/public')) //para ulizar la carpeta (public)(3)ESTO EL NAVEGADOR TIENE ACCESO

/*ARCHIVOS DE RUTAS se asignan variables */
const mainRoutes = require("./routes/main")
const productsRoutes = require("./routes/products")
const usersRoutes = require("./routes/users")
    /*Despues que me tengo mis archivos de rutas me traigo */
app.use("/", mainRoutes) /*todas las rutas que arranquen con una barra sola la voy a derivar a [mainRoutes] */
app.use("/products", productsRoutes) /*Lo mismo aca */
app.use("/users", usersRoutes) /*lo mismo aca */