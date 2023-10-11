import { makeAutoObservable } from "mobx";
import { UserDtoType } from "../dtos/UserDto";

export default new class UserStore {

    private _user: UserDtoType = {} as UserDtoType;

    constructor() {
        makeAutoObservable(this);
    }


    public set user(user: UserDtoType) {
        this._user = user;
    }


    public get user(): UserDtoType {
        return this._user
    }



}