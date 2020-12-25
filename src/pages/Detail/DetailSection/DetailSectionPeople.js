import React from "react";
import styled from "styled-components";
import { CardListSlick, Card } from "../../../components";
import { Divider } from "./DetailSectionInfo";
const item = {
    name: "name",
    description: "description",
    profileImagePath: "",
};

const DetailSectionPeople = () => {
    return (
        <Wrapper>
            <CardListSlick
                title="출연/제작"
                sizeHeader="sm"
                sizeCard="sm"
                horizon
            >
                {[...new Array(10)].map((_, idx) => (
                    <Card key={idx} item={item} width="49%" radius="4%" />
                ))}
            </CardListSlick>
            <Divider />
        </Wrapper>
    );
};

export default React.memo(DetailSectionPeople);

const Wrapper = styled.div`
    margin: 0 20px;
`;