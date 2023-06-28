import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { CreateResponseDto } from '../DTOs/Response/create.response.dto';
import { CreateRequstDto } from 'src/DTOs/Request/create.request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/Entitis/user.entity';
import { Repository } from 'typeorm';
import { ReadRequestDto } from 'src/DTOs/Request/read.request.dto';
import { ReadResponseDto } from 'src/DTOs/Response/read.response.dto';
import { UpdateRequestDto } from 'src/DTOs/Request/update.request.dto';
import { UpdateResponseDto } from 'src/DTOs/Response/update.response.dto';
@Injectable()
export class UserService {
    CreateResponseDto: CreateResponseDto;
    readResponseDto: ReadResponseDto;
    updateResponseDto: UpdateResponseDto;

    constructor(
        createResponseDto: CreateResponseDto,
        readResponseDto: ReadResponseDto,
        updateResponseDto: UpdateResponseDto,

        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ){
        this.CreateResponseDto = createResponseDto;
    }

    async Join(body: CreateRequstDto): Promise<CreateResponseDto>{
        const user: UserEntity = await this.userRepository.findOneBy({username:body.username,
        });
        if (user) {
            this.CreateResponseDto.message ='이미 존재하는 사용자 입니다.';
            return this.CreateResponseDto;
        }
      
        const new_user = {
        id: 1,
        username : body.username,
        password: body.password,
        email: body.email,
        birth: body.birth
      };
      await this.userRepository.save(new_user);
      this.CreateResponseDto.message = '성공했습니다';
      return this.CreateResponseDto;
    }

    async Read(body: ReadRequestDto):Promise<ReadResponseDto>{
      const user: UserEntity = await this.userRepository.findOneBy({username: body.username});

      if(!user){
        this.readResponseDto.data = null;
        this.readResponseDto.message = "존재하지 않는 사용자 입니다."
        this.readResponseDto.statusCode = 404;
        return this.readResponseDto;
        //없는 사용자
      }
      this.readResponseDto.data = user;
      this.readResponseDto.message = '조회를 완료했습니다';
      this.readResponseDto.statusCode = 100;
     return this.readResponseDto;
    }

    async update(body: UpdateRequestDto):Promise<UpdateResponseDto>{
      const user: UserEntity = await this.userRepository.findOneBy({username: body.password});
      if (user) {
        this.updateResponseDto.data =user;
        this.updateResponseDto.message = "이전 비밀번호와 일치합니다. 다시 입력해주세요";
        return this.updateResponseDto;
      }
        const newpassword ={
          password: body.password,
          email: body.email
        };

        await this.userRepository.save(newpassword);
        this.updateResponseDto.message ="정보가 변경되었습니다.";
        return this.updateResponseDto;
    }
}
