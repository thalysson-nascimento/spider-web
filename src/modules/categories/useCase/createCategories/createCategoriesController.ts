import { Request, Response } from "express";
import { CreateCategoriesUseCase } from "./createCategoriesUseCase";

export class CreateCategoriesController {
  async handle(request: Request, response: Response) {
    const createCategoriesUseCase = new CreateCategoriesUseCase();
    const { category } = request.body;

    const result = await createCategoriesUseCase.execute(category);

    return response.json(result);
  }
}
