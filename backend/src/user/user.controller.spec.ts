import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
    let userController: UserController;

    beforeEach(async () => {
        const user: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [UserService]
        }).compile();

        userController = user.get<UserController>(UserController);
    });

    describe('create', () => {
        it('should create user', () => {
            expect(
                userController.create({
                    name: 'George Harrison',
                    username: 'George',
                    password: 'Guitar123',
                    email: 'george@gmail.com',
                    birthday: new Date(25, 1, 1943)
                })
            ).toBeUndefined();
        });
    });
});
