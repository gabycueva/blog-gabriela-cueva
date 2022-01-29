import React, {useEffect, useState} from 'react';
import EntryCard from "../EntryCard";
import {CardsContainer, Div, FieldsContainer} from "./styles";
import {TextField} from "@mui/material";

function BlogPage() {

    const [entries, setEntries] = useState([]);

    useEffect(() => {
        getDummyEntries();
    }, []);

    const getDummyEntries = async () => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                if (json) {
                    const items = json.slice(0, 3);
                    setEntries(items);
                }
            });
    }

    return (
        <Div>
            <CardsContainer>
                <EntryCard data={entries} />
            </CardsContainer>
            <FieldsContainer>
                <TextField id="standard-basic" label="Titulo" variant="outlined" />
                <TextField id="standard-basic" label="Autor" variant="outlined" />
                <TextField id="standard-basic" label="Fecha" variant="outlined" />
                <TextField multiline minRows={8} id="standard-basic" label="Escribe aquí..." variant="outlined" />
            </FieldsContainer>
        </Div>
    );
}

export default BlogPage;
