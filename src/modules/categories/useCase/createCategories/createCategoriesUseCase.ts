import { prismaCliente } from "../../../../database/prismaCliente";

export class CreateCategoriesUseCase {
  async execute(categoryName: string) {
    const userNameClientExist = await prismaCliente.categories.findFirst({
      where: {
        categoryName: {
          equals: categoryName,
          mode: "insensitive",
        },
      },
    });

    if (userNameClientExist) {
      throw new Error("categoria existente");
    }

    const createCategoryname = await prismaCliente.categories.create({
      data: {
        categoryName,
      },
    });

    return createCategoryname;
  }
}
