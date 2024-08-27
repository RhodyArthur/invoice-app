// define invoice interface
export interface Invoice {
    id: string;
    createdAt: string;
    paymentDue: string;
    description: string;
    paymentTerms: number;
    clientName: string;
    clientEmail: string;
    status: string;
    senderAddress: Address;
    clientAddress: Address;
    items: Item[];
    total: number
}

// define item interface
export interface Item {
    name: string;
    quantity: number;
    price: number;
    total: number;
}

// define address interface
export interface Address {
    street: string;
    city: string;
    postCode: string;
    country: string;
}