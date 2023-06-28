import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './Entitis/user.entity';
@Module({
    imports:[
        UserModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host:'-h nest1.mariadb.database.azure.com',
            port: 3306,
            username: 'nestroot@nest1',
            password: 'Nest2023@',
            database: 'study',
            entities: [UserEntity],
            synchronize: true,

        }),
    ],
    controllers:[AppController],
    providers:[AppService],
})
export class AppModule{}