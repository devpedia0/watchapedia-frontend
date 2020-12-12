import React from "react";
import styled from "styled-components";
import DetailHeader from "./DetailHeader/DetailHeader";
import DetailSectionInfo from "./DetailSection/DetailSectionInfo";
import DetailSectionPeople from "./DetailSection/DetailSectionPeople";
import DetailSectionChart from "./DetailSection/DetailSectionChart";
import DetailSectionComment from "./DetailSection/DetailSectionComment";
import DetailSectionGallery from "./DetailSection/DetailSectionGallery";
import DetailSectionCollection from "./DetailSection/DetailSectionCollection";

const data = {
    title: "이웃사촌",
    category: "드라마",
    country: "한국",
    year: "2020",
    status: "wish",
    rate: 3.4,
    num: 88,
    imgUrl:
        "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1605487645/ciydhyimcw07k4e516hu.jpg",
};

const data2 = {
    type: "award",
    title: "왓챠피디아 컬렉션",
    list: [],
};

const Detail = () => {
    return (
        <Wrapper>
            <DetailHeader data={data} />
            <Content>
                <div className="left">
                    <DetailSectionInfo data={data} />
                    <DetailSectionPeople data={data} />
                    <DetailSectionChart data={data} />
                    <DetailSectionComment data={data} />
                </div>

                <div className="right">
                    <DetailSectionGallery data={data} />
                </div>
                <div className="bottom" style={{ height: "300px" }}>
                    <DetailSectionCollection data={data} />
                </div>
            </Content>
        </Wrapper>
    );
};

export default Detail;

const Wrapper = styled.div`
    background: #f8f8f8;
`;

const Content = styled.div`
    overflow: hidden;
    margin: 0px auto;

    .left {
        margin: 12px 0 0;
        background: #fff;
        border-color: #e3e3e3 !important;
        overflow: hidden;

        @media only screen and (min-width: 719px) {
            float: left;
            width: 100%;
            margin: 0;
        }

        @media only screen and (min-width: 1023px) {
            float: left;
            width: 640px;
            padding: 0 8px;
            border-right: 1px solid;
            border-left: 1px solid;
            border-top: 1px solid;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
        }
    }

    @media only screen and (min-width: 719px) {
        padding: 28px 0 48px;
        max-width: 640px;
    }

    @media only screen and (min-width: 1023px) {
        max-width: 976px;
    }

    .right {
        @media only screen and (min-width: 719px) {
            float: left;
            width: 100%;
        }

        @media only screen and (min-width: 1023px) {
            float: right;
            width: 320px;
            padding: 0 8px;
        }
    }

    .bottom {
        background: #fff;
        border-color: #e3e3e3 !important;
        overflow: hidden;
        background: rgb(255, 255, 255);
        overflow: hidden;
        border-color: rgb(227, 227, 227) !important;

        @media only screen and (min-width: 718px) {
            float: left;
            width: 100%;
        }

        @media only screen and (min-width: 1023px) {
            float: left;
            width: 640px;
            padding: 0px 8px;
            border-right: 1px solid;
            border-left: 1px solid;
            border-bottom: 1px solid;
            border-bottom-right-radius: 6px;
            border-bottom-left-radius: 6px;
        }
    }
`;
