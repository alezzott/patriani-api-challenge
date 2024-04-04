import express from 'express';
import * as enterpriseController from '../controllers/enterpriseController';
import { validationMiddleware } from '../middlewares/validationMiddleware';
import { EnterpriseSchema } from '../validators/enterpriseValidation';

const router = express.Router();

router.get('/list', enterpriseController.listEnterprise);
router.get('/:id', enterpriseController.getEnterpriseById);
router.post(
    '/create',
    validationMiddleware(EnterpriseSchema),
    enterpriseController.createEnterprise
);
router.patch(
    '/:id',
    validationMiddleware(EnterpriseSchema),
    enterpriseController.editEnterprise
);
router.delete('/:id', enterpriseController.removeEnterprise);

export { router as enterpriseRoutes };
