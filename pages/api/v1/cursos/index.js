import prisma from "../../../../prisma";

export default async function cursos (req,res){
    if(req.method === 'GET'){
        const cursos = await prisma.curso.findMany()
        res.json(cursos)
    }

}


