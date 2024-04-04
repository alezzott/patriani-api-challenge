import { Request, Response } from 'express';
import { Enterprise } from '../models/enterprise';
import { randomUUID } from 'crypto';
import { EnterpriseSchema } from '../validators/enterpriseValidation';
import { z } from 'zod';

let enterprises: Enterprise[] = [];

export const listEnterprise = (req: Request, res: Response) => {
    res.json({ enterprises: enterprises });
};

export const createEnterprise = (req: Request, res: Response) => {
    try {
        const validate = EnterpriseSchema.parse(req.body);

        const newEnterprise: Enterprise = {
            id: randomUUID(),
            name: validate.name,
            status: validate.status,
            purpose: validate.purpose,
            ri_number: validate.ri_number,
            address: validate.address
        };

        enterprises.push(newEnterprise);
        res.status(201).json(newEnterprise);
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ error: error.errors[0].message });
        } else {
            res.status(400).json({ error: error.message });
        }
    }
};

export const editEnterprise = (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const update = req.body;

        if (!id) {
            res.status(400).json({
                error: 'ID do empreendimento é obrigatório'
            });
            return;
        }

        const index = enterprises.findIndex(enterprise => enterprise.id === id);
        if (index === -1) {
            res.status(404).json({ error: 'Empreendimento não encontrado' });
            return;
        }

        enterprises[index] = {
            ...enterprises[index],
            ...update
        };

        res.json(enterprises[index]);
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ error: error.errors[0].message });
        } else {
            res.status(400).json({ error: error.message });
        }
    }
};

export const removeEnterprise = (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ error: 'Id obrigatório' });
            return;
        }

        const index = enterprises.findIndex(enterprise => enterprise.id === id);
        if (index === -1) {
            res.status(404).json({ error: 'Empreendimento não encontrado' });
            return;
        }

        enterprises = enterprises.filter(enterprise => enterprise.id !== id);
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'error' });
    }
};

export const getEnterpriseById = (req: Request, res: Response) => {
    const { id } = req.params;
    const enterprise = enterprises.find(enterprise => enterprise.id === id);

    if (!enterprise) {
        return res.status(404).json({ error: 'Empreendimento não encontrado' });
    }

    res.json(enterprise);
};
