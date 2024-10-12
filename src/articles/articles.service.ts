import { Injectable } from '@nestjs/common';

import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticlesService {
  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article';
  }

  findAll() {
    return `This action returns all articles`;
  }
}
