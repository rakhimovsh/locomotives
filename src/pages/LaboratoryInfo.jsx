import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import parse, {attributesToProps} from 'html-react-parser';
import styled from 'styled-components';
import { getUserSingleLaboratory } from '../redux/actions/laboratory.js';
import Container from '../components/Container.jsx';


const EditorIframe = styled.iframe`
  width: 100%;
  height: 30vw;

`

const LaboratoryInfo = () => {
  const { laboratoryId } = useParams();
  const dispatch = useDispatch();
  const { userSingleLaboratory } = useSelector(state => state.laboratory);


  const onIframeLoad = ()=>{
  }
  useEffect(() => {
    dispatch(getUserSingleLaboratory(laboratoryId));
  }, [laboratoryId]);

  return (
    <Container>
      <h1>{userSingleLaboratory?.title}</h1>
      <div>{userSingleLaboratory ? parse(userSingleLaboratory.context, {
        replace: (el)=>{
          if(el.name == 'iframe'){
            const props = attributesToProps(el.attribs)
            props.onLoad = onIframeLoad
            props.width = null
            props.height = null 
            return <EditorIframe {...props}></EditorIframe>
          }
        }
      }) : ''}</div>
    </Container>
  );
};

export default LaboratoryInfo;