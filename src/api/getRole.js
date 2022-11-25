export const getRole = async(email) =>{
        const url =`http://localhost:5000/user?email=${email}`
        const response = await fetch(url)
        const data = await response.json();
        return(data.role);
} 
