export const getRole = async (email) => {
        const url = `https://book-worm-server-omega.vercel.app/user?email=${email}`
        const response = await fetch(url)
        const data = await response.json();
        return (data.role);
} 
