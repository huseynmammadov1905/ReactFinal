const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const HOST = 5013
const app = express()

app.use(cors())
app.use(bodyParser.json())

let goods = [
    {id:1, "product_name": "Kişi köynəyi", "product_description": "Mavi rəngdə, 100% pamuk", "product_price": 50,product_image:"https://www.alexandra.co.uk/media/catalog/product/n/u/nu126_bk_front.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700" },
    { "product_name": "Qadın bluzası", "product_description": "Dəri detallı, qara rəngdə", "product_price": 60 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Kişi pantolonu", "product_description": "Qəhvəyi rəng, kənar cebi", "product_price": 75 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Qadın eteyi", "product_description": "Qırmızı rəng, mini", "product_price": 40 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Kişi dəsmalı", "product_description": "Nəqşdar dizayn", "product_price": 20 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Qadın çantası", "product_description": "Əlgötürən, dəri", "product_price": 90 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Kişi botları", "product_description": "Qış üçün, suya davamlı", "product_price": 120 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Qadın ayaqqabıları", "product_description": "Yüksək tapan, lacivərt", "product_price": 85 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Kişi papağı", "product_description": "Qara rəngdə, dəri", "product_price": 45 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Qadın şalvarı", "product_description": "Göy rəngdə, kaşmir", "product_price": 70 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Kişi palto", "product_description": "Süət dəri, qara rəngdə", "product_price": 250 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Qadın jaketi", "product_description": "Uzun, qaşqır", "product_price": 200 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Kişi kəməri", "product_description": "Dəri, metal tokalı", "product_price": 40 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Qadın badlonu", "product_description": "Retro stil, qızıl rəngdə", "product_price": 180 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Kişi şortu", "product_description": "Spor stil, elastik", "product_price": 60 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Qadın maykası", "product_description": "Boyalı nəqş, pamuklu", "product_price": 45 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Kişi saatı", "product_description": "Qara rəngdə, analog", "product_price": 150 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Qadın bəzək", "product_description": "Qızıl, komplekt", "product_price": 220 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Kişi atkısı", "product_description": "Xəzəl rəng, uzun", "product_price": 35 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Qadın bantı", "product_description": "Metal detallı, elastik", "product_price": 50 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Kişi kostyumu", "product_description": "İki parçalı, qara rəngdə", "product_price": 320 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Qadın kombinezonu", "product_description": "Yaz üçün, açıq rəng", "product_price": 150 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Kişi sviteri", "product_description": "Düz rəng, yüngül", "product_price": 70 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Qadın ziyafət geyimi", "product_description": "Düzənşən, yaz üçün", "product_price": 95 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Kişi sport formaları", "product_description": "Spandex, idman üçün", "product_price": 55 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Qadın bikini", "product_description": "Tropik nəqş, elastik", "product_price": 45 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Kişi çantası", "product_description": "Dizayner, əsas bölməsi", "product_price": 100 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Qadın ətri", "product_description": "Gül ətri, uzunömürlü", "product_price": 80 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Kişi şalı", "product_description": "Səliqəli, çoxrəngli", "product_price": 25 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"},
    { "product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65 ,"product_image":"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"}
]

let myBag = []

let i = 1
goods = goods.map((item) => {
    let obj = {...item, id: i++}
    return obj
})


app.get('/goods', (req, res) => {
    res.json(goods)
})

app.get('/my-bag', (req, res) => {
    res.json(myBag)
})

app.post('/add-goods', (req, res) => {
    let obj = req.body;
    obj = {...obj,id:goods.length+1};
    goods.push(obj)
    res.send(obj)
})

app.delete('/delete-mybag/:id', (req, res) => {
    let id = parseInt(req.params.id)
    myBag = myBag.filter((item) => id !== item.id)
    res.send(`Element with ${id} was deleted from bag`)
})

app.post('/add-mybag',(req,res)=>{
    let obj = req.body;
    myBag.push(obj)
    res.send(obj)

})



app.delete('/empty-mybag',(req,res)=>{
    myBag = []
})

app.delete('/delete-goods/:id', (req, res) => {
    let id = parseInt(req.params.id)
    goods = goods.filter((item) => id !== item.id)
    res.send(`Element with id ${id} was deleted from goods`)
})

app.put('/change-goods/:id', (req, res) => {
    let id = parseInt(req.params.id)
    let index = goods.findIndex((item) => id === item.id)
    goods[index] = req.body
    res.send(`Element with id ${id} was changed`)
})

app.get("/search-goods/:search",(req,res)=>{
    let searchGood = req.params.search;
    res.json(goods.filter((item)=>item.product_name.includes(searchGood)))
})


app.listen(HOST, () => {
    console.log(HOST + " OK")
})



