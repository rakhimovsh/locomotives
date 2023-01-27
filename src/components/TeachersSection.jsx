import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "antd/es/input/Search";
import { Avatar, Image, List, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";


import Container from "./Container";
import { getUserAllTeachers } from "../redux/actions/teacher.js";
import { getTeacherImage } from "../utils/api.js";
import { Link } from "react-router-dom";
import teacher from "../redux/reducers/teacher";

const Section = styled.section`
  padding: 70px 0;
`;

const CustomSearch = styled(Search)`
  max-width: 70%;
  margin-bottom: 50px;

  & .ant-btn {
    background-color: var(--main-bg-color);
    border-color: var(--main-bg-color);
  }

  @media only screen and (max-width: 768px) {
    margin: 0 auto !important;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 425px) {
    max-width: 90%;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
`;
const TitleLink = styled(Link)`
  font-size: 20px;
`;
const DescriptionWrapper = styled.div`
  & p {
    margin: 0 0 10px;
    font-size: 16px;
    font-weight: 500;
    color: black;
  }

  & span {
    color: dimgray;
  }
`;
const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;
const ListItemMeta = styled(List.Item.Meta)`
  width: 100%;
  @media screen and (max-width: 620px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center !important;
    width: 100%;
    /* margin-left: 100px ; */
    & .ant-list-item-meta-content {
      text-align: center !important;
      margin: 0 auto !important;
      & .ant-list-item-meta-title a {
        text-align: center !important;
        margin: 0 auto !important;
        font-size: 18px;
      }

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center !important;
      width: 100% !important;
    }
  }
`;

const Description = (teacher) => (
  <DescriptionWrapper>
    <p>
      Lavozim: <span>{teacher.position}</span>
    </p>
    <p>
      Email: <span>{teacher.email}</span>
    </p>
  </DescriptionWrapper>
);

const TeachersSection = () => {
  const dispatch = useDispatch();
  const { user, userLoading } = useSelector((state) => state.teacher);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const {t} = useTranslation()

  const onSearch = (value) => {
    setSearch(value);
  };
  // let name = 
  // user.allTeachers.map(user =>console.log(user.firstName));

  useEffect(() => {
    dispatch(getUserAllTeachers(page, search));
  }, [page, search]);
  return (
    <Section>
      <Container>
        <CustomSearch
          placeholder={t("teachersSec.inputPlaceholder")}
          allowClear
          enterButton={t("teachersSec.btn")}
          size="large"
          onSearch={onSearch}
        />
        <List
          itemLayout="horizontal"
          loading={userLoading.allTeachers}
          dataSource={search ? user.allTeachers.filter(teacher => (teacher.firstName == search || teacher.lastName == search)) : user.allTeachers}
          renderItem={(item) => {
            return (
              <List.Item>
                <ListItemMeta
                  avatar={
                    <Image
                      width={200}
                      src={getTeacherImage(item.picture)}
                      style={{
                        boxShadow:
                          " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                      }}
                    />
                  }
                  title={
                    <TitleLink to={`/teacher/info/${item["_id"]}`}>
                      {item.lastName +
                        " " +
                        item.firstName +
                        " " +
                        item.midName}
                    </TitleLink>
                  }
                  description={Description(item)}
                />
              </List.Item>
            );
          }}
        />
        <PaginationWrapper>
          <Pagination
            defaultCurrent={1}
            total={user.allPages}
            onChange={(page) => setPage(page)}
          />
        </PaginationWrapper>
      </Container>
    </Section>
  );
};

export default TeachersSection;
