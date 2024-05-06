const Desafio = () => {
    let num = [50, 10]

    const somaNum = () =>{

        return console.log(num[0] + num[1]);
    }
 
    return (
        <div>
            <div>
                <h3>{num[0]}, {num[1]}</h3>
            </div>
            <div>
                <button onClick={somaNum}>Clique para somar</button>
            </div>
        </div>
    );
};

export default Desafio;