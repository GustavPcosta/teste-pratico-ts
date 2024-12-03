import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './Author/author.entity';
import { Book } from './Book/book.entity';
import { AuthorModule } from './Author/author.module';
import { BookModule } from './Book/book.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      
      database: 'livraria',
      entities: [Author, Book],
      synchronize: true,
    }),
    AuthorModule,
    BookModule,
  ],
})
export class AppModule {}
