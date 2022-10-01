import {Router} from 'express';
import multer from 'multer';
import { authRoutes } from './auth.js';
import { postRoutes } from './post.js';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../frontend/public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname);
  }
})

const upload = multer({ storage });

const routes = Router();

routes.post('/api/upload', upload.single('file'), function(request, response, next) {
  const file = request.file;

  response.status(200).json(file.filename)
});

routes.use('/auth', authRoutes);
routes.use('/api/posts', postRoutes);
routes.use('/', authRoutes);

export {routes};