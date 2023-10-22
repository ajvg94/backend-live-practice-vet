import {Table, Column, Model, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import Owner from './owner'

@Table({
  tableName:'Dogs',
  modelName: 'Dog',
  timestamps: true
})
export default class Dog extends Model {
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

  @Column({
    type: DataType.TEXT,
    allowNull: true
  })
  breed?: string;

  @Column({
    type: DataType.INTEGER
  })
  age!: number;

  
  @ForeignKey(() => Owner)
  @Column
  ownerId!: number;

  @BelongsTo(() => Owner, 'ownerId')
  owner!: Owner;
}