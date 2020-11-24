import React from "react";
import styled from "styled-components";

const Hong = process.env.PUBLIC_URL + "/images/hong.jpeg";
const Ha = process.env.PUBLIC_URL + "/images/ha.jpeg";
const Park = process.env.PUBLIC_URL + "/images/park.jpeg";
const Jo = process.env.PUBLIC_URL + "/images/jo.JPG";

const Header = styled.div`
    display: block;
    width: 100%;
    height: 187px;
    background-color: #f69491;
`;

const Logo = styled.div`
    display: flex;
    width: 100%;
    font-size: 100px;
    height: 100%;
    color: white;
    align-items: center;
    justify-content: center;
`;

const Svg = styled.svg`
    :hover {
        animation: fill 0.5s ease forwards 2.5s;

        path:nth-child(1) {
            stroke-dasharray: 392;
            stroke-dashoffset: 392;
            animation: line-anim 2s ease forwards;
        }
        path:nth-child(2) {
            stroke-dasharray: 303;
            stroke-dashoffset: 303;
            animation: line-anim 2s ease forwards 0.3s;
        }
        path:nth-child(3) {
            stroke-dasharray: 256;
            stroke-dashoffset: 256;
            animation: line-anim 2s ease forwards 0.6s;
        }
        path:nth-child(4) {
            stroke-dasharray: 373;
            stroke-dashoffset: 373;
            animation: line-anim 2s ease forwards 0.9s;
        }
        path:nth-child(5) {
            stroke-dasharray: 303;
            stroke-dashoffset: 303;
            animation: line-anim 2s ease forwards 1.2s;
        }
        path:nth-child(6) {
            stroke-dasharray: 376;
            stroke-dashoffset: 376;
            animation: line-anim 2s ease forwards 1.5s;
        }
        path:nth-child(7) {
            stroke-dasharray: 213;
            stroke-dashoffset: 213;
            animation: line-anim 2s ease forwards 1.8s;
        }
        path:nth-child(8) {
            stroke-dasharray: 329;
            stroke-dashoffset: 329;
            animation: line-anim 2s ease forwards 2.1s;
        }
        @keyframes line-anim {
            to {
                stroke-dashoffset: 0;
            }
        }

        @keyframes fill {
            from {
                fill: transparent;
            }
            to {
                fill: white;
            }
        }
    }
`;

const Section = styled.div`
    max-width: 100%;
    width: 1000px;
    margin: auto;
    /* padding-left: calc(96px + env(safe-area-inset-left));
  padding-right: calc(96px + env(safe-area-inset-right)); */
`;

const TeamDesc = styled.div`
    display: block;
`;

const Skills = styled.div`
    display: block;
`;

const Ul = styled.div`
    display: inline-block;
    list-style: none;

    :nth-child(1) {
        padding-right: 300px;
    }
`;

const Profile = styled.div`
    display: flex;

    :nth-child(2n) {
        padding-top: 100px;
    }
`;

