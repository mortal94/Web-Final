import userRoute from '../../api/user';
import postRoute from '../../api/post';
import createError from 'http-errors';
import {join} from 'fs';

export default app => {
  app.use('/api/users', userRoute);
  app.use('/api/posts', postRoute);

    // All undefined api routes should return a 404
  app.route('/:url(api/*)')
        .get((req, res, next) => {
          next(createError(404));
        });

    // All other routes should redirect to the index.html
  app.route('/*')
        .get((req, res) => res.sendFile(join(__dirname, '..', '..', '..', 'client', 'index.html')));
};