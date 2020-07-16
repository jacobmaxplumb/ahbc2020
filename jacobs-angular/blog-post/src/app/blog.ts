import { Post } from './post';

export interface Blog {
  title: string;
  language: string;
  posts: Post[];
}
