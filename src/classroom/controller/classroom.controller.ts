import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateClassroomDto, UpdateClassroomDto } from "../dto/classroom.dto";
import { ClassroomService } from "../service/classroom.service";

@Controller("classroom")
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {
  }
  @Get()
  getAllClassroom() {
    this.classroomService.getAllClassroom();
  }

  @Get(":id")
  getSingleClassroom(@Param("id") id: string) {
    this.classroomService.getSingleClassroom(Number(id));
  }

  @Post()
  async createClassroom(@Body() classroom: CreateClassroomDto) {
    this.classroomService.createClassroom(classroom);
  }

  @Put('id')
  async modifyClassroom(@Param('id') id: string, @Body() post: UpdateClassroomDto) {
    return this.classroomService.modifyClassroom(Number(id), post)
  }

  @Delete(":id")
  deleteClassroom(@Param("id") id: string) {
    this.classroomService.deleteClassroom(Number(id));
    return true;
  }


}
