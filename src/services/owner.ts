import Owner from '../models/owner';
import { CreateOwnerData, UpdateOwnerData } from '../types/owner';

export const getAll = async() => {
    try{
        const allOwners: Owner[] = await Owner.findAll()
        return allOwners;
    }catch(error){
        throw(error);
    }
}

export const create = async(createOwnerData: CreateOwnerData) => {
    try{
        const createdOwner: Owner = await Owner.create({...createOwnerData});
        return createdOwner;
    }catch(error){
        throw(error);
    }
}

export const getById = async(ownerId: number) => {
    try{
        const owner = await Owner.findByPk(ownerId);
        return owner;
    }catch(error){
        throw(error);
    }
}

export const update = async(updatedOwnerData: UpdateOwnerData) => {
    try{
        const oldOwnerData = await getById(updatedOwnerData.id);
        await Owner.update(updatedOwnerData, { where: { id:updatedOwnerData.id } });
        return oldOwnerData;
    }catch(error){
        throw(error);
    }
}

export const destroy = async(id: number) => {
    try{
        const deletedOwnerData = await getById(id);
        await Owner.destroy({ where: { id: id } });
        return deletedOwnerData;
    }catch(error){
        throw(error);
    }
}