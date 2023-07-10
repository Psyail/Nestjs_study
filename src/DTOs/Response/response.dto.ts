import exp from "constants";
import { UserEntity } from "src/Entitis/user.entity";

interface Response{
    data: UserEntity | string|void;
    message: string;
    statusCode: number;
}
export class DefaultResponseDto{
    message:string;
    statusCode: number;
}
export class DataResponseDto extends DefaultResponseDto{
    data: UserEntity|void;
}
export class JwtResponseDto extends DefaultResponseDto{
    jwt: string|void;
}
/*
export class ResponseDto implements Response{
    data: UserEntity|string;
    message: string;
    statusCode: number;
}*/