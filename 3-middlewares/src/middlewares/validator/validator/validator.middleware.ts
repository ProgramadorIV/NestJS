/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

interface Users {
  name: string;
  surname: string;
}

@Injectable()
export class ValidatorMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    const user: Users = req.body;
    
    if(!user.name || !user.surname){
      const errorMessage = 'Invalid body';
      console.log(errorMessage);
      return res.status(400).send(errorMessage);
    }
    next();
  }
}
