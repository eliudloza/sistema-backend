'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Orden extends Model {
    
    static get connection () {
        return 'mysql'
      }
}

module.exports = Orden
