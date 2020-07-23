import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {

    constructor(
        @InjectRepository(Post)
        private postsRepository: Repository<Post>,
    ) {}
    
    findAll(): Promise<Post[]> {
        return this.postsRepository.find();
    }

    findOne(id: string): Promise<Post> {
        return this.postsRepository.findOne(id);
    }

    save(post: Post): Promise<Post> {
        return this.postsRepository.save(post);
    }

    delete(id: string): Promise<DeleteResult> {
        return this.postsRepository.delete(id);
    }


}
