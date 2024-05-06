import MyComponet from "./MyComponet";

const TemplateExpresion = () => {
    
    const pessoa = {
        name: "Matheus",
        year: "21",
        job: "professor",
    };


    return (
        <div>
            <h2> O nome dele é {pessoa.name}, tem {pessoa.year} anos e trabalha como {pessoa.job}</h2>
            <h3>Nasceu em {2024 - pessoa.year}</h3>

            <MyComponet />
        </div>
    );
};

export default TemplateExpresion;