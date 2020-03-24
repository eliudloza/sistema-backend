'use strict'
const Cate= use ('App/Models/Modelos/Categoria');

class CategoriaController {

     async crearCategoria({request, response}) {
        const categoria = new Cate()
      let obj = request.all()

      categoria.nombre = obj.nombre
      categoria.descripcion = obj.descripcion

      try {
        let data = await categoria.save()
        if(data) {
          return response.status(201).send({message: "Genero creado con exito"})
        }
      } catch(error) {
        return response.status(401)
      }
    }

    async delete({params, response}){
        const id = params.id
        const categoria = await Cate.findOrFail(id)

        await categoria.delete()
        return response.json({'respuesta': 'Categoria eliminada'});
        
    }

    async update ({response,request,params}){
        const id = params.id
        const {nombre, descripcion} = request.all()
        const categoria = await Cate.findOrFail(id)

        categoria.nombre = nombre
        categoria.descripcion = descripcion

        await categoria.save()
        return response.json({'respuesta': 'Categoria actualizada'});
        
    }

     async index({response}){
        const  data = await Cate.all()

        return response.status(200).json(data)
    }
    async show(){
        const data = new Cate.all().toArray();
        return data;
    }

}

module.exports = CategoriaController
