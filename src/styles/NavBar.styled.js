import styled from 'styled-components'

const StyledNavBar = styled.section`
    background: #292929;
    height: 140px;
    padding-left: 77px;
    display: flex;
    align-items: center;
    width: 100%;
    
    h1{
        color: #E4E4E4;
        border: 1px solid #7A7A7A;        
        width: 193px;
        text-align: center;
        padding: 14px;
        
    }
    
    @media only screen and (max-width: 768px){
            h1{
                margin:0 200px;
                text-align:center;                
            }
        }

    @media only screen and (max-width: 480px){
            h1{
                margin-left: 64px; 
                font-size: 20px;
                width: 108px;
            }
        }
    @media only screen and (max-width: 375px){
            h1{
                margin-left: 11px; 
                font-size: 20px;
            }
        }

`

export default StyledNavBar