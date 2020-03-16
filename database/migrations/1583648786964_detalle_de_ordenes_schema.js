'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetalleDeOrdenesSchema extends Schema {
  up () {
    this.create('detalle_de_ordenes', (table) => {
      table.increments('id')
      table.integer('precio')
      table.integer('cantidad')
      table.integer('producto').unsigned().notNullable().references('id').inTable('productos')
      table.integer('orden').unsigned().notNullable().references('id').inTable('ordenes')
      table.timestamps()
    })
  }

  down () {
    this.drop('detalle_de_ordenes')
  }
}

module.exports = DetalleDeOrdenesSchema
