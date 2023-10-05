import styled from 'styled-components';
import style from '../../../myPage/mypage.module.css'

function FollowLi({follow}){
    return(
        <>
          <li>
                    <div>
                      <img src="/img/user.png" alt="" />
                      <div>
                        <User>
                          <p>name</p>
                          <span>nickname</span>
                        </User>
                        <UserGroup>
                          <span>greeting</span>
                        </UserGroup>
                      </div>
                    </div>
                    <UnfollowBtnBox>
                      <GreyBtn>{follow}</GreyBtn>
                    </UnfollowBtnBox>
                  </li>
        </>
    )
}
export default FollowLi;
let User=styled.div`
  display: flex;
  align-items: baseline;
  &p{
    font-size: 30px;
  font-weight: bold;
  margin-right: 50px;
  }
  &span{
    color: #c6c7cc;
  font-size: 15px;
  }
`
let UserGroup=styled.div`
  font-size: 15px;
  color: #c6c7cc;
  margin-top: 17px;
`
let UnfollowBtnBox=styled.div`
 margin-right: 100px;
 &button{
  width: 150px;
  height: 40px;
  border-radius: 20px;
 }
`
let GreyBtn=styled.button`
border-radius: 5px;
  color: black;
  background-color: #d9d9d9;
  border: none;
`