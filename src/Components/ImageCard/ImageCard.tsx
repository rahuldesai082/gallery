import React, {FunctionComponent} from 'react';
import { Image } from '../StyledElements';
interface ImageCardProps {
    src:string,
    alt:string,
    id:string,
    width?:number,
    height?:number,
    onClick?:(id: string) => void
}
 
const ImageCard: FunctionComponent<ImageCardProps> = (props:ImageCardProps) => {
    return<Image 
        width={props.width && props.width}
        height={props.height && props.height}
        src={props.src}
        alt ={props.alt}
        onClick={()=>{
            props.onClick && props.onClick(props.id)
        }}/>
}
 
export default ImageCard;