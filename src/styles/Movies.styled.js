import styled from 'styled-components'

const StyledMovies = styled.section`
    width: 300px;
    height: 300px;
    background-color: #000000;
    color: #EFEFEF;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 31.25px;
    font-size: 24px;
    margin-bottom: 10rem;

    @media only screen and (max-width: 480px){
            margin-bottom: 2rem;
        }

    @media only screen and (max-width: 375px){
            margin-bottom: -1rem;
        }

`

export default StyledMovies