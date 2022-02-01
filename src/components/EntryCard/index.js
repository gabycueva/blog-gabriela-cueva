import React from 'react';
import {Container, Title, Author, Date, Content, FlexContent, Divider, Button} from "./style";
import PropTypes from "prop-types";
import moment from "moment";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function EntryCard(props) {
    const { data, onDeleteEntry, onHandleInformation } = props;

    return (
        <>
            {data.map((item, index) => (
                <Container key={index}>
                    <Title><div className="title">{item.title}</div><div className="icon"><DeleteOutlinedIcon onClick={onDeleteEntry} /></div></Title>
                    <Divider height={24} />
                    <FlexContent>
                        <Author>{item.author ? item.author : 'Gabriela Cueva'}</Author><Date>{item.date ? item.date : moment().format('MMMM Do YYYY')}</Date>
                    </FlexContent>
                    <Divider height={24} />
                    <Content>
                        {item.body}
                    </Content>
                    <Divider height={16} />
                        <Button onClick={() => onHandleInformation(item)} >Ver entrada completa</Button>
                </Container>
            ))}
        </>
    );
}

EntryCard.propTypes = {
    data: PropTypes.any,
    onDeleteEntry: PropTypes.func,
    onHandleInformation: PropTypes.func,
};

EntryCard.defaultProps = {
    onHandleInformation: () => {},
}

export default EntryCard;
