import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
    
}
:root{
    --Color-primary:#FF577F;
    --Color-primary-Focus:#FF427F;
    --Color-primary-Negative:#59323F;
    --Grey4:#121214;
    --Grey3:#212529;
    --Grey2:#343B41;
    --Grey1:#868E96;
    --Grey0:#F8F9FA;
    --Sucess:#3FE864;
    --Negative:#E83F5B;
    --Red:#c53030
}
body{
    background-color:#000000;
    color: var(--Grey0);
    font-family: 'Inter', sans-serif;
    font-size:1rem;
}
button{
    cursor:pointer;
}
a{
    text-decoration:none;
}
`;
