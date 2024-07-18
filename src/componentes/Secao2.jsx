import React from 'react'
import ApresentacaoSecao from './ApresentacaoSecao'
import Boxes from './Boxes'

function Secao2() {

    const infoBoxes2 = [
        { info: "INFO 1", key: "1" },
        { info: "INFO 2", key: "3" },
        { info: "INFO 3", key: "3" },
        { info: "INFO 4", key: "4" }
    ];

    return (
        <section>
            <ApresentacaoSecao
                titulo="Titulo 2"
                subTitulo="Subtitulo 2 "
            />

            <Boxes infoBoxes={infoBoxes2}/>

        </section>
    );
}

export default Secao2;