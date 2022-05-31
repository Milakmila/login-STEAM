import styled from "styled-components";

const colores={
    borde:"#0075ff",
    error:"#0075ff",
    exito:"#0075ff"
	
}

const Formulario=styled.form`
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:20px;
    @media (max-width:800px){
        grid-template-columns:1fr;
}
`;

const Label=styled.label`
    display:block;
    font-weight:700;
    padding:10px;
    min-height:40px;
    cursor:pointer;

`;
const GrupoInput=styled.div`
position: relative;
z-index:90
`;
const Input=styled.input`
    width:100%;
    background: #fff;
    height:45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: 0.3s ease all;
    border: 3px solid transparent;

    &:focus{
        border:3px solid ${colores.borde};
        outline:none;

    }

`;
const LeyendaError=styled.p`
    font-size: 12px;
    color: ${colores.error}

`;

const ContendoerTerminos=styled.div`
    grid-column: span 2;
    input{
        margin-right:10px
    }

`;

const ContendoerBotonCentrado=styled.div`
    display:flex;
    justify-content: column;
    align-items:center;
    grid-column: span 2;

`;
export{Formulario, Label, Input, LeyendaError, ContendoerTerminos, GrupoInput}