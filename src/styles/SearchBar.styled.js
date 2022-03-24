import styled from 'styled-components'

const StyledSearchBar = styled.section`
        margin-left: 77px;
        input{
            width: 1306px;
            height: 54px;
            font-size: 24px;
            border: 1px solid #000000;
        }
        p{
            font-size: 24px;
        }
        @media only screen and (max-width: 1280px){
            input{
                width: 1080px;
            }
        }

        @media only screen and (max-width: 768px){
            input{
                width: 620px;
            }
        }
        @media only screen and (max-width: 480px){
            margin-left: 28px;
            input{
                width: 350px;
            }
        }
        @media only screen and (max-width: 375px){
            input{
                width: 310px;
            }
        }
        
`

export default StyledSearchBar