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
Route.delete('/eliminaCate/:id', 'CategoriaController.delete')
Route.post('/actualizaCate/:id', 'CategoriaController.update')
Route.get('/indexCate', 'CategoriaController.index')

//Vendedores
Route.post('/crearVendedor', 'VendedorController.crear')
Route.delete('/eliminaVendedor/:id', 'VendedorController.delete')
Route.post('/actualizaVendedor/:id', 'VendedorController.update')
Route.get('/indexProvee', 'VendedorController.index')

//Productos
Route.post('/creaProduc', 'ProductoController.crearProducto')
Route.delete('/eliminaProduc/:id', 'ProductoController.delete')
Route.post('/actualizaProduc/:id', 'ProductoController.update')
Route.get('/indexProduc', 'ProductoController.index')


//Clientes
Route.post('/creaCliente', 'ClienteController.crearCliente')
Route.delete('/eliminaCliente/:id', 'ClienteController.delete')
Route.post('/actualizaCliente/:id', 'ClienteController.update')
Route.get('/indexCliente', 'ClienteController.index')

//Empleados
Route.post('/crearEmpleado', 'EmpleadoController.crearEmpleado')
Route.delete('/eliminaEmple/:id', 'EmpleadoController.delete')
Route.post('/actualizaEmple/:id', 'EmpleadoController.update')
Route.get('/indexEmple', 'EmpleadoController.index')

//Ordenes
Route.post('/creaOrden', 'OrdeneController.crearO')
Route.delete('/eliminaOrden/:id', 'OrdeneController.delete')
Route.post('/actualizaOrden/:id', 'OrdeneController.update')
Route.get('/indexOrden', 'OrdeneController.index')

//Detalle
Route.post('/creaDetalle', 'DetalleDeOrdenController.crearDetalle')
Route.delete('/eliminaDetalle', 'DetalleDeOrdeneController.eliminarDetalle')
Route.post('/actualizaDetalle', 'DetalleDeOrdeneController.actualizarDetalle')
Route.get('/indexDetalle', 'DetalleDeOrdeneController.index')

}).prefix('/usuarios')
