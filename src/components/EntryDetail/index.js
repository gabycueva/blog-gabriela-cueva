import React from 'react';
import PropTypes from "prop-types";
import moment from "moment";
import {Div, Author, Container, Content, Date, Divider, FlexContent, Title, Button} from "./styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'moment/locale/es';

function EntryDetail(props) {
    const { data, handleGoBack } = props;
    return (
        <div>
            <Div style={{ marginBottom: 16 }} onClick={handleGoBack}>
                <Button><ArrowBackIcon /> <div>Volver al inicio</div></Button>
            </Div>
            <Container>
                <Title><div className="title">{data.title}</div></Title>
                <Divider height={24} />
                <FlexContent>
                    <Author>{data.author ? data.author : 'Gabriela Cueva'}</Author><Date>{data.date ? data.date : moment().format('LL')}</Date>
                </FlexContent>
                <Divider height={24} />
                <Content>
                    {data.body}
                </Content>
                <Divider height={16} />
            </Container>
        </div>
    );
}

EntryDetail.propTypes = {
    data: PropTypes.object,
    handleGoBack: PropTypes.func,
};

export default EntryDetail;
