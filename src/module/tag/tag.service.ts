import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './entities/tag.entity';
@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}
  create(tagDto) {
    const tagEntity = this.tagRepository.create(tagDto);
    return this.tagRepository.save(tagEntity);
  }
  findAll() {
    return this.tagRepository.find();
  }
  findOne(id: number) {
    return this.tagRepository.findOne({ where: { tagId: id } });
  }
}
