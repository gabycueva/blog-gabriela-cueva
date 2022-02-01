import React from 'react';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import {Div} from "./styles";

function EmptyState() {

    return (
        <Div>
            <div>No se encontraron entradas</div><SentimentVeryDissatisfiedIcon />
        </Div>
    );
}

export default EmptyState;
