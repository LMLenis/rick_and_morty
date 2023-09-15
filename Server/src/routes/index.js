const {login} = require('../controllers/login')
const { getCharById } = require('../controllers/getCharById')
const { postFav, deleteFav } = require('../controllers/handleFavorites')
const {Router} = require('express')

const router = Router();

//cuando usamos el id, res trae varias propiedades entre ellos params
router.get('/character/:id', (req, res)=> {
    getCharById(req,res);
})

router.get('/login', (req, res) => {
    login(req, res);
})

router.post('/fav', (req, res) =>{
    postFav(req, res);
})

//si la ruta tiene :id aparecen los params
router.delete('/fav/:id', (req, res) =>{
    deleteFav(req, res)
})

module.exports = router;