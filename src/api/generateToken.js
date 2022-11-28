export const generateToken = async (email) => {
    const url = `https://book-worm-server-omega.vercel.app/jwt?email=${email}`
    const response = await fetch(url)
    const data = await response.json();
    if (data.accessToken) {
        localStorage.setItem('accessToken', data.accessToken);
    }
}