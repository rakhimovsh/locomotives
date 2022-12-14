import { Modal } from 'antd';
import styled from 'styled-components';
import { getTeacherImage } from '../utils/api';

const InfoContainer = styled.div`
  display: flex;

  & img {
    margin-right: 20px;
    border: 0.5px solid black;
  }
`;

const InfoWrapper = styled.div`
  & h2 {
    font-size: 18px;
    font-weight: 400
  }

  & span {
    font-weight: 600;
  }

`;

const TeacherInfoModal = ({ isModalOpen, setIsModalOpen, singleTeacherInfo }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal title="O`qituvchi haqida ma'lumot" open={isModalOpen} onCancel={handleCancel} footer={null} width={700}>
      <InfoContainer>
        <img src={singleTeacherInfo?.picture ? getTeacherImage(singleTeacherInfo?.picture) : null}
             alt={singleTeacherInfo?.firstName} width={300} />
        <InfoWrapper>
          <h2>
            <span>F.I.Sh:</span> {singleTeacherInfo?.lastName + ' ' + singleTeacherInfo?.firstName + ' ' + singleTeacherInfo?.midName}
          </h2>
          <h2>
            <span>Lavozim:</span> {singleTeacherInfo?.position}
          </h2>
          <h2>
            <span>Tel:</span> {singleTeacherInfo?.phone}
          </h2>
          <h2>
            <span>Email:</span> {singleTeacherInfo?.email}
          </h2>
          <h2>
            <span>Qabul vaqtlari:</span> {singleTeacherInfo?.visit_time}
          </h2>
        </InfoWrapper>
      </InfoContainer>
    </Modal>
  );
};

export default TeacherInfoModal;