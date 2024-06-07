import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    const { id } = params;
    const users = [
        { id: 1, name: 'user1', gender: 'male', number: '123456' },
        { id: 2, name: 'user2', gender: 'female', number: '123456' },
        { id: 3, name: 'user3', gender: 'male', number: '123456' },
        { id: 4, name: 'user4', gender: 'male', number: '123456' },
        { id: 5, name: 'user5', gender: 'male', number: '123456' }
    ];
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
        return NextResponse.json(user);
    } else {
        return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
}
