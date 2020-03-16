'use strict'

const Orden = use ('App/Models/Modelos/Orden');

class OrdeneController {

    async crearOrdenes( {request,response}){
       const orden = new Orden();
       const {fecha, empleado, cliente}= request.all()
        orden.fecha= fecha
        orden.empleado =empleado
        orden.cliente = cliente

        if (orden.save())
        return response().json(orden, 202)
    return response().json(null,422)
    }

    async eliminarOrden( {request, response}) {
        const orden = new Orden.find(request.id);

        if(orden.delete())
            return response().json(orden,202)
        return response().json(null,422)
    }

    async actualizarOrden( {request, response}) {
        const orden =new Orden.find($request.id)
        const {fecha, empleado, cliente}= request.all()
        orden.fecha= fecha
        orden.empleado =empleado
        orden.cliente = cliente


        if(orden.save())
            return response().json(orden,202);
        return response().json(null,422);
    }

   /* async index(){
      const  data =new Orden.all().toArray();
        data = DB.table('ordenes')
            ->join('users', 'ordenes.usuario', '=', 'users.id')
            ->select('ordenes.*', 'ordenes.usuario as user')
            ->orderBy('id','desc')
            ->get();
        return view('orden',['data' , data] );
    }*/
}

module.exports = OrdeneController
