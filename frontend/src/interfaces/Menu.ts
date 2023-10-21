export interface boloDefault {
    name: string;
    price: number;
    description?: string;
};

export interface menuItem extends boloDefault {
    id: number;
    image: string;
};
