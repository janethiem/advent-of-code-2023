import { GLOBAL_CONSTANT } from './constants';
import { IUser } from './interfaces';

function main(): void
{
    const user: IUser = {
        name: "Wayne Gretsky",
        age: 111
    };
    console.log( `Hello World! The number is ${GLOBAL_CONSTANT} and the user is ${user.name} who is ${user.age}` );
}

main();