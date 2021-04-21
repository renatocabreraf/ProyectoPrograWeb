const hotwheelsRouters = require("../routers/hotwheels.routers");

var collectors = {
    collector1: {
        firstname: "Renato",
        lastname: "Cabrera",
        age: 22,
        id: 1
    },
    collector2: {
        firstname: "Juan",
        lastname: "Cena",
        age: 42,
        id: 2
    },
    collector3: {
        firstname: "Helio",
        lastname: "Carbono",
        age: 32,
        id: 3
    },
    collector4: {
        firstname: "Dominic",
        lastname: "Toretto",
        age: 50,
        id: 4
    }

}

exports.create = function(req, res){
    var newCollector = req.body;
    collectors["hotwheels" + newCollector.id] = newCollector;
    console.log("--->After Post, collectors: \n" + JSON.stringify(collectors, null, 4));
    res.end("Code 201: Post Succesfully: \n" + JSON.stringify(newCollector, null, 4));
};

exports.findAll = function(req, res){
    if(collectors["hotwheels" + id] !=null){
        console.log("--->Find All: \n" + JSON.stringify(collectors, null, 4));
        res.end("All Collectors: \n" + JSON.stringify(collectors, null, 4));
    } else if(collectors["hotwheels" + id] ==null){
        res.end("Code 200: Dont Exist Collector ID: \n" + JSON.stringify(updatedCollector, null, 4));
    } else{
        res.end("Code 404: Collector didnt Exist: \n" + JSON.stringify(updatedCollector, null, 4));
    }
};

exports.findOne = function(req, res){
    var hotwheels = collectors["hotwheels" + req.params.id];
    console.log("--->Find collector: \n" + JSON.stringify(hotwheels, null, 4));
    res.end("Find a Collector: \n" + JSON.stringify(hotwheels, null, 4));
};

exports.update = function(req, res){
    var id = parseInt(req.params.id);
    var updatedCollector = req.body;
    if(collectors["hotwheels" + id] !=null){
        collectors["hotwheels" + id] = updatedCollector;
        console.log("--->Update Successfully, collectors: \n" + JSON.stringify(hotwheels, null, 4));
        res.end("Code 204: Update Successfully! \n" + JSON.stringify(updatedCollector, null, 4));
    }else{
        res.end("Code 404: Collector didnt Exist: \n" + JSON.stringify(updatedCollector, null, 4));
    }
};

exports.delete = function (req, res){
    var deleteCollector = hotwheels["collector" + req.params.id];
    if(collectors["hotwheels" + id] !=null){
    delete collectors["hotwheels" + req.params.id];
    console.log("--->After delete, hotwheels list: \n" + JSON.stringify(hotwheels, null, 4));
    res.end("Code 204: Delete Successfully! \n" + JSON.stringify(deleteCollector, null, 4));
    }else{
        res.end("Code 404: Collector didnt Exist: \n" + JSON.stringify(updatedCollector, null, 4));
    }
};