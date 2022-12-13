import React, { useState } from 'react';
import { Button, Input } from 'antd';
import styled from 'styled-components';
import TextArea from 'antd/es/input/TextArea';
import { useTranslation } from 'react-i18next';

const FormWrapper = styled.div`
  margin-top: 20px;
`;

const CustomBtn = styled(Button)`
  font-weight: 500;
  width: 100%;
  background-color: #4CB40B;
  color: var(--main-content-color);
  border: none
`;

const AppealForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const { t } = useTranslation();
  return (
    <FormWrapper>
      <Input placeholder={t('footer.fullName')} value={fullName} onChange={evt => setFullName(evt.target.value)} />
      <br />
      <br />
      <Input placeholder={t('footer.email')} type="email" value={email} onChange={evt => setEmail(evt.target.value)} />
      <br />
      <br />
      <TextArea rows={4} placeholder={t('footer.text')} value={text} autoSize
                onChange={evt => setText(evt.target.value)} />
      <br />
      <br />
      <CustomBtn>
        {t('footer.sendMessage')}
      </CustomBtn>
    </FormWrapper>
  );
};

export default AppealForm;