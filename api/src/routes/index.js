const { Router } = require('express');
const axios = require('axios');
// const Country = require('../models/Country');
// const Activities = require('../models/Activities');
const { Country, Activities } = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


const getApiInfo = async () => {
// Llamo a la API y retorno la información.
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    const apiData = await apiUrl.data.map((pais) => {
        return {
            name: pais.name.common,
            id: pais.cca3,
            capital: pais.capital,
            subregion: pais.subregion,
            area: pais.area,
            population: pais.population,
            continent: pais.continents[0],
            img: pais.flags.map(img => img),
            flag: pais.flags[1]
        }
    });

    const guardar = () => {
// Guardo la información retornada y la guardo en la base de datos.
        apiData.map(el => {
            Country.findOrCreate({
                where: {
                    name: el.name,
                    id: el.id
                },
                defaults: {
                    continent: el.continent,
                    flag: el.flag,
                    capital: el.capital,
                    subregion: el.subregion,
                    area: el.area,
                    population: el.population
                }
            }).catch((err) => { console.log(err) })
        })
    }

    guardar()

    return apiData
};





const getDbInfo = () => {
    // llamo a todo el modelo Country incluyendo el nombre y id de modelo Activities y retorno.
    getApiInfo()// Ejecuto la función.
    const aux = Country.findAll({
        include: {
            model: Activities,
            attributes: ['name', 'difficulty', 'timeLapse', 'seasson'],
            through: {
                attributes: []
            }
        }
    })



    return aux


};



//////////// RUTAS ////////////





router.get('/countries', async (req, res) => {
    const name = req.query.name;
    const allCountry = await getDbInfo();

    if (name) {
        let countryName = await allCountry.filter(paises => paises.name.toLowerCase().includes(name.toLowerCase()))
        countryName.length ?
            res.status(200).send(countryName) :
            res.status(200).send(allCountry)
    } else {
        res.status(200).send(allCountry)
    }
});







router.get('/countries/:id', async (req, res) => {
    let id = req.params.id
    const allCountries = await getDbInfo();

    if (id) {
        // const countriesFilter = allCountries.filter((p) => { p.id == id })
        const countriesFilter = await allCountries.filter((p) => p.id === id)

        countriesFilter.length ?
            res.status(200).send(countriesFilter) :
            res.status(404).send("I´m sorry :P")
    } else {
        res.send(allCountries)
    }
})


router.post('/activity', async (req, res) => {

    const { difficulty, name, timeLapse, seasson, idCountries } = req.body

    if (name, difficulty, timeLapse, seasson, idCountries) {
        let toAdd = await Activities.create({
            name,
            difficulty,
            timeLapse,
            seasson,
            idCountries
        })


        const countries = await Country.findAll({
            where: {
                id: idCountries
            }
        })

        toAdd.addCountries(countries)




        res.status(200).send('Se agrego satisfactoriamentes!')
    } else {
        res.status(404).send('Algo fallo')
    }

})




router.get('/activities', async (req, res) => { 

    const actividadesCreadas = await Activities.findAll()
   



    res.send(actividadesCreadas)
})









module.exports = router;
