import express from 'express'
import axios from 'axios'

const cheerio = require('cheerio')

const router = express.Router()

router.get('/shoes/:id', async (req, res) => {
  const shoes = []
  const { id } = req.params
  switch (id) {
    case ('1'):
      try {
        const slamdunk = 'https://slamdunk.shop/shop/muzhskoe/krossovki-mens/asics-gel-lyte-3-borealis-pack/'
        let response = await axios.get(slamdunk)
        let $ = cheerio.load(response.data)
        let value = $('.top-card__title ,  .top-card__price').text()
        const cleanedString2 = value.replace(/\n.*/g, '');
        shoes.push(cleanedString2)
        const streeLook = 'https://street-look.ru/sportivnaya-obuv/asics/gel-lyte-3/asics-gel-lyte-3-bezhevye-s-bordovym'
        response = await axios.get(streeLook)
        $ = cheerio.load(response.data)
        value = $('.breadcrumbs__title , .sku__price-ins').text()
        shoes.push(value)
        const mmawear = 'https://mmawear.ru/krossovki/krossovki-mujskie/krossovki-asics-gel-lyte-iii-og-white-orange'
        response = await axios.get(mmawear)
        $ = cheerio.load(response.data)
        value = $('.product-header , .oct-price-new').text()
        shoes.push(value)
        const shopozz = 'https://shopozz.ru/items/115765812200-asics-mens-gel-lyte-iii-og---sportstyle-shoes-1201a685'
        response = await axios.get(shopozz)
        $ = cheerio.load(response.data)
        value = $('.h1 , .price_rouble').text()
        const cleanedString = value.replace(/\s+/g, ' ').trim();
        shoes.push(cleanedString)
        const basketshop = 'https://www.basketshop.ru/catalog/item/asics-asiks-krossovki-gel-lyte-iii-og-1201a257-100/'
        response = await axios.get(basketshop)
        $ = cheerio.load(response.data)
        value = $('.product__title , .product__price-value').text()
        const cleanedString1 = value.replace(/\s+/g, ' ').trim();
        shoes.push(cleanedString1)
        const traektoria = 'https://www.traektoria.ru/product/1542220_krossovki-asics-gel-lyte-iii-og/?utm_source=yandex&utm_medium=cpc&utm_campaign=Rus_Tovarnaya_Simple&utm_term=&yclid=3062054873315672063'
        response = await axios.get(traektoria)
        $ = cheerio.load(response.data)
        value = $('h1, .price').text()
        const regex = /\S.*\S/g;
        const matches = value.match(regex);
        matches.splice(-2)
        value = matches.join(' ')
        shoes.push(value)

        res.json(shoes)
      } catch (err) {
        console.error(`${err} скраппер ручка тупит`)
      }
      break;
    default:
      res.sendStatus(500)
  }
}


)


export default router