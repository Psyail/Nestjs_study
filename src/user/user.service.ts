import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { CreateResponseDto } from '../DTOs/Response/create.response.dto';
import { CreateRequstDto } from 'src/DTOs/Request/create.request.dto';

@Injectable()
export class UserService {
    CreateResponseDto: CreateResponseDto;

    constructor(createResponseDto: CreateResponseDto){
        this.CreateResponseDto = createResponseDto;
    }

    Join(body: CreateRequstDto): CreateResponseDto{
        //데이터 처리
        //데이터 return
        this.CreateResponseDto.message = "안녕";
        return this.CreateResponseDto;
    }
}
