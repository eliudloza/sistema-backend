'use strict'

const Orden = use ('App/Models/Modelos/Orden');

class OrdeneController {

    async crearOrdenes( {request,response}){
       const orden = await Orden();
       const {fecha, empleado, cliente}= request.all()
        orden.fecha= fecha
        orden.empleado =empleado
        orden.cliente = cliente

        if (orden.save())
        return response().json(orden, 202)
    return response().json(null,422)
    }

    async eliminarOrden( {request, response}) {
        const orden = await Orden.find(request.id);

        if(orden.delete())
            return response().json(orden,202)
        return response().json(null,422)
    }

    async actualizarOrden( {request, response}) {
        const orden = await Orden.find($request.id)
        const {fecha, empleado, cliente}= request.all()
        orden.fecha= fecha
        orden.empleado =empleado
        orden.cliente = cliente


        if(orden.save())
            return response().json(orden,202);
        return response().json(null,422);
    }

    async index({response}){
        const  data = await Orden.all()

        return response.status(200).json(data)
    }
}

module.exports = OrdeneController
