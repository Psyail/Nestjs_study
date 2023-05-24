import { Body,Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateResponseDto } from '../DTOs/Response/create.response.dto';
import { CreateRequstDto } from '../DTOs/Request/create.request.dto';

@Controller('user')
export class UserController {

    private readonly userService: UserService;

    constructor(userService: UserService)
    {
        this.userService = userService;
    }
    @Post('join')//메서드를 정의
    Join(@Body() body: CreateRequstDto): CreateResponseDto{
       

        //서비스를 연결
       // const result:CreateResponseDto = //Service에서 받아온 데이터를 저장
       
        return this.userService.Join(body); //데이터의 값을 반환
        

    }

}
