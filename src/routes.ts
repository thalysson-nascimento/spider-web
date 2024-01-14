import { Router } from "express";
import { CreateCategoriesController } from "./modules/categories/useCase/createCategories/createCategoriesController";

const routes = Router();

const createCategoriesController = new CreateCategoriesController();

routes.post("/categories", createCategoriesController.handle);

export { routes };
