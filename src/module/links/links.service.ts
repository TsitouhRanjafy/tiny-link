import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLinkDto, LinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { Repository } from 'typeorm';
import { Link } from './entities/link.entity';
import { PublicUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class LinksService {

  constructor(
    @Inject('LINKS_REPOSITORY')
    private readonly linksRepository: Repository<Link>,
    private readonly userService: UsersService,
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache
  ){}

  async create(createLinkDto: CreateLinkDto,userId: number) {
    const existingUser: PublicUserDto | null = await this.userService.findOneById(userId);
    if (!existingUser) throw new NotFoundException('User not found');
    
    const newLink: CreateLinkDto = {...createLinkDto, user: existingUser}
    
    const savedLink = this.linksRepository.save(newLink);
    await this.cacheManager.set(createLinkDto.tinyLink,createLinkDto.originLink);
    return savedLink;
  }

  findManyByUserId(id: number){
    return this.linksRepository.find({
      where: {
        user: {
          id: id
        }
      }
    })
  }

  async findOne(id: number,userId: number) {
    const myLink: LinkDto | null = await this.linksRepository.findOne({
      where: {
        user: {
          id: userId
        },
        id: id
      },
    });

    if (myLink) return myLink;
    throw new NotFoundException("Link not found");
  }

  findAll() {
    return this.linksRepository.find();
  }



  update(id: number, updateLinkDto: UpdateLinkDto) {
    return `This action updates a #${id} link`;
  }

  remove(id: number,userId: number) {
    return this.linksRepository.delete({id: id, user: { id: userId }});
  }
}
