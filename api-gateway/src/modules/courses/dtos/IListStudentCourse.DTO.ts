export class StudentCourse {
    codigo: number
    codigo_aluno: number
    codigo_curso: number
    aluno: {
        codigo: number,
        nome: string
    }
    course: {
        codigo: number,
        descricao: string,
        ementa: string
    }
}