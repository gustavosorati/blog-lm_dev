import { Router } from 'express';
import { addPost, deletePost, getPost, getPosts, updatePost } from '../controllers/post.js';


const route = Router();

route.get('/', getPosts);
route.get('/:id', getPost);

route.post('/', addPost);
route.delete('/:id', deletePost);
route.put('/:id', updatePost);

export { route as postRoutes }