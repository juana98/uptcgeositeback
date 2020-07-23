import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './api/post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './api/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), 
    PostModule, 
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
