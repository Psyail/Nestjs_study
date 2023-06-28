import { UserEntity } from "src/Entitis/user.entity";

interface UpdateResponse{
    data: UserEntity |void;
    message: string;
}
export class UpdateResponseDto implements UpdateResponse{
    data: UserEntity;
    message: string;
}