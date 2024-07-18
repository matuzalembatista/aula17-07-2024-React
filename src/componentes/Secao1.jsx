import React from 'react'
import ApresentacaoSecao from './ApresentacaoSecao'
import Boxes from './Boxes'

function Secao1() {

    const infoBoxes1 = [
        { info: "INFO 1", key: "1" },
        { info: "INFO 2", key: "3" },
        { info: "INFO 3", key: "3" },
        { info: "INFO 4", key: "4" },
        { info: "INFO 5", key: "5" },
        { info: "INFO 6", key: "6" }
    ];

    return (
        <section>
            <ApresentacaoSecao
                titulo="Titulo 1"
                subTitulo="Subtitulo 1 "
            />

            <Boxes infoBoxes={infoBoxes1}/>

        </section>
    );
}

export default Secao1;