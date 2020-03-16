'use strict'
const Empleado= use ('App/Models/Modelos/Empleado');

class EmpleadoController {


    async crearEmpleado({request, response}){

      let empleado = new Empleado()
      let obj = request.all()

      empleado.nombre = obj.nombre
      empleado.ap_paterno = obj.ap_paterno
      empleado.ap_materno = obj.ap_materno
      empleado.direccion = obj.direccion
      empleado.ciudad = obj.ciudad
      empleado.tel = obj.tel

      try {
        let data = await empleado.save()
        if(data) {
          return response.status(201).send({message: "Empleado creado con exito"})
        }
      } catch(error) {
        return response.status(401)
      }

    }

    async eliminarEmpleado({request}){
      const  empleado = new Empleado().find(request.id)

        if(empleado.delete())
        return response.json(empleado, 200)

    }

    async actualizarEmpleado({response,request}){
       const empleado = new Empleado.find(request.id)
        const {nombre, ap_paterno, ap_materno,direccion, ciudad, tel} = request.all()

        empleado.nombre = nombre
        empleado.ap_paterno = ap_paterno
        empleado.ap_materno = ap_materno
        empleado.direccion = direccion
        empleado.ciudad = ciudad
        empleado.tel = tel

        await empleado.save()
        return response.json(empleado, 200)

    }

    async index(){
        const data = new empleado.all().toArray();
        return view('empleados',['data' , data] );
    }
}

module.exports = EmpleadoController
