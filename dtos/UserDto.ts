export type UserDtoType = {
    isAuth: boolean
    login: string
}

export default class UserDto {
    public login: string;

    constructor({ login }: UserDtoType) {
        this.login = login
    }
}