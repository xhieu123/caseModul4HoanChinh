import {Service} from "./Service";
import {Home} from "../entity/Home";
import {AppDataSource} from "../data-source";
import {Between, Like} from "typeorm";

class HomeService implements Service<Home> {
    private repository = AppDataSource.getRepository(Home)
    add = async (data) => {
        return await this.repository.save(data)
    }

    delete = async (id) => {
        return await this.repository.delete(id);
    }

    findAll = async () => {
        return await this.repository.find({
            relations: {
                user: true
            }
        });
    }

    findById = async (id) => {
        return await this.repository.find({
            where: {
                id: id
            }
        })
    }

    update = async (id, data) => {
        return await this.repository.update(id, data);
    }
    findByAddress = async (add) => {
        return await this.repository.find({
            where: {
                address: Like(`%${add}%`)
            }
        })
    }
    // sortPriceASC = async (price) => {
    //     let list = await this.repository.find({
    //         order: {price: "asc"}
    //     })
    //     return list
    // }
    javascript
    sortPrice = async (sortOrder) => {
        let list;
        if (sortOrder === "ASC") {
            list = await this.repository.find({
                order: { price: "asc" }
            });
        } else if (sortOrder === "DESC") {
            list = await this.repository.find({
                order: { price: "desc" }
            });
        } else {
            // Xử lý khi sortOrder không hợp lệ, ví dụ: mặc định sắp xếp theo giá tăng dần
            list = await this.repository.find({
                order: { price: "asc" }
            });
        }
        return list;
    };
    // sortPriceDESC = async (price) => {
    //     let list = await this.repository.find({
    //         order: {price: "desc"}
    //     })
    //     return list
    // }
    findByPrice = async (minPrice:number,maxPrice:number)=>{
        return await this.repository.find({
            where :{
                price: Between(minPrice,maxPrice)
            }
        })
    }
    // findByPrice = async (minPrice: number, maxPrice: number) => {
    //     return this.repository.createQueryBuilder("home")
    //         .where("Home.price >= :minPrice", { minPrice: minPrice })
    //         .andWhere("Home.price <= :maxPrice", { maxPrice: maxPrice })
    //         .getMany();
    // }
    findByAcreage = async (minAcreage:number,maxAcreage:number)=>{
        return await this.repository.find({
            where :{
                acreage: Between(minAcreage,maxAcreage)
            }
        })
    }
    findByName = async (name) => {
        return await this.repository.find({
            where: {
                name: Like(`%${name}%`)
            }
        })
    }
}

export default new HomeService();