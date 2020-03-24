'use strict'

const Orden = use ('App/Models/Modelos/Orden');

class OrdeneController {

    async crearO( {request,response}){
        const orden = new Orden()
        let obj = request.all()
  
        orden.fecha = obj.fecha
        orden.empleado = obj.empleado
        orden.cliente=obj.cliente
  
        try {
          let data = await orden.save()
          if(data) {
            return response.status(201).send({message: "Orden creado con exito"})
          }
        } catch(error) {
          return response.status(401)
        }
      }
  
      async delete({params, response}){
          const id = params.id
          const orden = await Orden.findOrFail(id)
  
          await orden.delete()
          return response.json({'respuesta': 'Orden eliminada'});
          
      }
  
      async update ({response,request,params}){
          const id = params.id
          const {fecha, empleado, cliente} = request.all()
          const orden = await Orden.findOrFail(id)

          orden.fecha = fecha
          orden.empleado = empleado
          orden.cliente=cliente
  
          await orden.save()
          return response.json({'respuesta': 'Orden actualizada'});
          
      }

    async index({response}){
       
        let database= await Orden.query().select('ordenes.id',('ordenes.fecha as fecha'),
        'empleados.nombre as empleado',
        'clientes.nombre as clientes').table('ordenes')
        .innerJoin('empleados','empleados.id','ordenes.empleado')
        .innerJoin('clientes','clientes.id','ordenes.cliente')
        .fetch()
        return response.json(database)
    }
}

module.exports = OrdeneController
