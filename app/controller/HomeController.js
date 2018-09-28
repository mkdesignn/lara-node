module.exports = class HomeController {

    constructor(){

    }

    index(req, res){

    }

    create(req, res){
        return res.send("we are in the middleware");
    }

}
