import React from 'react';
import {Container, Title, Author, Date, Content, FlexContent, Divider} from "./style";
import PropTypes from "prop-types";
import moment from "moment";

function EntryCard(props) {
    const { data } = props;

    return (
        <>
            {data.map(item => (
                <Container>
                    <Title><div>{item.title}</div></Title>
                    <Divider height={24} />
                    <FlexContent>
                        <Author>{item.author ? item.author : 'Gabriela Cueva'}</Author><Date>{item.date ? item.date : moment().format('MMMM Do YYYY, h:mm:ss a')}</Date>
                    </FlexContent>
                    <Divider height={24} />
                    <Content>
                        {item.body}
                    </Content>
                    <Divider height={16} />
                </Container>
            ))}
        </>
    );
}

EntryCard.propTypes = {
    data: PropTypes.any,
};

export default EntryCard;
