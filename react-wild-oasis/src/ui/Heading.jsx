import styled, { css } from 'styled-components'

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;

      @media only screen and (max-width: 68.75em) {
        font-size: 2rem;
      }

      @media only screen and (max-width: 53.125em) {
        font-size: 1.5rem;
      }
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
      font-weight: 600;

      @media only screen and (max-width: 68.75em) {
        font-size: 1.5rem;
      }
    `}
    
    ${(props) =>
      props.as === 'h3' &&
      css`
        font-size: 2rem;
        font-weight: 500;

        @media only screen and (max-width: 68.75em) {
          font-size: 1.5rem;
        }
      `}
    
 ${(props) =>
   props.as === 'h4' &&
   css`
     font-size: 3rem;
     font-weight: 600;
     text-align: center;

     @media only screen and (max-width: 68.75em) {
       font-size: 2rem;
     }

     @media only screen and (max-width: 53.125em) {
       font-size: 1.5rem;
     }
   `}

  line-height: 1.4;
`

export default Heading
