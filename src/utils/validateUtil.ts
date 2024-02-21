import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const validateResult = (
   request: Request,
   response: Response,
   next: NextFunction
) => {
   try {
      validationResult(request).throw();
      return next();
   } catch (error: any) {
      response.status(403).json({ errors: error.array() });
   }
};

export { validateResult };
