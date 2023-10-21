export interface user {
    id: number;
    email: string;
    username: string;
    password: string;
}

export interface userInfo extends user {
    name: string;
    isAdmin: boolean;
    address: {
        street: string;
        streetNumber: string;
        addressInformation?: string;
        cep: number;
        city: string;
    };
    phone: string;
};

