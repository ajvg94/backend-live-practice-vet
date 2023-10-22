export interface CreateDogData{
    name: string;
    breed?: string;
    age: number;
    ownerId: number
}

export interface UpdateDogData extends CreateDogData{
    id: number;
}