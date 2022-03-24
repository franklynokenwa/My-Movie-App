import styled from 'styled-components'

const StyledHero = styled.section`
        height: 550px;
     img{
        width: 100%;
        height: 550px;

    }
    h2{
        position: relative;
        top: -441px;
        color: white;
        width: 490px;
        font-weight: 700;
        font-size: 72px;
        margin-left: 77px;
        height: 282px;
        line-height: 94px;
    }

    @media only screen and (max-width: 768px){
            h2{
                margin:0 auto;
                text-align:center;
                
            }
        }

    @media only screen and (max-width: 480px){
            h2{
                margin: 0 auto;   
                text-align:center ;
                font-size: 38px;
                width: 320px;
                height: 200px;
            }
        }

    
`

export default StyledHero