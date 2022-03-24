import styled from 'styled-components'

const StyledMoviesContainer = styled.section`
    margin-left: 77px;
    margin-right: 20px;
    margin-top: 2rem;
    
    .movies{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
        grid-gap: 50px;
        justify-content: center;
    }

    @media only screen and (max-width: 1280px){
            .movies{
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
                grid-gap: 100px;
                
            }
        }

        @media only screen and (max-width: 768px){
            .movies{
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
                grid-gap: 47.6px;
                
            }
        }

        @media only screen and (max-width: 480px){
            margin-left: 28px;
            .movies{
                grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
                grid-gap: 176px;
            }
        }
        @media only screen and (max-width: 375px){
            .movies{
                grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
                grid-gap:135.1px;
            }
        }
   
`

export default StyledMoviesContainer