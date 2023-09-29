const express= require('express');
const router = express.Router();
const {one,two,three} = require('../middlewares/middleware')
const Homecontrollers = require('../controllers/homeControllers')





router.route('^/$|/index(.html)?').get(Homecontrollers.index).post(Homecontrollers.index)


router.get('/about(.html)?',Homecontrollers.about)


router.get('/old(.html)?',Homecontrollers.old)


router.get('/chain(.html)?', [one, two, three], Homecontrollers.chain )


router.all("*", Homecontrollers.unNameRoutes)



module.exports= router