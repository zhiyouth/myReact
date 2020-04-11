import axios from 'axios';
export function getLogin({
    nickname = 0,
    password = 0
}) {
    return (
        axios({
            url: '/weremember/cgi/login.action',
            method: 'post',
            data: JSON.stringify({
                nickname,
                password
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
    );
}