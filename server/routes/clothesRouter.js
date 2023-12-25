const Router = require('express');
const router = new Router();
const clothesController = require('../controllers/clothesController')

router.post('/', clothesController.create);
router.get('/', clothesController.getAll);
router.get('/:id', clothesController.getOne);


module.exports = router;