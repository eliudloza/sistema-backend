'use strict'
const Detalle = use ('App/Models/Modelos/DetalleDeOrden');

class DetalleDeOrdenController {

    async crearDetalle( {request, response}){
        const detalle = new Detalle()
        let obj = request.all()
  
        detalle.precio = obj.precio
        detalle.cantidad = obj.cantidad
        detalle.producto = obj.producto
        detalle.orden = obj.orden
  
        let data = await detalle.save()
        return response.status(201).send({message: "Detalle creado con exito"})
          
      }
  
      async delete({params, response}){
          const id = params.id
          const detalle = await Detalle.findOrFail(id)
  
          await detalle.delete()
          return response.json({'respuesta': 'Detalle eliminada'});
          
      }
  
      async update ({response,request,params}){
          const id = params.id
          const {precio, cantidad, producto, orden} = request.all()
          const detalle = await Detalle.findOrFail(id)

          detalle.precio = precio
          detalle.cantidad = cantidad
          detalle.producto=producto
          detalle.orden = orden
  
          await detalle.save()
          return response.json({'respuesta': 'Detalle actualizada'});
          
      }

    async index({response}){
       
        let database= await Detalle.query().select('detalle_de_ordens.id',('detalle_de_ordens.precio as precio'),
        'detalle_de_ordens.cantidad as cantidad',
        'productos.nombre as productos', 'ordenes.id as folio').table('detalle_de_ordens')
        .innerJoin('productos','producto.id','detalle_de_ordens.producto')
        .innerJoin('ordenes','ordenes.id','detalle_de_ordens.orden')
        .fetch()
        return response.json(database)
    }
}

module.exports = DetalleDeOrdenController
