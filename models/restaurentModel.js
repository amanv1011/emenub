const mongoose = require('mongoose');


const dishSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    imageUrl : {
        type : String,
        required : true,
    }
})


const socialSchema = new mongoose.Schema({
    name:{
        type:String,

    },
    linkToPage:{
        type:String
    }


})

const restaurantSchema = new mongoose.Schema({
    restroname:{
        type: 'string',
        required: true,
        maxLength: 25
    },
    restro_add:{
        type: 'string',
        required: true,
        maxLength: 25
    },
    open_Time:{
        type: 'string',
        required: true
    },
    close_time:{
        type: 'string',
        required: true
    },
    gst:{
        type: 'Number',
        required: true
    },
    socail_links:[socialSchema,socialSchema,socialSchema]
    ,
    location :{
        type:String,
        required:true
    } ,
    cousine : {
        starter : [dishSchema],
        mainCourse : [dishSchema],
        dessert : [dishSchema]
    }

})




// {
//     "restroname": "Veer Ji chaap",
//     "restro_add": "RDC Ghaziabad",
//     "open_Time": "10:00 am",
//     "close_time": "01:00 am",
//     "gst": 123456789,
//     "socail_links": [
//         {
//             "name": "Insta",
//             "linkToPage": "linkToPage"
//         },
//         {
//             "name": "facebook",
//             "linkToPage": "linkToPage"
//         },
//         {
//             "name": "Youtube",
//             "linkToPage": "linkToPage"
//         }
//     ],
//     "location": "linkToLocation",
//     "cousine": {
//         "starter": {
//             "name": "momo",
//             "price": 100,
//             "imageUrl": "Dish image Url"
//         },
//         "mainCourse": {
//             "name": "momo",
//             "price": 100,
//             "imageUrl": "Dish image Url"
//         },
//         "dessert": {
//             "starter": {
//                 "name": "momo",
//                 "price": 100,
//                 "imageUrl": "Dish image Url"
//             }
//         }
//     }
// }



const Restro =  new mongoose.model('Restaurant', restaurantSchema);
module.exports = Restro