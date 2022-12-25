import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';
import styled from 'styled-components';
import uzb from '../assets/images/flag_uzb.png';
import ru from '../assets/images/flag_ru.png';
import uk from '../assets/images/flag_uk.png';


const CustomSelect = styled(Select)`
  width: 120px;
  @media screen and (max-width: 950px) {
    width: 100px;
    margin-right: 30px;
  }

  & .ant-select-selector {
    align-items: center;
    height: 45px !important;
    border-radius: 20px !important;
    background-color: transparent !important;
    color: var(--main-bg-color);
    font-size: ${props => props?.mobile ? '14' : '20'}px !important;
    @media screen and (max-width: 950px) {
      height: 35px !important;
    }
  }

  & .ant-select-selection-item {
    display: flex;
    align-items: center;

    & img {
      margin-right: 10px;
      @media screen and (max-width: 950px) {
        width: 25px;
      }
    }
  }

  & svg {
    fill: var(--main-bg-color);
  }
`;

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
    window.location.reload();
  };
  const { Option } = Select;

  return (
    <CustomSelect defaultValue={i18n.language} onChange={handleChange} mobile="true">
      <Option value="uz"><img src={uzb} alt="uzbekistan flag" width={30} /> UZ</Option>
      <Option value="ru"><img src={ru} alt="russia flag" width={30} /> RU</Option>
      <Option value="en"><img src={uk} alt="uk flag" width={30} /> EN</Option>
    </CustomSelect>
  );
};

export default LanguageSelect;