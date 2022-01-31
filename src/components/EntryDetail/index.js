import React from 'react';
import PropTypes from "prop-types";
import moment from "moment";
import {Author, Container, Content, Date, Divider, FlexContent, Title} from "./styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function EntryDetail(props) {
    const { data, handleGoBack } = props;
    return (
        <div>
            <ArrowBackIcon onClick={handleGoBack} />
            <Container>
                <Title><div className="title">{data.title}</div></Title>
                <Divider height={24} />
                <FlexContent>
                    <Author>{data.author ? data.author : 'Gabriela Cueva'}</Author><Date>{data.date ? data.date : moment().format('MMMM Do YYYY')}</Date>
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
