import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../User/user.entity';
import { UserModule } from '../User/user.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'masterkey',
            database: 'preciseschedule',
            entities: [User],
            synchronize: true
        }),
        UserModule
    ]
})
export class AppModule {}
