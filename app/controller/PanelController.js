module.exports = class PanelController {

    constructor(User){
        this.User = User;
    }


    index(req, res){
        this.User.findOne().then(user => {
            res.send(user.get('firstname'));
        });
    }

    create(req, res){
        return res.send("we are in the middleware");
    }
}
