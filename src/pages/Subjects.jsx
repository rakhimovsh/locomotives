import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Select, Spin } from "antd";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container.jsx";
import { getSubjects, getUserSubjects } from "../redux/actions/subject.js";
import { useTranslation } from "react-i18next";


const Wrapper = styled.div`
  padding: 20px 0;
`;
const CusRow = styled(Row)`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 200px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

const Subjects = () => {
  const dispatch = useDispatch();
  const { userSubjects } = useSelector((state) => state.subject);
  const [course, setCourse] = useState(1);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { t } = useTranslation()


  useEffect(() => {
    dispatch(getUserSubjects(page, course));
  }, [course, page]);

  const handleChange = (value) => {
    setCourse(value);
  };
  return (
    <Container>
      <Wrapper>
        <div>
          <Select
            defaultValue="1"
            style={{ width: 150 }}
            onChange={handleChange}
            options={[
              {
                value: "1",
                label: `1-${t("labsInfo.course").toLocaleLowerCase()}`,
              },
              {
                value: "2",
                label: `2-${t("labsInfo.course").toLocaleLowerCase()}`,
              },
              {
                value: "3",
                label: `3-${t("labsInfo.course").toLocaleLowerCase()}`,
              },
              {
                value: "4",
                label: `4-${t("labsInfo.course").toLocaleLowerCase()}`,
              },
            ]}
          />
        </div>
        {
          userSubjects?.length == 0 ? "Ma'lumot topilmadi"
          :
          <CusRow gutter={20} style={{ marginTop: 35 }}>
          {userSubjects?.map((subject) => (
              <Col span={{ xs: 24, sm: 24, md: 3, lg: 3 }} key={subject?._id}>
                <Card
                  onClick={() =>
                    navigate({
                      pathname: "/laboratories",
                      search: `?${createSearchParams({
                        id: subject["_id"],
                        name: subject.name,
                      })}`,
                    })
                  }
                >
                  {subject?.name}
                </Card>
              </Col>
          ))}
        </CusRow>
        }
      </Wrapper>
    </Container>
  );
};

export default Subjects;
