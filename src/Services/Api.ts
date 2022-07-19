import axios from "axios"
import { IMAGE_API } from "./Constants";

export const getImages = async () => {
    try{
        const images = await axios.get(IMAGE_API)
        return images.data;
    } catch (error) {
        console.error(error)
        return error;
    }
        
}