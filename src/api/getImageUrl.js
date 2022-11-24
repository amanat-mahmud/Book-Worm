export const getImageUrl = async (imageFile) =>{
    const formData = new FormData();
    formData.append("image",imageFile)
    const imgHostingKey = process.env.REACT_APP_imgbb_key;
    const url =`https://api.imgbb.com/1/upload?key=${imgHostingKey}`
    const response = await fetch(url, {
        method: 'POST',
        body: formData
    })
    const data = await response.json();
    return data.data.url;
}
