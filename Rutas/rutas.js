const express=require('express')
const rutas=express.Router();
const controller=require('../controlador/controller')
rutas.get('/',controller.index);

//rutas.post('/login',controller.login)
rutas.get('/vistaprincipal',controller.vistaprincipal);
rutas.get('/Usuarios',controller.usuarios);
rutas.get('/Clientes',controller.clientes);
rutas.get('/Proveedores',controller.proveedores);
rutas.get('/Productos',controller.productos);
rutas.get('/Ventas',controller.ventas);
rutas.get('/Reportes',controller.reportes);
rutas.get('/ListaUsuarios',controller.listadousuarios)
rutas.get('/ListaClientes',controller.listadoclientes)
rutas.get('/ListaVentas',controller.listadoventas)
rutas.get('/cerrar',controller.cerrar);


module.exports=rutas//exportar lo que se requiere en el app
