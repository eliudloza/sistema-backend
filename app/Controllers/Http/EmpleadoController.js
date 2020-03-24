'use strict'
const Empleado= use ('App/Models/Modelos/Empleado');

class EmpleadoController {


    async crearEmpleado({request, response}){

      const empleado = new Empleado()
      let obj = request.all()

      empleado.nombre = obj.nombre
      empleado.ap_paterno = obj.ap_paterno
      empleado.ap_materno = obj.ap_materno
      empleado.direccion = obj.direccion
      empleado.tel = obj.tel

    
        let data = await empleado.save()
          return response.status(201).send({message: "Empleado creado con exito"})
       

    }

    async delete({params, response}){
      const id = params.id
      const empleado = await Empleado.findOrFail(id)

      if(empleado.delete())
          return response.json({'respuesta': 'Empleado eliminada'});
      return response.json(null,422);
  }

  async update( {params, request, response}) {

      const id = params.id
      const {nombre, ap_paterno, ap_materno, direccion, tel} = request.all()
      const empleado = await Empleado.findOrFail(id)

      
      empleado.nombre = nombre
      empleado.ap_paterno = ap_paterno
      empleado.ap_materno = ap_materno
      empleado.direccion = direccion
      empleado.tel = tel

      await empleado.save()
      return response.json({'respuesta': 'Empleado actualizada'});
  }

    async index({response}){
      const  data = await Empleado.all()

      return response.status(200).json(data)
    }
}

module.exports = EmpleadoController
