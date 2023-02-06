import React from 'react';
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import notFound from '../assets/images/notfound.png'



const NotFoundDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  
`
const NotFound = () => {
  const { t } = useTranslation()

    return (
        <NotFoundDiv>
            <img width={200} src={notFound} alt="notFound" />
            <p>{t("labsInfo.notfound")}</p>
        </NotFoundDiv>
    );
}

export default NotFound;
