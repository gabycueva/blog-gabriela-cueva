import React, {useEffect, useState} from 'react';
import EntryCard from "../EntryCard";
import {BlogTitle, Button, CardsContainer, Div, FieldsContainer, Flex} from "./styles";
import {TextField} from "@mui/material";
import EntryDetail from "../EntryDetail";
import SearchIcon from '@mui/icons-material/Search';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function BlogPage() {

    const [entries, setEntries] = useState([]);
    const [newEntry, setNewEntry] = useState(
        {
            title: '',
            author: '',
            date: '',
            body: '',
            entries: [],
        });
    const [dataEntry, setDataEntry] = useState([]);
    const [showDetail, setShowDetail] = useState(false);
    const [status, setStatus] = useState(true);
    const [value, setValue] = useState("");
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        getDummyEntries();
    }, []);

    useEffect(() => {
        if (!status) setOpen(true);
    }, [status]);

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

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const getDummyEntries = async () => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                if (json) {
                    const items = json.slice(0, 2);
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
            body: value,
        }))
    };

    const handleCreateEntry = () => {
        entries.push(newEntry);
        setNewEntry(_new => ({
            ..._new,
            entries: newEntry,
        }));
        clearFields();
    }

    const disabled = !newEntry.title || !newEntry.author || !newEntry.date || !newEntry.body || !status;

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

    const searchValue = value.toLowerCase();
    const updatedList = entries.filter((item) => {
        return Object.keys(item).some(key => item[key].toString().search(searchValue) !== -1);
    });

    const clearFields = () => {
        setNewEntry({
            title: '',
            author: '',
            date: '',
            body: '',
            entries: [],
        })
    }

    return (
        <Div>
            <BlogTitle>Blog - Gabriela Cueva</BlogTitle>
            {showDetail? (
                <>
                    <EntryDetail data={dataEntry} handleGoBack={() => {
                        setShowDetail(false);
                        setDataEntry([]);
                    }} />
                </>
            ) : (
                <Div>
                    <div className="searcher">
                        <input
                            placeholder="Buscar entradas por autor, contenido, titulo..."
                            type="text"
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                        <SearchIcon />
                    </div>
                    <Flex>
                        <CardsContainer>
                            <EntryCard onHandleInformation={data => handleData(data)} data={updatedList} onDeleteEntry={handleDeleteItem} />
                        </CardsContainer>
                        <FieldsContainer>
                            <TextField
                                id="standard-basic"
                                label="Titulo"
                                variant="standard"
                                value={newEntry.title}
                                onChange={e => handleChangeTitle(e.target.value)}
                            />
                            <TextField
                                id="standard-basic"
                                label="Autor"
                                variant="standard"
                                value={newEntry.author}
                                onChange={e => handleChangeAuthor(e.target.value)}
                            />
                            <TextField
                                id="standard-basic"
                                label="Fecha"
                                variant="standard"
                                value={newEntry.date}
                                onChange={e => handleChangeDate(e.target.value)}
                            />
                            <TextField
                                multiline
                                minRows={8}
                                id="standard-basic"
                                label="Escribe aquí..."
                                variant="standard"
                                value={newEntry.body}
                                onChange={e => handleChangeContent(e.target.value)}
                            />
                            <Button disabled={disabled} onClick={() => handleCreateEntry()}>Crear entrada</Button>
                        </FieldsContainer>
                    </Flex>
                </Div>
            )}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Ocurrió un error con la conexión a internet.
                </Alert>
            </Snackbar>
        </Div>
    );
}

export default BlogPage;
