import { useState } from "react";
// import style from "../../postDetailPage/postDetail.module.css";
import styled from "styled-components";
function ReportModal({ report, setReport }) {
  const [modal, setModal] = useState(false);
  const clickModal = () => {
    setReport(!report);
  };
  return (
    <>
      {/* //   <!-- 신고 모달 --> */}
      <ReportModalWrap report={report}>
        <ReportModalBack modal={modal}
          onClick={clickModal}
        ></ReportModalBack>
        <ReportModalContent modal={modal}>
          <ReportSelectBox>
            <p>Occupation</p>
            <ReportSelect>
              <option value="">신고사유</option>
              <option value="">신고사유</option>
              <option value="">신고사유</option>
            </ReportSelect>
          </ReportSelectBox>
          <TextareaBox>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="신고이유를 작성해주세요"
            ></textarea>
          </TextareaBox>

          <ReportModalBtnBox>
            <SaveBtn onClick={clickModal}>
              save
            </SaveBtn>
            <CloseBtn onClick={clickModal}>
              close
            </CloseBtn>
          </ReportModalBtnBox>
        </ReportModalContent>
      </ReportModalWrap>
    </>
  );
}
export default ReportModal;

let ReportModalWrap = styled.div`
  display: ${(props) => (props.report ? "block" : "none")};
`;
let ReportModalBack = styled.div`
  position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    display: ${props=>props.modal?"none":"block"};
`;
let ReportModalContent = styled.div`
display: ${props=>props.modal?"none":"block"};
   background-color: #fefefe;
    margin: 0 auto;
    padding: 0px;
    border: 1px solid #888;
    width: 30%;
    height: 45%;
    border-radius: 30px;
    z-index: 4;
    position: fixed;
    top: 30%;
    left: 38%;
    padding: 15px;
 & input{
  border-radius: 5px;
    padding-left: 10px;
    border: 1px solid #656d76;
    width: 100%;
    height: 30px;
    font-size: 12px;
 }
`;
let ReportSelectBox = styled.div`
  width: 400px;
    margin: 0 auto;
  &>p{
    font-weight: bold;
  }
`;
let ReportSelect = styled.select`
 border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 -1px 0px rgba(0, 0, 0, 0.02);
    border-radius: 16px;
    z-index: 4;
    width: 300px;
    height: 40px;
    padding: 0 0 0 10px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
    &>option{
      text-align: left;
    }
`;
let TextareaBox = styled.div`
&>textarea{
  width: 500px;
      margin: 0 auto;
    margin-top: 20px;
    margin-left: 20px;
    border: none;
    background-color: #E8DFE7;
    resize: none;
    padding: 20px;
    font-size: 15px;
    border-radius: 10px;
}
`;
let ReportModalBtnBox = styled.div`
  text-align: center;
  margin-top: 30px;
  &>button{
    margin:0 10px;
  }
`;
let SaveBtn = styled.button`
 width: 60px;
    height:25px;
    border-radius: 10px;
    color: white;
    background-color: #a554f3;
    border: none;
`;
let CloseBtn = styled.button`
 width: 60px;
    height:25px;
    border-radius: 10px;
    border-radius: 10px;
    color: white;
    background-color: #a554f3;
    border: none;
`;
