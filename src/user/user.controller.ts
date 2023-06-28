import { Body,Controller, Post, Get, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateResponseDto } from '../DTOs/Response/create.response.dto';
import { CreateRequstDto } from '../DTOs/Request/create.request.dto';
import { ReadRequestDto } from 'src/DTOs/Request/read.request.dto';
import { json } from 'stream/consumers';
import { Response } from 'express';
import { UpdateRequestDto } from 'src/DTOs/Request/update.request.dto';
import { promises } from 'dns';
import { UpdateResponseDto } from 'src/DTOs/Response/update.response.dto';

@Controller('user')
export class UserController {

    private readonly userService: UserService;

    constructor(userService: UserService)
    {
        this.userService = userService;
    }
    //회원가입 C
    @Post('join')//메서드를 정의
   async Join(@Body() body: CreateRequstDto): Promise<CreateResponseDto>{
       const result : CreateResponseDto = await this.userService.Join(body);
       return result;

    }
    //회원조회 R
    @Get('read')
    async Read(@Res() res: Response, @Body() body: ReadRequestDto,
    ){
           const result = await this.userService.Read(body);
           return res.status(result.statusCode).json(result);
    }
    //회원정보수정 U
    @Get('update')
    async update(@Body() body: UpdateRequestDto)
    {
        const result = await this.userService.update(body);
        return result;
    }

}


