/* istanbul ignore file */
import express from "express";
import helmet from "helmet";
import { StatusCodes } from "http-status-codes";
import { useContainer, useExpressServer } from "routing-controllers";
import { diContainer } from "#/di-container";
import { CorsMiddleware } from "#/server/cors-middleware";

const server = express();

server.use(helmet());
server.use(CorsMiddleware.create());

useContainer(diContainer);

useExpressServer(server, {
  routePrefix: "/",
  validation: true,
  classTransformer: true,
  plainToClassTransformOptions: {
    enableImplicitConversion: false,
  },
  defaultErrorHandler: false,
});

server.get("/", (req, res) => res.status(StatusCodes.OK).send("Hi :)"));

export { server };
