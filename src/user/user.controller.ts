import { Body,Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateRequstDto } from 'src/DTOs/Request/create.request.dto';

@Controller('user')
export class UserController {

    private readonly userService: UserService;

    constructor(userService: UserService)
    {
        this.userService = userService;
    }
    @Post('create')//메서드를 정의
    Create(@Body() data: CreateRequstDto): void{
       

        //서비스를 연결
        const result = this.userService.Create(data);//Service에서 받아온 데이터를 저장
       
        return result; //데이터의 값을 반환
        

    }

}
