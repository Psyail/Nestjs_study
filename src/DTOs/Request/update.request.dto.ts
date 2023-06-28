interface UpdateRequest{
    password: string;
    email: string;
}
export class UpdateRequestDto implements UpdateRequest{
    password: string;
    email: string;
}