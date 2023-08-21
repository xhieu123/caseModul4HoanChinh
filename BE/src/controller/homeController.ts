import homeService from "../service/homeService";

class HomeController{
    private homeService;
    constructor() {
        this.homeService = homeService;
    }
    add = async (req, res) => {
        let data = await this.homeService.add(req.body);
        res.json(data)
    }
    update = async (req, res) => {
        let data = await this.homeService.update(req.params.id, req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await this.homeService.delete(req.params.id);
        res.json(data)
    }
    findByName = async (req, res) => {
        let data = await this.homeService.findByName(req.query.name);
        res.json(data)
    }
    findById = async (req, res) => {
        let data = await this.homeService.findById(req.params.id);
        res.json(data)
    }
    getAll = async (req,res)=>{
        let list = await this.homeService.findAll()
        res.json(list)
    }
    findByAddress = async (req,res)=>{
        let data = await this.homeService.findByAddress(req.query.address);
        res.json(data)
    }
    findByPrice = async (req,res)=>{
        let {minPrice, maxPrice} = req.query
        console.log({minPrice, maxPrice})
        let data = await this.homeService.findByPrice(Number(minPrice), Number(maxPrice))
        res.json(data)
    }
    findByAcreage = async (req,res)=>{
        let {minAcreage,maxAcreage} = req.query
        let data = await this.homeService.findByAcreage(Number(minAcreage), Number(maxAcreage))
        res.json(data)
    }
    sortPrice = async (req,res)=>{
        let list = await this.homeService.sortPrice(req.query.price)
        res.json(list)
    }
    findAll = async (req,res)=>{
        let list
        if (req.query.name){
            list = await this.homeService.findByName(req.query.name)
        }else if (req.query.address){
            list = await this.homeService.findByAddress(req.query.address)
        }else if(req.query.minPrice && req.query.maxPrice){
            list = await this.homeService.findByPrice(Number(req.query.minPrice), Number(req.query.maxPrice))
        }else if(req.query.minAcreage && req.query.maxAcreage){
            list = await this.homeService.findByAcreage(Number(req.query.minAcreage), Number(req.query.maxAcreage))
        }else if (req.query.price){
            list = await this.homeService.sortPrice(req.query.price)
        }else {
            list = await this.homeService.findAll()
        }
        res.json(list)
    }

}
export default new HomeController();