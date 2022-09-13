import { Request, Response } from 'express';

export const getWelcome = async (req: Request, res: Response) => {
   res.status(200).json({
      msg: 'Welcome to API MySQL and MongoDB'
   });
};