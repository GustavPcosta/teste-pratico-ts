import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import{Author} from '../Author/author.entity'

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'date' })
  publicationDate: Date;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;
}
