import React from "react";
import styled from "styled-components";
import ContentsHeader from "./ContentsHeader/ContentsHeader";
import ContentsSectionInfo from "./ContentsSection/ContentsSectionInfo";
import ContentsSectionPeople from "./ContentsSection/ContentsSectionPeople";
import ContentSectionChart from "./ContentsSection/ContentSectionChart";
import ContentsSectionComment from "./ContentsSection/ContentsSectionComment";
import ContentsSectionGallery from "./ContentsSection/ContentsSectionGallery";
import ContentSectionCollection from "./ContentsSection/ContentSectionCollection";
import ContentsSectionRecommend from "./ContentsSection/ContentsSectionRecommend";
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

const Contents = () => {
    return (
        <Wrapper>
            <ContentsHeader data={data} />
            <Content>
                <div className="left">
                    <ContentsSectionInfo data={data} />
                    <ContentsSectionPeople data={data} />
                    <ContentSectionChart data={data} />
                    <ContentsSectionComment data={data} />
                </div>

                <div className="right">
                    <ContentsSectionGallery data={data} />
                </div>
                <div className="bottom">
                    <ContentSectionCollection data={data} />
                    <ContentsSectionRecommend data={data} />
                </div>
            </Content>
        </Wrapper>
    );
};

export default Contents;

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