import axios from 'axios';
import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import ImageCard from '../../Components/ImageCard/ImageCard';
import { ModalContent, ModalWrapper, PreviewImage, Wrapper } from '../../Components/StyledElements';
import { getImages } from '../../Services/Api';
import useOnClickOutside from '../../Services/Hooks/useOnClickOutside';
import { ImageDataInterface } from '../../Services/interface';
interface GalleryProps {
    
}
 
const Gallery: FunctionComponent<GalleryProps> = () => {
    const[images, setImages] = useState<ImageDataInterface[]>([]);
    const[isLoading, setIsLoading] = useState(false);
    const[error, setError] = useState('');
    const[previewImage, setPreviewImage] = useState<ImageDataInterface|null>(null);
    const modalRef = useRef(null);
    const getImageData = () => {
        setIsLoading(true);
        getImages().then(res => {
            setImages(res);
        }).catch(err =>setError(err))
        .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        getImageData()
    },[])
    
    useOnClickOutside(modalRef, () => {
        if (previewImage) {
            setPreviewImage(null);
        }
    });

    const handleImagePreview = (id:String) => {
        const previewImage:any = images.find((image:ImageDataInterface) => image.id === id);
        setPreviewImage(previewImage);
    }
    return <div>
        <Wrapper>
            {isLoading ? <h1>Loading...</h1> : null}
            {error ? <h1>{error}</h1> : null}
            {
                images.length ? 
                    (images.map((image:any) => 
                        <ImageCard 
                            id={image.id}
                            src={image.urls.thumb}
                            alt={image.alt_description}
                            onClick={handleImagePreview}/>)) 
                    : null}
        </Wrapper>
        {previewImage ? <ModalWrapper>
            <ModalContent className='content'>
                <PreviewImage id={previewImage.id} src={previewImage.urls.regular} alt={previewImage.alt_description} ref={modalRef}/>
            </ModalContent>
        </ModalWrapper>:null}
    </div>;
}
 
export default Gallery;