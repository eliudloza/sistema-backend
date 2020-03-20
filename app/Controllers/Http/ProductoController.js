'use strict'

const Producto= use ('App/Models/Modelos/Producto');

class ProductoController {

    async  crearProducto({request, response}){
        const producto = new Producto()
        const {nombre, precio, cantidad, categoria, vendedor} = request.all()
        

        producto.nombre = nombre
        producto.precio= precio
        producto.cantidad = cantidad
        producto.categoria = categoria
        producto.vendedor = vendedor

        await producto.save()
        return response.json(producto, 202)
    
    }


    async eliminarProducto({request, response}) {
        const producto = await Producto.find(request.id);

        if(producto.delete())
            return response().json(producto,202)
        return response().json(null,422)
    }

    async update( {params, request, response}) {

        const id = params.id
        const {nombre, precio, cantidad, categoria, vendedor} = request.all()
        const producto = await Producto.findOrFail(id)

        producto.nombre = nombre
        producto.precio = precio
        producto.cantidad =cantidad
        producto.categoria = categoria 
        producto.vendedor = vendedor

        await producto.save()
        return response.json({'respuesta': 'Producto actualizada'});
    }
    async index({response}){
       const  data = await Producto.all()

        return response.status(200).json(data)
    }
}

module.exports = ProductoController
