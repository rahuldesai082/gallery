import axios from "axios"

export const getImages = async () => {
    try{
        const images = await axios.get('https://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
        return images.data;
    } catch (error) {
        console.error(error)
        return error;
    }
        
}