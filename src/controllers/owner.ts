import { Request, Response } from 'express';
import * as OwnerService from '../services/owner';

export const getAll = async(req: Request, res: Response) => {
    try{
        const allDogs = await OwnerService.getAll();
        res.status(200).json({ status:200, data: allDogs});
    }catch(error){
        res.status(400).json({ status:400, message: error});
        throw(error);
    }
}

export const create = async(req: Request, res: Response) => {
    try{
        const createOwnerData = req.body;
        const creadOwnerData = await OwnerService.create(createOwnerData);
        res.status(200).json({ status:200, data: creadOwnerData});
    }catch(error){
        res.status(400).json({ status:400, message: error});
        throw(error);
    }
}

export const getById = async(req: Request, res: Response) => {
    try{
        const id = +req.params.id;
        const dog = await OwnerService.getById(id);
        res.status(200).json({ status:200, data: dog});
    }catch(error){
        res.status(400).json({ status:400, message: error});
        throw(error);
    }
}

export const update = async(req: Request, res: Response) => {
    try{
        const updateOwnerData = { id:req.params.id, ...req.body};
        const updatedOwnerData = await OwnerService.update(updateOwnerData);
        res.status(200).json({ status:200, data: updatedOwnerData});
    }catch(error){
        res.status(400).json({ status:400, message: error});
        throw(error);
    }
}

export const destroy = async(req: Request, res: Response) => {
    try{
        const id = +req.params.id;
        const deletedOwnerData = await OwnerService.destroy(id);
        res.status(200).json({ status:200, data: deletedOwnerData});
    }catch(error){
        res.status(400).json({ status:400, message: error});
        throw(error);
    }
}