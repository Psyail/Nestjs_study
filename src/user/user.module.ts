import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import{CreateResponseDto} from '../DTOs/Response/create.response.dto'

@Module({
  controllers: [UserController],
  providers: [UserService,CreateResponseDto]
})
export class UserModule {}
