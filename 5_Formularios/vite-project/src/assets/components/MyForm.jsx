import { useState } from 'react'
import './mtForm.css'

const MyForm = ({user}) => {
    /* 6 - controle de input */


    /* 3 - gerenciamento de dados */
const [name, setName] = useState(user ? user.name : '');
const [email, setEmail] = useState(user ? user.email : '');

const [bio, setBio] = useState();
const [clase, setClase] = useState();

const salvarNome = (e) => {
    setName(e.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, clase);

    /* 7 - Limpar Formulario */
    setName('')
    setEmail('')
    setBio('')
};


return (
    <div>
        {/* 5 - envio de form */}
        {/* 1 - criação do form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="name" placeholder='Digite o seu nome' onChange={salvarNome} value={name}/>
            </div>
        <label>
            <span>E-mail:</span>
            {/* 4 - simplificação de função */}
            <input type="email" placeholder='Digite o seu email' onChange={(e) => setEmail(e.target.value)} value={email}/>
        </label>

            {/* 8 - textarea */}
            <label>
                <span>bio</span>
                <textarea name="bio" placeholder='Descrição do usuario' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* 9 - select */}
            <label>
                <span>Clase</span>
                <select name="clase" onChange={(e) => setClase(e.target.value)}>
                    <option value="pobre">Pobre</option>
                    <option value="rico">Rico</option>
                    <option value="milio">Milionario</option>
                    <option value="bilio">Bilhonario</option>
                </select>
            </label>


            <input type="submit" value="enviar" />
        </form>
        {/* 2 - label envolvendo input */}
        
    </div>
)
}

export default MyForm