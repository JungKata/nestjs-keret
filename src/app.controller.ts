import {
  Controller,
  
  Get,
  Param,
  Query,
  Render,
} from '@nestjs/common';
import { AppService } from './app.service';
import db from './db';
import { MacskakDto } from './macskak.dto'; 

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async listmacska(@Query('szem_szin') szem_szin : string){

    if(szem_szin != undefined){
       const [rows] = await db.execute(
      'SELECT szem_szin, suly FROM macska WHERE szem_szin = ?' [szem_szin]);
    return {
      macska: rows,
    };
  }
    else{
      const [rows] = await db.execute(
        'SELECT szem_szin, suly FROM macska ORDER BY suly DESC'
          );
      return{ 
        macska: rows
      }
    };
  }
}
