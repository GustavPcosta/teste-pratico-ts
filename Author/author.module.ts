import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorService } from './autor.service';
import { AuthorController } from './author.controller';
import { Author } from './author.entity';
import { Book } from '../Book/book.entity'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Author, Book]), 
  ],
  providers: [AuthorService],
  controllers: [AuthorController],
})
export class AuthorModule {}
