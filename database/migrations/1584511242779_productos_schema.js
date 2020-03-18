'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments('id')
      table.string('nombre')
      table.integer('precio')
      table.integer('cantidad')
      table.integer('categoria').unsigned().notNullable().references('id').inTable('categorias')
      table.integer('vendedor').unsigned().notNullable().references('id').inTable('vendedores')
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductosSchema
