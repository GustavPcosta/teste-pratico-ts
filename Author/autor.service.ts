import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';
import { Book } from '../Book/book.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author) private authorRepo: Repository<Author>,
    @InjectRepository(Book) private bookRepo: Repository<Book>,
  ) {}

  findAll() {
    return this.authorRepo.find({ relations: ['books'] });
  }

  findOne(id: number) {
    return this.authorRepo.findOne({
      where: { id },
      relations: ['books'],
    });
  }

  create(authorData: Partial<Author>) {
    const author = this.authorRepo.create(authorData);
    return this.authorRepo.save(author);
  }

  update(id: number, authorData: Partial<Author>) {
    return this.authorRepo.save({ ...authorData, id });
  }

  async remove(id: number) {
    const author = await this.findOne(id);
    return this.authorRepo.remove(author);
  }
}

