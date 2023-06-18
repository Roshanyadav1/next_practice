const baseUrl = 'http://localhost:8000/v1/'

export const loginUser = async (email, password) => {
    let data = {
        email: email,
        password: password
    }
    fetch(`${baseUrl}login`, data).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}