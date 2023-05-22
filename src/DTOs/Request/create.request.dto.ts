interface ICreateRequestDto{
    username :string;
    password :string;
    email : string;
    birth : string;
}

export class CreateRequstDto implements ICreateRequestDto{

    username;
    password;
    email;
    birth: string;
}