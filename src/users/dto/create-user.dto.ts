export class CreateUserDto {
    constructor(
        readonly fullname: string,
        readonly email: string,
        readonly password: string,
    ){}
}
