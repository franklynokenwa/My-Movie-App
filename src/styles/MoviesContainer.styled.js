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
   
`

export default StyledMoviesContainer