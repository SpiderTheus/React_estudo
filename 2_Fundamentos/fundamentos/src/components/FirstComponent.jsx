// arquivos de estilo inicio

import MyComponet from "./MyComponet";

const PrimeiroComponente = () => {
    return (
        //essa funçãp faz isso

       <div>
            {/*Comentario com chaves */}
            <h1>Meu primeiro componente</h1>
            <p className="pe">Meu texto, a clase sermpre tem que ser escrita por ClassName</p>
            <MyComponet />
       </div>
    );
};

export default PrimeiroComponente;