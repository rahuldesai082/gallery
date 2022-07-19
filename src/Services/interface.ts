export interface ImageDataInterface {
    id: string;
    width: number;
    height: number;
    color: string;
    description?: string;
    alt_description: string;
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
    };
}