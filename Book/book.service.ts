import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private bookRepo: Repository<Book>,
  ) {}

  findAll() {
    return this.bookRepo.find({ relations: ['author'] });
  }

  findOne(id: number) {
    return this.bookRepo.findOne({
      where: { id },
      relations: ['author'],
    });
  }

  create(bookData: Partial<Book>) {
    const book = this.bookRepo.create(bookData);
    return this.bookRepo.save(book);
  }

  update(id: number, bookData: Partial<Book>) {
    return this.bookRepo.save({ ...bookData, id });
  }

  async remove(id: number) {
    const book = await this.findOne(id);
    return this.bookRepo.remove(book);
  }
}

