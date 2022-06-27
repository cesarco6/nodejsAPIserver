import {Sequelize} from 'sequelize'

const db = new Sequelize('database_app', 'root', 'kache123', {
    host: '35.226.42.111',
    dialect: 'mysql',
    port: 3306
})

export default db