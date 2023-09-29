
const path = require('path');
const fsPromise= require('fs').promises;


class Homecontrollers{

    static async  index(req,res){
        if(req.method === 'GET'){
            res.status(200).sendFile(path.join(__dirname, "../views", "index.html"))
        }else{
            const {name,age} = req.body
            const data= await fsPromise.readFile(path.join(__dirname, "../db", "data.json"))
            let parsedData= JSON.parse(data.toString('utf-8'));
            parsedData.push({name: name.trim(), age: Number(age.trim())});
    
            const jsonData= JSON.stringify(parsedData);
            await fsPromise.writeFile(path.join(__dirname, "../db", "data.json"), jsonData);
            res.status(301).redirect("/");
           
        }
        
    }

    static about(req,res){
        res.status(200).sendFile(path.join(__dirname, "../views", "about.html"));
    }

    static old(req,res){
        res.status(301).redirect( "/index.html");
    }

    static chain(req, res){
        res.status(200).send('chain finished')
    }

    static unNameRoutes(req, res){
        res.status(404).sendFile(path.join(__dirname, "../views", "404.html"))
    }
}



module.exports= Homecontrollers