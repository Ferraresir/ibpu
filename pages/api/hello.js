import prisma from "/prisma/index.js";

export default test = async (req, res) => {
  const users = await prisma.curso.findMany({
    include: { modulos: true },
  });
  res.status(200).json(users);
};
