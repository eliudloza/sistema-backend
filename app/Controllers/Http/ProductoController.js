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


  
    async delete({params, response}){
        const id = params.id
        const producto = await Producto.findOrFail(id)

        if(producto.delete())
            return response.json({'respuesta': 'Cancion eliminada'});
        return response.json(null,422);
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
        
        let database= await Producto.query().select('productos.id',('productos.nombre as nombre'),
        'productos.precio as precio','productos.cantidad as cantidad',
        'categorias.nombre as categoria',
        'vendedor.nombre as vendedor').table('productos')
        .innerJoin('categorias','categorias.id','productos.categoria')
        .innerJoin('vendedor','vendedor.id','productos.vendedor')
        .fetch()
        return response.json(database)

    }
}

module.exports = ProductoController
