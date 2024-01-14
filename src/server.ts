import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";

const app = express();
const port: number = 3000;

app.use(express.json());

// app.use("/product", express.static(`${uploadConfig.tmpFolder}/product`));

app.use(routes);

app.use(
  (
    error: Error,
    request: Request,
    response: Response,
    nextFunction: NextFunction
  ) => {
    if (error instanceof Error) {
      return response.status(400).json({
        message: error.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "error interno do servidor",
    });
  }
);

app.listen(port, () =>
  console.log([`servidor iniciado na porta ${port}`, `localhost:${port}/`])
);
