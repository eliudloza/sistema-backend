'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpleadosSchema extends Schema {
  up () {
    this.create('empleados', (table) => {
      table.increments('id')
      table.string('nombre')
      table.string('ap_paterno')
      table.string('ap_materno')
      table.string('direccion')
      table.string('ciudad')
      table.integer('tel')
      table.timestamps()
    })
  }

  down () {
    this.drop('empleados')
  }
}

module.exports = EmpleadosSchema
