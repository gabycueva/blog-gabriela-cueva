import React, {useEffect, useState} from 'react';
import EntryCard from "../EntryCard";
import {BlogTitle, Button, CardsContainer, Div, FieldsContainer, Flex} from "./styles";
import {TextField} from "@mui/material";
import EntryDetail from "../EntryDetail";
import SearchIcon from '@mui/icons-material/Search';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import moment from "moment";
import EmptyState from "../EmptyState";


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function BlogPage() {

    const [entries, setEntries] = useState([]);
    const [newEntry, setNewEntry] = useState(
        {
            title: '',
            author: '',
            date: moment().format('LL'),
            body: '',
            entries: [],
        });
    const [dataEntry, setDataEntry] = useState([]);
    const [showDetail, setShowDetail] = useState(false);
    const [status, setStatus] = useState(true);
    const [value, setValue] = useState("");
    const [open, setOpen] = React.useState(false);
    const [fecha, setFecha] = React.useState(moment().format());

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
            date:  moment().format('LL'),
            body: '',
            entries: [],
        })
    }

    const handleChange = (newValue) => {
        setFecha(newValue);
        setNewEntry(_date => ({
            ..._date,
            date:  moment(fecha).format('LL').toString(),
        }))
    };

    return (
        <Div>
            <div className="header">
                <BlogTitle>Blog - Gabriela Cueva</BlogTitle>
                {!showDetail && (
                    <div className="searcher">
                        <input
                            placeholder="Buscar entradas..."
                            type="text"
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                        <SearchIcon />
                    </div>
                )}
            </div>
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
                            {updatedList.length ? <EntryCard onHandleInformation={data => handleData(data)} data={updatedList} onDeleteEntry={index => handleDeleteItem(index)} /> : <EmptyState />}
                        </CardsContainer>
                        <FieldsContainer>
                            <TextField
                                id="standard-basic"
                                label="Titulo"
                                variant="standard"
                                value={newEntry.title}
                                onChange={e => handleChangeTitle(e.target.value)}
                                InputLabelProps={{
                                    style: {
                                        color: '#38147a'
                                    } }}
                            />
                            <TextField
                                id="standard-basic"
                                label="Autor"
                                variant="standard"
                                value={newEntry.author}
                                onChange={e => handleChangeAuthor(e.target.value)}
                                InputLabelProps={{
                                    style: {
                                        color: '#38147a'
                                    } }}
                            />
                            <LocalizationProvider dateAdapter={DateAdapter}>
                            <DesktopDatePicker
                                label="Fecha"
                                inputFormat="DD/MM/yyyy"
                                value={fecha}
                                onChange={handleChange}
                                renderInput={(params) =>
                                    <TextField
                                        InputLabelProps={{
                                            style: {
                                                color: '#38147a'
                                            } }} variant="standard" {...params}
                                    />}
                            />
                            </LocalizationProvider>
                            <TextField
                                multiline
                                minRows={4}
                                id="standard-basic"
                                label="Escribe aquí..."
                                variant="standard"
                                value={newEntry.body}
                                onChange={e => handleChangeContent(e.target.value)}
                                InputLabelProps={{
                                    style: {
                                        color: '#38147a'
                                    } }}
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
