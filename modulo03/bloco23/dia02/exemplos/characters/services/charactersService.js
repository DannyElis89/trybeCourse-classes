const charactersModel = require('../models/charactersModel');
const creatorsModel = require('../models/creatorsModel');


const getAll = (id = null) => {
    if(id){
        return charactersModel.getById(id);
    }
    return charactersModel.getAll();
}

const add = async ({name, cartoon, year, creators}) => {

    const [rows] = await charactersModel.getCartoon(cartoon);
    console.log(rows)
    if (rows.length !== 0) {
        throw { status: 400, message: 'Cartoon já cadastrado no sistema!'};
    }

    const {id} = await charactersModel.add(name, cartoon, year);

    const insertedCreatorsPromise = [];
    creators.map(creator => insertedCreatorsPromise.push(creatorsModel.add(
        creator.name,
        creator.birth_date,
        id
    )));
    const insertedCreators = await Promise.all(insertedCreatorsPromise);

    return {
        id,
        name,
        cartoon,
        year,
        creators: insertedCreators
    }
}

const update = (id, name, cartoon, year) => {
    return charactersModel.update(id, name, cartoon, year);
}

const remove = (id) => {
    return charactersModel.remove(id);
}

module.exports = {
    getAll,
    add,
    update,
    remove
}
