'use strict'

const Producto= use ('App/Models/Modelos/Producto');

class ProductoController {

    async  crearProducto({request, response}){
        const producto = await Producto()
        const {nombre, precio, cantidad, categoria, proveedor} = request.all()
        

        producto.nombre = nombre
        producto.precio= precio
        producto.cantidad = cantidad
        producto.categoria = categoria
        producto.proveedor = proveedor

        producto.save()
        return response().json(producto, 202)
    
    }


    async eliminarProducto({request, response}) {
        const producto = await Producto.find(request.id);

        if(producto.delete())
            return response().json(producto,202)
        return response().json(null,422)
    }

    async actualizarProducto( {request, response}) {
        const producto = await Producto.find(request.id)  

        producto.nombre = nombre
        producto.precio= precio
        producto.cantidad = cantidad
        producto.categoria = categoria
        producto.proveedor = proveedor

        if(producto.save())
            return response().json(producto,202)
        return response().json(null,422)
    }
    async index({response}){
       const  data = await Producto.all()

        return response.status(200).json(data)
    }
}

module.exports = ProductoController
