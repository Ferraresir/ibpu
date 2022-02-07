import prisma from "../../../../prisma";

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async function category(req, res) {
  //CREATE
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    console.log(body);
    const category = await prisma.category.create({
      data: body,
    });
    if (category === null) {
      res.status(400).json({
        message: "Category not found",
      });
    }
    res.json(category);
  }

  //READ
  if (req.method === "GET") {
    const categorys = await prisma.category.findMany();
    res.json(categorys);
  }

  //DELETE
}
