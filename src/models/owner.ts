import {Table, Column, Model, DataType, HasMany} from 'sequelize-typescript';
import Dog from './dog';

@Table({
  tableName:'Owners',
  modelName: 'Owner',
  timestamps: true,
})
export default class Owner extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  id!: number;

  @Column({
    type: DataType.TEXT
  })
  name!: string;

  @HasMany(() => Dog, 'ownerId')
  dogs?: Dog[];
}