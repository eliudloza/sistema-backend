'use strict'

const Producto= use ('App/Models/Modelos/Producto');

class ProductoController {

    async  crearProducto({request, response}){
        const producto = new Producto()
        const {nombre, precio, cantidad, categoria, proveedor} = request.all()
        

        producto.nombre = nombre
        producto.precio= precio
        producto.cantidad = cantidad
        producto.categoria = categoria
        producto.proveedor = proveedor

        producto.save()
        return response().json(producto, 202);
    
    }


    async eliminarProducto({request, response}) {
        const producto = new Producto.find(request.id);

        if(producto.delete())
            return response().json(producto,202);
        return response().json(null,422);
    }

    async actualizarProducto( {request, response}) {
        const producto = new Producto.find(request.id);

        producto.nombre = nombre
        producto.precio= precio
        producto.cantidad = cantidad
        producto.categoria = categoria
        producto.proveedor = proveedor

        if(producto.save())
            return response().json(producto,202);
        return response().json(null,422);
    }
    async index(){
       const  data = new Producto.all().toArray();

        return view('productos',['data' , data] );
    }
}

module.exports = ProductoController
