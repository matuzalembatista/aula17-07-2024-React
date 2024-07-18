import React from "react";
import Box from './Box';


function Boxes({infoBoxes}) {

    const showBoxes = () => {
        return (
            infoBoxes.map(box => <Box key={box.key} info={box.info} />
            )
        );
    };

    return (
        <div className="containerSecao">
            {showBoxes()} 
        </div>
    );
}

export default Boxes;
