import axios from 'axios';
export function getRegister({
    nickname = '',
    password = '',
    phone = 0,
    name = ''
}) {
    axios({
        url: '/weremember/cgi/register.action',
        method: 'post',
        data: JSON.stringify({
            nickname,
            password,
            phone,
            name
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}