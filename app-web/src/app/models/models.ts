export interface Course {
    codigo: number,
    descricao: string,
    ementa: string,
}

export interface CreateCourse {
    codigo?: number,
    descricao: string,
    ementa: string,
}

export interface Student {
    codigo: number,
    nome: string,
}

export interface CreateStudent {
    codigo?: number,
    nome: string,
}

export interface CreateStudentCourse {
    codigo_curso: number,
    codigo_aluno: number,
}

export interface ListStudentCourse {
    codigo_curso: number,
    codigo_aluno: string,
    aluno: Student,
    course: Course,
}