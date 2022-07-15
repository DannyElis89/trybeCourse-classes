const creatorModel = require('../models/creatorsModel');
const { isAfter, parseISO } = require('date-fns');

const getCreators = (id = null) => {
    if (id) {
        return creatorModel.getById(id); // acessa camada de model para trazer o character do db pelo ID
    }
    return creatorModel.getAll(); // acessa camada de model para trazer os characters do db
}

const getAllTables = () => {
    return creatorModel.getAllTables(); // acessa camada de model para trazer os characters do db
}

const createCreators = async ({ name, birthDate, idCharacter }) => {
    //compara se a data a ser cadastrada é superior a data atual
    const compareDate = isAfter(
        parseISO(birthDate),
        Date.now()
    )
    //console.log(compareDate)
    if(compareDate) throw Error("Data de Nascimento não pode ser superior a atual!");

    const { id } = await creatorModel.add(name, birthDate, idCharacter);
    return {
        id,
        name,
        birthDate,
        idCharacter
    }
}

const updateCreator = (id, { name, birthDate, idCharacter }) => {
    return creatorModel.update(id, name, birthDate, idCharacter);
}

const deleteCreator = (id) => {
    return creatorModel.exclude(id);
}


module.exports = {
    getCreators,
    getAllTables,
    createCreators,
    updateCreator,
    deleteCreator
}
