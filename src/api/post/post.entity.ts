import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Post {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  title: string;

  @Column()
  filename: string;

  @Column()
  category: string;

  @Column()
  imageBannerUrl: string;

  @Column()
  video: string;

  @Column()
  isPublished: boolean;

}