import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateClassroomDto, UpdateClassroomDto } from "../dto/classroom.dto";

interface Classroom {
  id: number;
  name: string;
}

@Injectable()
export class ClassroomService {
  private classrooms: Classroom[] = [];
  private lastId: 0;


  getAllClassroom() {
    return this.classrooms;
  }

  getSingleClassroom(id: number) {
    const classroom = this.classrooms.find((classroom) => classroom.id === id);
    if (classroom) {
      return classroom;
    } else {
      throw new HttpException("Classroom not found", HttpStatus.NOT_FOUND);
    }
  }

  createClassroom(classroom: CreateClassroomDto) {
    const newClassroom = {
      id: ++this.lastId,
      ...classroom
    };
    this.classrooms.push(newClassroom);
    return newClassroom;
  }

  modifyClassroom(id: number, classroom: UpdateClassroomDto) {
    const classroomIndex = this.classrooms.findIndex((classroom) => classroom.id === id)
    if(classroomIndex > -1) {
      this.classrooms[classroomIndex] =<Classroom>classroom
      return classroom;
    }
    else {
      throw new HttpException("Classroom not found", HttpStatus.NOT_FOUND);
    }
  }

  deleteClassroom(id: number) {
    const classroomIndex = this.classrooms.findIndex((classroom) => classroom.id === id)
    if(classroomIndex > -1) {
      this.classrooms.splice(classroomIndex, 1)
    }
    else {
      throw new HttpException("Classroom not found", HttpStatus.NOT_FOUND);
    }
  }
}