const Person = styled.div`
    width: 150px;
    height: 150px;
    overflow: hidden;
    background-size: cover;
    object-fit: contain;
    border-radius: 50%;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export default function Team() {
    return (
        <div>
            <Header>
                <Logo>
                    <Svg
                        id="logo"
                        width="480"
                        height="88"
                        viewBox="0 0 480 88"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M64.3613 46.0889C64.3613 49.7627 63.8789 53.3066 62.9141 56.7207C61.9863 60.0977 60.6504 63.2705 58.9062 66.2393C57.1621 69.1709 55.084 71.8613 52.6719 74.3105C50.2598 76.7227 47.5693 78.8008 44.6006 80.5449C41.6318 82.2891 38.4404 83.6436 35.0264 84.6084C31.6494 85.5361 28.124 86 24.4502 86H0.40332V6.17773H24.4502C28.124 6.17773 31.6494 6.66016 35.0264 7.625C38.4404 8.55273 41.6318 9.88867 44.6006 11.6328C47.5693 13.377 50.2598 15.4736 52.6719 17.9229C55.084 20.335 57.1621 23.0254 58.9062 25.9941C60.6504 28.9258 61.9863 32.0986 62.9141 35.5127C63.8789 38.8896 64.3613 42.415 64.3613 46.0889ZM48.3857 46.0889C48.3857 42.7861 47.7549 39.6875 46.4932 36.793C45.2686 33.8984 43.5615 31.375 41.3721 29.2227C39.2197 27.0332 36.6777 25.3076 33.7461 24.0459C30.8516 22.7842 27.7529 22.1533 24.4502 22.1533H16.4902V70.0244H24.4502C27.7529 70.0244 30.8516 69.4121 33.7461 68.1875C36.6777 66.9258 39.2197 65.2188 41.3721 63.0664C43.5615 60.877 45.2686 58.335 46.4932 55.4404C47.7549 52.5088 48.3857 49.3916 48.3857 46.0889Z"
                            stroke="#F60456"
                            stroke-width="5"
                        />
                        <path
                            d="M97.0918 71.416C97.6855 71.6016 98.2793 71.7314 98.873 71.8057C99.4668 71.8428 100.061 71.8613 100.654 71.8613C102.139 71.8613 103.567 71.6572 104.94 71.249C106.313 70.8408 107.594 70.2656 108.781 69.5234C110.006 68.7441 111.082 67.8164 112.01 66.7402C112.975 65.627 113.754 64.4023 114.348 63.0664L125.48 74.2549C124.07 76.2588 122.438 78.0586 120.582 79.6543C118.764 81.25 116.778 82.6045 114.626 83.7178C112.511 84.8311 110.266 85.666 107.891 86.2227C105.553 86.8164 103.141 87.1133 100.654 87.1133C96.4609 87.1133 92.5088 86.334 88.7979 84.7754C85.124 83.2168 81.8955 81.0459 79.1123 78.2627C76.3662 75.4795 74.1953 72.1768 72.5996 68.3545C71.0039 64.4951 70.2061 60.2646 70.2061 55.6631C70.2061 50.9502 71.0039 46.6455 72.5996 42.749C74.1953 38.8525 76.3662 35.5312 79.1123 32.7852C81.8955 30.0391 85.124 27.9053 88.7979 26.3838C92.5088 24.8623 96.4609 24.1016 100.654 24.1016C103.141 24.1016 105.571 24.3984 107.946 24.9922C110.321 25.5859 112.566 26.4395 114.682 27.5527C116.834 28.666 118.838 30.0391 120.693 31.6719C122.549 33.2676 124.182 35.0674 125.592 37.0713L97.0918 71.416ZM104.885 40.0771C104.18 39.8174 103.475 39.6504 102.77 39.5762C102.102 39.502 101.396 39.4648 100.654 39.4648C98.5762 39.4648 96.6094 39.8545 94.7539 40.6338C92.9355 41.376 91.3398 42.4521 89.9668 43.8623C88.6309 45.2725 87.5732 46.9795 86.7939 48.9834C86.0146 50.9502 85.625 53.1768 85.625 55.6631C85.625 56.2197 85.6436 56.8506 85.6807 57.5557C85.7549 58.2607 85.8477 58.9844 85.959 59.7266C86.1074 60.4316 86.2744 61.1182 86.46 61.7861C86.6455 62.4541 86.8867 63.0479 87.1836 63.5674L104.885 40.0771Z"
                            stroke="#F60456"
                            stroke-width="5"
                        />
                        <path
                            d="M149.416 86L126.705 26.3838H144.017L157.042 63.5674L170.012 26.3838H187.379L164.668 86H149.416Z"
                            stroke="#F60456"
                            stroke-width="5"
                        />
                        <path
                            d="M210.758 22.1533V54.1045H226.733C228.923 54.1045 230.982 53.6963 232.912 52.8799C234.842 52.0264 236.53 50.876 237.978 49.4287C239.425 47.9814 240.557 46.293 241.373 44.3633C242.227 42.3965 242.653 40.3184 242.653 38.1289C242.653 35.9395 242.227 33.8799 241.373 31.9502C240.557 29.9834 239.425 28.2764 237.978 26.8291C236.53 25.3818 234.842 24.25 232.912 23.4336C230.982 22.5801 228.923 22.1533 226.733 22.1533H210.758ZM210.758 86H194.782V6.17773H226.733C229.665 6.17773 232.485 6.56738 235.194 7.34668C237.903 8.08887 240.427 9.16504 242.765 10.5752C245.14 11.9482 247.292 13.6182 249.222 15.585C251.188 17.5146 252.858 19.667 254.231 22.042C255.642 24.417 256.718 26.959 257.46 29.668C258.239 32.377 258.629 35.1973 258.629 38.1289C258.629 42.5078 257.794 46.6455 256.124 50.542C254.454 54.4014 252.172 57.7783 249.277 60.6729C246.383 63.5674 242.987 65.8496 239.091 67.5195C235.231 69.1895 231.112 70.0244 226.733 70.0244H210.758V86Z"
                            stroke="#F60456"
                            stroke-width="5"
                        />
                        <path
                            d="M290.135 71.416C290.729 71.6016 291.322 71.7314 291.916 71.8057C292.51 71.8428 293.104 71.8613 293.697 71.8613C295.182 71.8613 296.61 71.6572 297.983 71.249C299.356 70.8408 300.637 70.2656 301.824 69.5234C303.049 68.7441 304.125 67.8164 305.053 66.7402C306.018 65.627 306.797 64.4023 307.391 63.0664L318.523 74.2549C317.113 76.2588 315.48 78.0586 313.625 79.6543C311.807 81.25 309.821 82.6045 307.669 83.7178C305.554 84.8311 303.309 85.666 300.934 86.2227C298.596 86.8164 296.184 87.1133 293.697 87.1133C289.504 87.1133 285.552 86.334 281.841 84.7754C278.167 83.2168 274.938 81.0459 272.155 78.2627C269.409 75.4795 267.238 72.1768 265.643 68.3545C264.047 64.4951 263.249 60.2646 263.249 55.6631C263.249 50.9502 264.047 46.6455 265.643 42.749C267.238 38.8525 269.409 35.5312 272.155 32.7852C274.938 30.0391 278.167 27.9053 281.841 26.3838C285.552 24.8623 289.504 24.1016 293.697 24.1016C296.184 24.1016 298.614 24.3984 300.989 24.9922C303.364 25.5859 305.609 26.4395 307.725 27.5527C309.877 28.666 311.881 30.0391 313.736 31.6719C315.592 33.2676 317.225 35.0674 318.635 37.0713L290.135 71.416ZM297.928 40.0771C297.223 39.8174 296.518 39.6504 295.812 39.5762C295.145 39.502 294.439 39.4648 293.697 39.4648C291.619 39.4648 289.652 39.8545 287.797 40.6338C285.979 41.376 284.383 42.4521 283.01 43.8623C281.674 45.2725 280.616 46.9795 279.837 48.9834C279.058 50.9502 278.668 53.1768 278.668 55.6631C278.668 56.2197 278.687 56.8506 278.724 57.5557C278.798 58.2607 278.891 58.9844 279.002 59.7266C279.15 60.4316 279.317 61.1182 279.503 61.7861C279.688 62.4541 279.93 63.0479 280.227 63.5674L297.928 40.0771Z"
                            stroke="#F60456"
                            stroke-width="5"
                        />
                        <path
                            d="M383.483 86H379.81L373.909 77.8174C372.462 79.1162 370.922 80.3408 369.289 81.4912C367.693 82.6045 366.005 83.5879 364.224 84.4414C362.442 85.2578 360.605 85.9072 358.713 86.3896C356.857 86.8721 354.965 87.1133 353.035 87.1133C348.842 87.1133 344.89 86.334 341.179 84.7754C337.505 83.1797 334.276 80.9902 331.493 78.207C328.747 75.3867 326.576 72.0654 324.98 68.2432C323.385 64.3838 322.587 60.1904 322.587 55.6631C322.587 51.1729 323.385 46.998 324.98 43.1387C326.576 39.2793 328.747 35.9395 331.493 33.1191C334.276 30.2988 337.505 28.0908 341.179 26.4951C344.89 24.8994 348.842 24.1016 353.035 24.1016C354.371 24.1016 355.744 24.2129 357.154 24.4355C358.602 24.6582 359.993 25.0293 361.329 25.5488C362.702 26.0312 363.982 26.6807 365.17 27.4971C366.357 28.3135 367.359 29.3154 368.176 30.5029V2.6709H383.483V86ZM368.176 55.6631C368.176 53.585 367.768 51.5811 366.951 49.6514C366.172 47.6846 365.096 45.959 363.723 44.4746C362.35 42.9531 360.735 41.7471 358.88 40.8564C357.062 39.9287 355.113 39.4648 353.035 39.4648C350.957 39.4648 348.99 39.8359 347.135 40.5781C345.316 41.3203 343.721 42.3965 342.348 43.8066C341.012 45.1797 339.954 46.8682 339.175 48.8721C338.396 50.876 338.006 53.1396 338.006 55.6631C338.006 57.8525 338.396 59.9307 339.175 61.8975C339.954 63.8643 341.012 65.5898 342.348 67.0742C343.721 68.5586 345.316 69.7275 347.135 70.5811C348.99 71.4346 350.957 71.8613 353.035 71.8613C355.113 71.8613 357.062 71.416 358.88 70.5254C360.735 69.5977 362.35 68.3916 363.723 66.9072C365.096 65.3857 366.172 63.6602 366.951 61.7305C367.768 59.7637 368.176 57.7412 368.176 55.6631Z"
                            stroke="#F60456"
                            stroke-width="5"
                        />
                        <path
                            d="M413.041 10.1855C413.041 11.5957 412.763 12.9131 412.206 14.1377C411.687 15.3623 410.963 16.4385 410.035 17.3662C409.107 18.2568 408.013 18.9805 406.751 19.5371C405.526 20.0566 404.209 20.3164 402.799 20.3164C401.389 20.3164 400.053 20.0566 398.791 19.5371C397.566 18.9805 396.49 18.2568 395.562 17.3662C394.672 16.4385 393.948 15.3623 393.392 14.1377C392.872 12.9131 392.612 11.5957 392.612 10.1855C392.612 8.8125 392.872 7.51367 393.392 6.28906C393.948 5.02734 394.672 3.95117 395.562 3.06055C396.49 2.13281 397.566 1.40918 398.791 0.889648C400.053 0.333008 401.389 0.0546875 402.799 0.0546875C404.209 0.0546875 405.526 0.333008 406.751 0.889648C408.013 1.40918 409.107 2.13281 410.035 3.06055C410.963 3.95117 411.687 5.02734 412.206 6.28906C412.763 7.51367 413.041 8.8125 413.041 10.1855ZM410.425 86H395.117V26.3838H410.425V86Z"
                            stroke="#F60456"
                            stroke-width="5"
                        />
                        <path
                            d="M479.782 86H476.108L470.208 77.8174C468.761 79.1162 467.221 80.3408 465.588 81.4912C463.992 82.6045 462.304 83.5879 460.522 84.4414C458.741 85.2578 456.904 85.9072 455.012 86.3896C453.156 86.8721 451.264 87.1133 449.334 87.1133C445.141 87.1133 441.188 86.4082 437.478 84.998C433.804 83.5879 430.575 81.5469 427.792 78.875C425.046 76.166 422.875 72.8633 421.279 68.9668C419.684 65.0703 418.886 60.6357 418.886 55.6631C418.886 51.0244 419.684 46.7754 421.279 42.916C422.875 39.0195 425.046 35.6797 427.792 32.8965C430.575 30.1133 433.804 27.9609 437.478 26.4395C441.188 24.8809 445.141 24.1016 449.334 24.1016C451.264 24.1016 453.175 24.3428 455.067 24.8252C456.96 25.3076 458.797 25.9756 460.578 26.8291C462.359 27.6826 464.048 28.6846 465.644 29.835C467.276 30.9854 468.798 32.2285 470.208 33.5645L476.108 26.4951H479.782V86ZM464.475 55.6631C464.475 53.585 464.066 51.5811 463.25 49.6514C462.471 47.6846 461.395 45.959 460.021 44.4746C458.648 42.9531 457.034 41.7471 455.179 40.8564C453.36 39.9287 451.412 39.4648 449.334 39.4648C447.256 39.4648 445.289 39.8174 443.434 40.5225C441.615 41.2275 440.02 42.2666 438.646 43.6396C437.311 45.0127 436.253 46.7197 435.474 48.7607C434.694 50.7646 434.305 53.0654 434.305 55.6631C434.305 58.2607 434.694 60.5801 435.474 62.6211C436.253 64.625 437.311 66.3135 438.646 67.6865C440.02 69.0596 441.615 70.0986 443.434 70.8037C445.289 71.5088 447.256 71.8613 449.334 71.8613C451.412 71.8613 453.36 71.416 455.179 70.5254C457.034 69.5977 458.648 68.3916 460.021 66.9072C461.395 65.3857 462.471 63.6602 463.25 61.7305C464.066 59.7637 464.475 57.7412 464.475 55.6631Z"
                            stroke="#F60456"
                            stroke-width="5"
                        />
                    </Svg>
                </Logo>
            </Header>

            <Section>
                <TeamDesc>
                    <p>
                        <h1>우리 팀명</h1>
                    </p>
                    <h3>우리가 구현하고자 하는 요소들과 비전들 description</h3>
                </TeamDesc>
                <Skills>
                    <Ul>
                        <h3>Front-end</h3>
                        <li>Html, Css, Javascript</li>
                        <li>React</li>
                        <li>Redux</li>
                    </Ul>
                    <Ul>
                        <h3>Back-end</h3>
                        <li>Html, Css, Javascript</li>
                        <li>React</li>
                        <li>Redux</li>
                    </Ul>
                </Skills>

                <Profile>
                    <div className="card">
                        <Person>
                            <Img src={Hong} alt="Hong" />
                        </Person>
                        <div>
                            <h1>홍효석</h1>
                            <h2>010-9968-8236</h2>
                            <h3>https://github.com/hongcoder</h3>
                            <h3>honghs93@gmail.com</h3>
                        </div>
                    </div>

                    <div className="card">
                        <Person>
                            <Img src={Park} alt="Park" />
                        </Person>
                        <div>
                            <h1>박경덕</h1>
                            <h2>010-8782-2235</h2>
                            <h3>https://github.com/wert1229</h3>
                            <h3>wert1229@gmail.com</h3>
                        </div>
                    </div>
                </Profile>
                <Profile>
                    <div className="card">
                        <Person>
                            <Img src={Ha} alt="Ha" />
                        </Person>
                        <div>
                            <h1>하경윤</h1>
                            <h2>010-9206-6598</h2>
                            <h3>https://github.com/kyungyoonha</h3>
                            <h3>gkb10a@naver.com</h3>
                        </div>
                    </div>
                    <div className="card">
                        <Person>
                            <Img src={Jo} alt="Hong" />
                        </Person>
                        <div>
                            <h1>조정우</h1>
                            <h2>010-9968-8236</h2>
                            <h3>https://github.com/JJungwoo</h3>
                            <h3>jungwoo5759@gmail.com</h3>
                        </div>
                    </div>
                </Profile>
            </Section>
        </div>
    );
}
