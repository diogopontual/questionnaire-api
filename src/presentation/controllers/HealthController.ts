import * as express from 'express';
import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  httpDelete,
  request,
  queryParam,
  response,
  requestParam,
  next
} from 'inversify-express-utils';
import { injectable, inject } from 'inversify';

@controller('/health')
export class HealthController implements interfaces.Controller {
  @httpGet('/')
  private index(
    @request() req: express.Request,
    @response() res: express.Response,
    @next() next: express.NextFunction
  ): string {
    return 'The server is up and running!';
  }
}
