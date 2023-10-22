export interface CreateOwnerData{
    name: string;
}

export interface UpdateOwnerData extends CreateOwnerData{
    id: number;
}