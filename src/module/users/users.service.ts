import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto, PublicUserDto, UserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly userRepository: Repository<User>
  ){}

  create(userDto: CreateUserDto) {
    return this.userRepository.save(userDto);
  }

  findAll(isPublic: boolean = false): Promise<PublicUserDto[] | UserDto[]> {
    return this.userRepository.find({
      select: {
        id: true,
        fullname: true,
        email: true,
        password: isPublic
      }
    });
  }

  findOneById(id: number,isPublic: boolean = true): Promise<PublicUserDto | UserDto | null> {
    return this.userRepository.findOne({ 
      where: { id },
      select: {
        id: true,
        fullname: true,
        email: true,
        password: !isPublic
      }
    });
  }

  findOneByEmail(email: string,isPublic: boolean = false): Promise<PublicUserDto | UserDto | null> {
    return this.userRepository.findOne({ 
      where: { email },
      select: {
        id: true,
        fullname: true,
        email: true,
        password: isPublic
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
