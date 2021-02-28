import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, LoginUserDTO, User } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() user: CreateUserDTO): User {
        return this.userService.create(user);
    }

    @Post('login')
    login(@Body() user: LoginUserDTO): User {
        return this.userService.login(user);
    }
}
