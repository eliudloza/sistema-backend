'use strict'
const Detalle = use ('App/Models/Modelos/DetalleDeOrden');

class DetalleDeOrdenController {

    async crearDetalle( {request, response}){
        const detalle = await Detalle();
        const {precio, cantidad, producto, orden} = request.all();

        detalle.precio= precio
        detalle.cantidad = cantidad
        detalle.producto = producto
        detalle.orden = orden

        if (detalle.save())
        return response().json(detalle, 202)
    return response().json(null,422)
    }

    async eliminarDetalle( {request,response}) {
        const detalle = await Detalle.find(request.id)

        if(detalle.delete())
            return response().json(detalle,202);
        return response().json(null,422);
    }

    async actualizarDetalle( {request,response}) {
        const detalle =await Detalle.find(request.id);
        const {precio, cantidad, producto, orden} = request.all();

        detalle.precio= precio
        detalle.cantidad = cantidad
        detalle.producto = producto
        detalle.orden = orden

        if(detalle.save())
            return response().json(detalle,202);
        return response().json(null,422);
    }

    async index(){
        const  data = await Detalle.all()

        return response.status(200).json(data)
    }

}

module.exports = DetalleDeOrdenController
