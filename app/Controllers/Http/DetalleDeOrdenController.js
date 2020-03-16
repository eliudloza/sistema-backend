'use strict'
const Detalle = use ('App/Models/Modelos/DetalleDeOrden');

class DetalleDeOrdenController {

    async crearOrdenes( {request, response}){
        const detalle = new Detalle();
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
        const detalle = new Detalle.find(request.id)

        if(detalle.delete())
            return response().json(detalle,202);
        return response().json(null,422);
    }

    async actualizarDetalle( {request,response}) {
        const detalle =new Detalle.find(request.id);
        const {precio, cantidad, producto, orden} = request.all();

        detalle.precio= precio
        detalle.cantidad = cantidad
        detalle.producto = producto
        detalle.orden = orden

        if(detalle.save())
            return response().json(detalle,202);
        return response().json(null,422);
    }

   /* async index(){
        const data = new Detalle.all().toArray();
        data = DB.table('ordenes')
            ->join('users', 'ordenes.usuario', '=', 'users.id')
            ->select('ordenes.*', 'ordenes.usuario as user')
            ->orderBy('id','desc')
            ->get();
        return view('detalle',['data' , data] );
    }*/

}

module.exports = DetalleDeOrdenController
