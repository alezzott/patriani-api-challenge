import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validationMiddleware = (schema: z.ZodSchema<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Dados recebidos:', req.body);
            schema.parse(req.body);
            next();
        } catch (error) {
            console.error('Erro de validação:', error);
            if (error instanceof z.ZodError) {
                res.status(400).json({ error: error.errors[0].message });
            } else {
                res.status(500).json({ error: 'Erro interno do servidor' });
            }
        }
    };
};
