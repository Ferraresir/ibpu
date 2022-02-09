import prisma from "../../../../prisma";

export default async function cursos (req,res){
    //CREATE
    if (req.method === "POST") {
        const body = JSON.parse(req.body);
        console.log(body);
        const curso = await prisma.curso.create({
            data: body,
        });
        if (curso === null) {
            res.status(400).json({
            message: "Curso not found",
            });
        }
        res.json(curso);
    }

    //READ
    if(req.method === 'GET'){
        const cursos = await prisma.curso.findMany()
        res.json(cursos)
    }

    

}


