import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Book } from '../Book/book.entity';
@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'date' })
  birthDate: Date;

  @OneToMany(() => Book, (book) => book.author, { cascade: true })
  books: Book[];
}
