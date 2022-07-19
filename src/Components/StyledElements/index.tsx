import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-around;
    flex-direction: column;
    max-height: 100vh;
`
export const Image = styled.img`
    margin: 1em;
    border: 0.2em solid #332D2A;
    box-shadow: 3px 3px 8px 0px rgba(0, 0, 255, 0.3);
    max-width: 15vw;
    cursor:pointer;
    &:hover {
        transform: scale(1.15);
        transition: all 0.3s ease-in-out;
    }
`
export const ModalWrapper = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`
export const ModalContent = styled.div`
    margin: 15% auto;
    padding: 20px;
    width: 80%;
    height: 100%;
    text-align: center;
`
export const PreviewImage = styled.img`
    height: 100%;
`