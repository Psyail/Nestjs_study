import exp from "constants"

interface ReadRequest{
    username:string
}

export class ReadRequestDto implements ReadRequest{
    username: string;
}