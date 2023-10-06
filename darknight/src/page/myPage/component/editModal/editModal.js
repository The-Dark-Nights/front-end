import styled from 'styled-components';
// import style from '../../mypage.module.css'
function EditModal({edit,setEdit}){
  const clickDisplay = () => {
    setEdit(!edit);
  };
    return(
        <>
          <div>
          <MyPageModal edit={edit} onClick={clickDisplay}></MyPageModal>
          <MyPageModalContent edit={edit}>
            <p>Name</p>
            <input type="text" placeholder="Jeon,Tae Hyeon"/>
            <p>Pronouns</p>
            <Pronous>
              <img src="/img/phone.png" alt=""/><input type="text" placeholder="010-22-222"/>
            </Pronous>
            <Pronous>
              <img src="/img/building.png" alt=""/><input type="text" placeholder="서울시 송파구"/>
            </Pronous>
            <MyPageModalBtnBox>
              <button className='saveBtn'>save</button>
              <button className='closeBtn'>close</button>
            </MyPageModalBtnBox>
          </MyPageModalContent>
        </div>
        </>
    )
}   
export default EditModal;

let MyPageModal=styled.div`
 position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
display: ${props=>props.edit?'block':'none'};
`
let MyPageModalContent=styled.div`
display: ${props=>props.edit?'block':'none'};
  background-color: #fefefe;
  margin: 0 auto;
  padding: 0px;
  border: 1px solid #888;
  width: 18%;
  height: 33%;
  border-radius: 30px;
  z-index: 4;
  position: fixed;
  top: 35%;
  left: 43%;
  padding: 15px;
  &p{
    font-weight: bold;
  margin: 10px;
  }
  & input{
    border-radius: 5px;
  padding-left: 10px;
  border: 1px solid #656d76;
  width: 100%;
  height: 30px;
  font-size: 12px;
  }
`
let Pronous=styled.div`
display: flex;
  align-items: center;
  margin-top: 20px;
& img{
  width: 20px;
  margin-right: 20px;
}
`
let MyPageModalBtnBox=styled.div`
text-align: center;
margin-top: 32px;
  & button{
    margin:0 10px;
  }
  & .saveBtn{
    width: 60px;
  height: 25px;
  border-radius: 10px;
  position: relative;
  border-radius: 10px;
  color: white;
  background-color: #a554f3;
  border: none;
  }
  & .closeBtn{
    width: 60px;
  height:25px;
  border-radius: 10px;
  border-radius: 5px;
  color: black;
  background-color: #d9d9d9;
  border: none;
  }
`