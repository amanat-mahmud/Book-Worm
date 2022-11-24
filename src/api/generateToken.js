export const generateToken = async(email) =>{
    const url =`http://localhost:5000/jwt?email=${email}`
    const response = await fetch(url)
    const data = await response.json();
    if (data.accessToken) {
        localStorage.setItem('accessToken', data.accessToken);
    }
}