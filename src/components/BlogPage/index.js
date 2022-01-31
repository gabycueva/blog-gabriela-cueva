import React, {useEffect, useState} from 'react';
import EntryCard from "../EntryCard";
import {BlogTitle, Button, CardsContainer, Div, FieldsContainer, Flex} from "./styles";
import {TextField} from "@mui/material";
import EntryDetail from "../EntryDetail";
import ErrorIcon from '@mui/icons-material/Error';

function BlogPage() {

    const [entries, setEntries] = useState([]);
    const [newEntry, setNewEntry] = useState(
        {
            title: '',
            author: '',
            date: '',
            content: '',
            entries: [],
        });
    const [dataEntry, setDataEntry] = useState([]);
    const [showDetail, setShowDetail] = useState(false);
    const [status, setStatus] = useState(true);

    useEffect(() => {
        getDummyEntries();
    }, []);

        useEffect(() => {
            function changeStatus() {
                setStatus(navigator.onLine);
            }
            window.addEventListener("online", changeStatus);
            window.addEventListener("offline", changeStatus);
            return () => {
                window.removeEventListener("online", changeStatus);
                window.removeEventListener("offline", changeStatus);
            };
        }, []);

        console.log('estatus', status);

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

    const handleChangeTitle = value => {
        setNewEntry(_entry => ({
            ..._entry,
            title: value,
        }))
    };

    const handleChangeAuthor = value => {
        setNewEntry(_author => ({
            ..._author,
            author: value,
        }))
    };

    const handleChangeDate = value => {
        setNewEntry(_date => ({
            ..._date,
            date: value,
        }))
    };

    const handleChangeContent = value => {
        setNewEntry(_content => ({
            ..._content,
            content: value,
        }))
    };

    const handleCreateEntry = () => {
        entries.push(newEntry);
        setNewEntry(_new => ({
            ..._new,
            entries: newEntry,
        }));
    }

    const disabled = !newEntry.title || !newEntry.author || !newEntry.date || !newEntry.content || !status;

    const handleDeleteItem = index => {
            const newEntries = [...entries];
            const newEntriesBlog = [...newEntry.entries];
            newEntriesBlog.splice(index, 1);
            newEntries.splice(index, 1);
            setNewEntry(_new => ({
                ..._new,
                entries: newEntries,
            }));
            setEntries(newEntries);
    }

    const handleData = data => {
        setDataEntry(data);
        setShowDetail(true);
    }

    return (
        <Div>
            <BlogTitle>Blog - Gabriela Cueva</BlogTitle>
            {!status && <span><ErrorIcon /> ¡Ups! Hubo un error en la conexión a internet.</span>}
            {showDetail? (
                <>
                    <EntryDetail data={dataEntry} handleGoBack={() => {
                        setShowDetail(false);
                        setDataEntry([]);
                    }} />
                </>
            ) : (
                <Div>
                    <Flex>
                        <CardsContainer>
                            <EntryCard onHandleInformation={data => handleData(data)} data={entries} onDeleteEntry={handleDeleteItem} />
                        </CardsContainer>
                        <FieldsContainer>
                            <TextField
                                id="standard-basic"
                                label="Titulo"
                                variant="outlined"
                                value={newEntry.title}
                                onChange={e => handleChangeTitle(e.target.value)}
                            />
                            <TextField
                                id="standard-basic"
                                label="Autor"
                                variant="outlined"
                                value={newEntry.author}
                                onChange={e => handleChangeAuthor(e.target.value)}
                            />
                            <TextField
                                id="standard-basic"
                                label="Fecha"
                                variant="outlined"
                                value={newEntry.date}
                                onChange={e => handleChangeDate(e.target.value)}
                            />
                            <TextField
                                multiline
                                minRows={8}
                                id="standard-basic"
                                label="Escribe aquí..."
                                variant="outlined"
                                value={newEntry.content}
                                onChange={e => handleChangeContent(e.target.value)}
                            />
                            <Button disabled={disabled} onClick={() => handleCreateEntry()}>Crear entrada</Button>
                        </FieldsContainer>
                    </Flex>
                </Div>
            )}
        </Div>
    );
}

export default BlogPage;
