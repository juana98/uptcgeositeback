import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostEntity } from './post.entity';

@Controller('posts')
export class PostController {

constructor(
    private postService: PostService
){}

  @Get()
  findAll(): Promise<PostEntity[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @Post()
  save(@Body() post:PostEntity){
    return this.postService.save(post);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id:string,@Body() post:PostEntity){
    return this.postService.update(id,post);  
  }
}