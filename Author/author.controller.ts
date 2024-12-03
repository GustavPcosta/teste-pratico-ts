import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { AuthorService } from './autor.service';
import { Author } from './author.entity';  

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.authorService.findOne(id);
  }

  @Post()
  create(@Body() authorData: Partial<Author>) {
    return this.authorService.create(authorData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() authorData: Partial<Author>) {
    return this.authorService.update(id, authorData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.authorService.remove(id);
  }
}
