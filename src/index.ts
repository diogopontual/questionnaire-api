import 'reflect-metadata';
import server from './server';

(async () => {
  server.listen(4000, () => console.log('Running on server'));
})();
