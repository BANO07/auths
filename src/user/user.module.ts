import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secretOrPrivateKey : process.env.JWT_SECRET, 
      signOptions:{expiresIn:'60000000000000000000s'}
    }),
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
