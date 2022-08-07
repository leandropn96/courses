export interface Course {
    code: number,
    description: string,
    menu: string,
}

export interface CreateCourse {
    code?: number,
    description: string,
    menu: string,
}

export interface Student {
    code: number,
    name: string,
}

export interface CreateStudent {
    code?: number,
    name: string,
}

export interface CreateStudentCourse {
    code_course: number,
    code_student: number,
}

export interface ListStudentCourse {
    code_course: number,
    code_student: string,
    student: Student,
    course: Course,
}