import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, LoginUserDTO, UserDTO } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() user: CreateUserDTO): UserDTO {
        return this.userService.create(user);
    }

    @Post('login')
    login(@Body() user: LoginUserDTO): UserDTO {
        return this.userService.login(user);
    }

    //@Post('validate')
    //validate(@Body() user: LoginUserDTO): UserDTO {
    //    return this.userService.validate(user);
    //}
}
