import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

import { BookService } from './book.service';
import { Book } from './book.entity';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bookService.findOne(id);
  }

  @Post()
  create(@Body() bookData: Partial<Book>) {
    return this.bookService.create(bookData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() bookData: Partial<Book>) {
    return this.bookService.update(id, bookData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.bookService.remove(id);
  }
}
