import { Request, Response } from 'express';
import * as DogService from '../services/dog';

export const getAll = async(req: Request, res: Response) => {
    try{
        const allDogs = await DogService.getAll();
        res.status(200).json({ status:200, data: allDogs});
    }catch(error){
        res.status(400).json({ status:400, message: error});
        throw(error);
    }
}

export const create = async(req: Request, res: Response) => {
    try{
        const createDogData = req.body;
        const creadDogData = await DogService.create(createDogData);
        res.status(200).json({ status:200, data: creadDogData});
    }catch(error){
        res.status(400).json({ status:400, message: error});
        throw(error);
    }
}

export const getById = async(req: Request, res: Response) => {
    try{
        const id = +req.params.id;
        const dog = await DogService.getById(id);
        res.status(200).json({ status:200, data: dog});
    }catch(error){
        res.status(400).json({ status:400, message: error});
        throw(error);
    }
}

export const update = async(req: Request, res: Response) => {
    try{
        const updateDogData = { id:req.params.id, ...req.body};
        const updatedDogData = await DogService.update(updateDogData);
        res.status(200).json({ status:200, data: updatedDogData});
    }catch(error){
        res.status(400).json({ status:400, message: error});
        throw(error);
    }
}

export const destroy = async(req: Request, res: Response) => {
    try{
        const id = +req.params.id;
        const deletedDogData = await DogService.destroy(id);
        res.status(200).json({ status:200, data: deletedDogData});
    }catch(error){
        res.status(400).json({ status:400, message: error});
        throw(error);
    }
}

export const getDogsByOwnerId = async(req: Request, res: Response) => {
    try{
        const id = +req.params.id;
        const dogs = await DogService.getDogsByOwnerId(id);
        res.status(200).json({ status:200, data: dogs});
    }catch(error){
        res.status(400).json({ status:400, message: error});
        throw(error);
    }
}