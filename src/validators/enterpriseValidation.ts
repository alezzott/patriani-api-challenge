import { z } from 'zod';

export const AddressSchema = z.object({
    district: z.string(),
    city: z.string(),
    street: z.string(),
    state: z.string(),
    number: z.string(),
    cep: z.string()
});

export const EnterpriseSchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    status: z.enum(['RELEASE', 'SOON', 'IN_WORKS', 'READY_TO_LIVE']),
    purpose: z.enum(['HOME', 'COMMERCIAL']),
    ri_number: z.string().optional(),
    address: AddressSchema
});
