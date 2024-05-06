const Events = () => {
    const handlyMyEvent = (e) => {

        console.log(e);
        console.log("ATIVOU EVENTO");
    };

    const renderSomenthing = (x) => {
        if(x){
            return <h1>Isso está sendo renderizado</h1>
        } else {
            return <h1>Também pode ser renderizado</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handlyMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => {console.log("clicou tambem")}}>Clique aqui</button>
            </div>
            {renderSomenthing(true)}
            {renderSomenthing(false)}
        </div>
    );
};

export default Events