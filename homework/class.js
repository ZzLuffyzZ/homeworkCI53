class student {
    id;
    nameOfStudent;
    ageOfStudent;
    course;

    constructor(id,nameOfStudent,ageOfStudent,course){
        this.id = uuid.v4();
        this.nameOfStudent = nameOfStudent;
        this.ageOfStudent = ageOfStudent;
        this.course = course;
    }
}

class teacherClass {
    id;
    nameOfTeacher;
    ageOfTeacher;
    level;

    constructor(id,nameOfTeacher,ageOfTeacher,level){
        this.id = uuid.v4();
        this.nameOfTeacher = nameOfTeacher;
        this.ageOfTeacher = ageOfTeacher;
        this.level = level;
    }
}

class subjectClass {
    nameOfSubject;

    constructor(nameOfSubject){
        this.nameOfSubject = nameOfSubject
    }
}


class classroomm {
    id;
    subject;
    teacher;
    students;

    constructor(id,subject,teacher,students){
        this.id = uuid.v4();
        this.subject = subject;
        this.teacher = [];
        this.students = [];
    } 

    addSubject(z){
        if( z instanceof subjectClass){
            this.subject = z;
        }
    }
    
    addTeacher(v){
        if (v instanceof teacherClass){
            this.teacher.push(v);
        }
    }

    addStudents(x){
        if ( x instanceof student){
            this.students.push(x);
        }
    }

    deleteStudents(id){
        let studentIndex = this.students.findIndex(item => iteam.id === id);
        if ( studentIndex >-1){
            this.students.splice(studentIndex,1)
        }
    }

    deleteTeacher(id){
        let teacherIndex = this.teacher.findIndex(item => iteam.id === id);
        if ( teacherIndex >-1){
            this.teacher.splice(teacherIndex,1)
        }
    }

    updateStudent(id,data){
        let findStudent = this.students.find(function(student){
            return student.id === id;
        });
        
        if( findStudent != null){
            student.update(data)
        }
    }

    updateTeacher(id,data){
        let findTeacher = this.teacher.find(function(teacher){
            return teacherClass.id === id;
        });
        
        if( findTeacher != null){
            this.teacher.update(data)
        }
    }
    showStudents(){
        console.log(this.students);
    }

    showTeacher(){
        console.log(this.teacher);
    }

    findStudentById(id){
        let studentById = this.students.find(function(student){
            return student.id === id;
        });
    }

    findStudentByName(name){
        let studentByName = this.students.filter(student =>student.nameOfStudent === name);
    }
}
