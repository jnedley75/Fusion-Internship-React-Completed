export default function dbLogin(requestObject) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestObject)
    };
    return fetch('http://127.0.0.1:8080/login/database', requestOptions)
        .then(response => response.json())
}

export function googleLogin(requestObject) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(requestObject)
    };
    return fetch('http://127.0.0.1:8080/login/google', requestOptions)
        .then(response => response.json())
}

export function registration(requestObject) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(requestObject)
    };
    return fetch('http://127.0.0.1:8080/registration', requestOptions)
        .then(response => response.json())
}