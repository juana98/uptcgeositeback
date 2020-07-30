import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;
  
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  rol: string;

  @Column()
  email: string;

  @Column()
  isActive: boolean;
  


}