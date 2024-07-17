import { Controller, Get } from '@nestjs/common';

@Controller('sinistre')
export class SinistreController {
@Get()
findAll(){
    return 'hi sinistre';
}
}
