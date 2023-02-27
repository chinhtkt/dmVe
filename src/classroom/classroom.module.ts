import { Module } from '@nestjs/common';
import { ClassroomController } from './controller/classroom.controller';
import { ClassroomService } from './service/classroom.service';

@Module({
  controllers: [ClassroomController],
  providers: [ClassroomService]
})
export class ClassroomModule {}
