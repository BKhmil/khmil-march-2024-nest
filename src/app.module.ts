import { Module } from '@nestjs/common';

import { ArticlesModule } from './articles/articles.module';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, ArticlesModule, CommentsModule],
})
export class AppModule {}
