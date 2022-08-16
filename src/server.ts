import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import * as bodyParser from 'body-parser';
import './presentation/controllers/HealthController';
const container = new Container();
const server = new InversifyExpressServer(container);
server.setConfig((app) => {
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());
});
const serverInstance = server.build();
serverInstance.listen(3000);
export default serverInstance;
