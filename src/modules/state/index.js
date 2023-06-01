const router = require('express').Router()
const {GET, POST} = require('./controller')


router.route('/orders')
.get(GET)

router.route('/orders')
.post(POST)

module.exports = router
