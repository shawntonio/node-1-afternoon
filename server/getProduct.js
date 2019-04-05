const products = require('../products.json')

const getProduct = (req, res) => {
	const productRequested = products.filter(product => +req.params.id === +product.id)
	if (productRequested.length < 1) res.status(500).send('Item not in list')
	else res.status(200).send(products.filter(product => +req.params.id === +product.id))
}

module.exports = getProduct