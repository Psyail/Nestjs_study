interface CreateResponse{
    message:string;

}

export class CreateResponseDto implements CreateResponse{
    message;

    constructor(message){
        this.message = message;
    }
}