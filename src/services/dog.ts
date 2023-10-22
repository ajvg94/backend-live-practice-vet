import Dog from '../models/dog';
import { CreateDogData, UpdateDogData } from '../types/dog';

export const getAll = async() => {
    try{
        const allDogs: Dog[] = await Dog.findAll()
        return allDogs;
    }catch(error){
        throw(error);
    }
}

export const create = async(createDogData: CreateDogData) => {
    try{
        const createdDog: Dog = await Dog.create({...createDogData});
        return createdDog;
    }catch(error){
        throw(error);
    }
}

export const getById = async(dogId: number) => {
    try{
        const dog = await Dog.findByPk(dogId);
        return dog;
    }catch(error){
        throw(error);
    }
}

export const update = async(updatedDogData: UpdateDogData) => {
    try{
        const oldDogData = await getById(updatedDogData.id);
        await Dog.update(updatedDogData, { where: { id:updatedDogData.id } });
        return oldDogData;
    }catch(error){
        throw(error);
    }
}

export const destroy = async(id: number) => {
    try{
        const deletedDogData = await getById(id);
        await Dog.destroy({ where: { id: id } });
        return deletedDogData;
    }catch(error){
        throw(error);
    }
}

export const getDogsByOwnerId = async(id: number) => {
    try{
        const allDogs: Dog[] = await Dog.findAll({where: {ownerId: id}})
        return allDogs;
    }catch(error){
        throw(error);
    }
}