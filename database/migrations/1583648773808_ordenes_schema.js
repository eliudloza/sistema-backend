'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdenesSchema extends Schema {
  up () {
    this.create('ordenes', (table) => {
      table.increments('id')
      table.date('fecha')
      table.integer('empleado').unsigned().notNullable().references('id').inTable('empleados')
      table.integer('cliente').unsigned().notNullable().references('id').inTable('clientes')
      table.timestamps()
    })
  }

  down () {
    this.drop('ordenes')
  }
}

module.exports = OrdenesSchema
