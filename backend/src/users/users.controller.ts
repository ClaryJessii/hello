import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { get } from 'http';

@Controller('users')
export class UsersController {
    /*
    
    
    POST /users/
    PATCH /users/:id
    DELETE /users/:id
    */

    @Get() //GET /user
    findAll() {
        return []
    }

    @Get(':id') //GET /users/:id
    findOne(@Param('id')id: string){
        return { id }
    }

    @Post() //POST /users/
    creat(@Body()user: {}){
        return user 
    }

    @Patch(':id') //GET /users/:id
    findOne(@Param('id')id: string){
        return { id }
    }
   
}