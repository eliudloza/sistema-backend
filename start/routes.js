'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')


Route.group(()=>{
//Usuarios
Route.post('/registro','UserController.registro')
Route.post('/login','UserController.login')
Route.get('/mostrar/','UserController.mostrar')
Route.post('logout', 'UserController.logout')

//Categoria
Route.post('/creaCate', 'CategoriaController.crearCategoria')
Route.delete('/eliminaCate', 'CategoriaController.eliminarCategoria')
Route.post('/actualizaCate', 'CategoriaController.actualizarCategoria')
Route.get('/indexCate', 'CategoriaController.index')

//Proveedores
Route.post('/creaprovee', 'ProveedoreController.crear')
Route.delete('/eliminaProvee', 'ProveedoreController.eliminarProveedor')
Route.post('/actualizaProvee', 'ProveedoreController.actualizarProveedor')
Route.get('/indexProvee', 'ProveedoreController.index')

//Productos
Route.post('/creaProduc', 'ProductoController.crearProducto')
Route.delete('/eliminaProduc', 'ProductoController.eliminarProducto')
Route.post('/actualizaProduc', 'ProductoController.actualizarProducto')
Route.get('/indexProduc', 'ProductoController.index')


//Clientes
Route.post('/creaCliente', 'ClienteController.crearCliente')
Route.delete('/eliminaCliente', 'ClienteController.eliminarCliente')
Route.post('/actualizaCliente', 'ClienteController.actualizarCliente')
Route.get('/indexCliente', 'ClienteController.index')

//Empleados
Route.post('/crearEmpleado', 'EmpleadoController.crearEmpleado')
Route.delete('/eliminaEmple', 'EmpleadoController.eliminarEmpleado')
Route.post('/actualizaEmple', 'EmpleadoController.actualizarEmpleado')
Route.get('/indexEmple', 'EmpleadoController.index')

//Ordenes
Route.post('/creaOrden', 'OrdeneController.crearO')
Route.delete('/eliminaOrden', 'OrdeneController.eliminarOrden')
Route.post('/actualizaOrden', 'OrdeneController.actualizarOrden')
Route.get('/indexOrden', 'OrdeneController.index')

//Detalle
Route.post('/creaDetalle', 'DetalleDeOrdeneController.crearDetalle')
Route.delete('/eliminaDetalle', 'DetalleDeOrdeneController.eliminarDetalle')
Route.post('/actualizaDetalle', 'DetalleDeOrdeneController.actualizarDetalle')
Route.get('/indexDetalle', 'DetalleDeOrdeneController.index')

}).prefix('/usuarios')
