import { prisma } from "/prisma/index";

export default async (req, res) => {
  const users = await prisma.user.findMany({});
  res.status(200).json(users);
};
