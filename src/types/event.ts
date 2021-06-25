export type Event = {
    id: number;
    name: string;
    address: string;
    date: string;
    time: string;
}

export type EventPage = {
    content?: Event[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}