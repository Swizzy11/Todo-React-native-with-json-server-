import { IPost } from "../types/post";
import { IUser } from "../types/user";

export const posts:IPost[] = [{
    id: 1,
    title: 'О мире',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque vero excepturi modi tempore dicta impedit dolore reiciendis. Dolorem ullam a tenetur provident, corrupti sapiente natus reiciendis nulla harum distinctio odio.',
    userID: 1
},
{
    id: 2,
    title: 'О девайсах',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque vero excepturi modi tempore dicta impedit dolore reiciendis. Dolorem ullam a tenetur provident, corrupti sapiente natus reiciendis nulla harum distinctio odio.',
    userID: 1
},
{
    id: 4,
    title: 'О играх',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque vero excepturi modi tempore dicta impedit dolore reiciendis. Dolorem ullam a tenetur provident, corrupti sapiente natus reiciendis nulla harum distinctio odio.',
    userID: 1
},
{
    id: 5,
    title: 'О Книгах',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque vero excepturi modi tempore dicta impedit dolore reiciendis. Dolorem ullam a tenetur provident, corrupti sapiente natus reiciendis nulla harum distinctio odio.',
    userID: 1
}
]


export const users:IUser[] = [{
    id: 1,
    email: 'kotovskij.01@yandex.ru',
    username: 'Dima',
    secondname: 'Kotovskij',
    img: '',
    password: '12345678',
    posts: []
}]
