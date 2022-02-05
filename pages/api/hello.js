import prisma from "/prisma/index.js";

export default async (req, res) => {
  res.status(200).json({ saludo: "Holiiiiiis" });
};
