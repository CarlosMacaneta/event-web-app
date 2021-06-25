export type Guest = {
    id: number;
    name: string;
    table: string;
}

export type GuestPage = {
    content?: Guest[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}