export interface Address {
    district: string;
    city: string;
    street: string;
    state: string;
    number: string;
    cep: string;
}

export interface Enterprise {
    id: string;
    name: string;
    status: 'RELEASE' | 'SOON' | 'IN_WORKS' | 'READY_TO_LIVE';
    purpose: 'HOME' | 'COMMERCIAL';
    ri_number?: string;
    address: Address;
}
