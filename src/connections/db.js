import { DataSource } from "typeorm";
import config from './../config/config.js';
import { createDatabase } from 'typeorm-extension';

const createDataSource = async (dbConfig) => {
    let options = {
        name: "master",
        type: "mysql",
        host: dbConfig.host,
        port: dbConfig.port,
        username: dbConfig.user,
        password: dbConfig.pass,
        database: dbConfig.db,
        synchronize: true,
        logging: config.env !== 'production' ? true : false,
        entities: [
            'src/models/*.model.js',
        ],
        subscribers: [],
        migrations: [],
        extra: {
            connectionLimit: 10
        }
    };
    await createDatabase({options, ifNotExist: true});
    return new DataSource(options).initialize();
};

let AppDataSource;;

try {
    AppDataSource = await createDataSource(config['db_config']);
} catch (error) {
    console.error(error);
    throw new Error(error);
}
const getDataStore = () => {
    return AppDataSource;
}
export default {
    getDataStore
}
