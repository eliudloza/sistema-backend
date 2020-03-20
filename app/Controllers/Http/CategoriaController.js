'use strict'
const Cate= use ('App/Models/Modelos/Categoria');

class CategoriaController {

     async crearCategoria({request, response}) {
        const categoria = new Cate()
        const {nombre, descripcion} = request.all()

        categoria.nombre = nombre
        categoria.descripcion = descripcion

        await categoria.save()
        return response.send("Categoria creada correctamente")
    }

    async delete({params, response}){
        const id = params.id
        const categoria = await Cate.findOrFail(id)

        if(categoria.delete())
            return response().json({'respuesta': 'Categoria eliminada'});
        return response().json(null,422);
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
