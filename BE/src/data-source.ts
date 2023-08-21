import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "123456",
    synchronize: false,
    database: "c03_module4_thuenha",
    entities: ["dist/src/entity/*.js"]
})
