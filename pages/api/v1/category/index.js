import prisma from "../../../../prisma";

export default async function category (req,res){
    if(req.method === 'GET'){
        const categorys = await prisma.category.findMany()
        res.json(categorys)
    }

}