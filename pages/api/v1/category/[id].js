import prisma from "../../../../prisma";

export default async function category(req, res) {
  //READ
  if (req.method === "GET") {
    const id = parseInt(req.query.id);
    const category = await prisma.category.findMany({
      where: {
        id: id,
      },
    });
    if (category.length === 0) {
      return res.json("Not Found");
    }
    return res.json(category);
  }

  //UPDATE
  if (req.method === "PATCH") {
    const body = JSON.parse(req.body);
    const id = parseInt(req.query.id);
    const category = await prisma.category.findMany({
      where: {
        id: id,
      },
    });
    if (category.length === 0) {
      return res.json("Not Found");
    }
    const categoryUpdate = await prisma.category.update({
      where: {
        id: id,
      },
      data: body,
    });
    return res.json(categoryUpdate);
  }
}
