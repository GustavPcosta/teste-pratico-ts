import { Module } from '@nestjs/common';
import { AuthorModule } from '../Author/author.module'; 
import { BookModule } from '../Book/book.module';  

@Module({
  imports: [AuthorModule, BookModule],  
  controllers: [],
  providers: [],
})
export class AppModule {}
