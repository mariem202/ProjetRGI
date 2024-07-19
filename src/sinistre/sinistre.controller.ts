import { Body, Controller, Get,Param, Post } from '@nestjs/common';

@Controller('sinistre')
export class SinistreController {
@Get()
findAll(){
    return 'hi sinistre';
}
@Get(':id')
findOne(@Param('id') id:string) {
    return `this action returns #${id} sinistre `;
}

@Post()
create (@Body('name')body){
    return body;
}
}
