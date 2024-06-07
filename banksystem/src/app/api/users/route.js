import { NextResponse } from 'next/server';

export async function GET() {
    const users = [
        { id: 1, name: 'user1', gender:" F", number: '123456', },
        { id: 2, name: 'user2', gender:" M", number: '1212456', },
        { id: 3, name: 'user3', gender:" M", number: '125256', },
        { id: 4, name: 'user4', gender:" F", number: '123456', },
        { id: 5, name: 'user5', gender:" F", number: '123456', },
    ];
    return NextResponse.json(users);
}