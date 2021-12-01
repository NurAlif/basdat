import { Injectable } from '@nestjs/common';
import { User } from './dto/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [{id: 0, name: 'ok'}, {id: 1, name: 'ok1'}];
    findAll(): User[] {
        return this.users;
    }

    findById(userId: number): User{
        return this.users.find(user => user.id === userId);
    }

    createUser(name : string): User{
        const newUser = {id: Date.now(), name};

        this.users.push(newUser);

        return newUser;
    }
}
