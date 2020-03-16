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

    async eliminarCategoria({request, response}){
        const categoria = new Cate.find(request.id)

        if(categoria.delete())
            return response().json(categoria,202);
        return response().json(null,422);
    }

    async actualizarCategoria({response,request}){
        const categoria = new Cate.find(request.id)
        const {nombre, descripcion} = request.all()

        categoria.nombre = nombre;
        categoria.descripcion = descripcion;

        if(categoria.save())
            return response().json(categoria,202);
        return response().json(null,422);
    }

     async index(){
        const data = new Cate.all().toArray();

        return view('categorias',['data' , data] );
    }
    async show(){
        const data = new Cate.all().toArray();
        return data;
    }

}

module.exports = CategoriaController
