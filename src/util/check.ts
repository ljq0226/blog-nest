import { HttpException, HttpStatus } from '@nestjs/common';
export function checkEntity(entity: any, id: string) {
  if (!entity) {
    throw new HttpException(`id为${id}的实体不存在`, HttpStatus.BAD_REQUEST);
  }
}
