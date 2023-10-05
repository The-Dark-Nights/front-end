import styled from "styled-components";

function MyPageSide({onClickFollow,profileEdit}){
    return(
        <MypageSideMenu>
        <img src="/img/user.png" alt="" />
        <MypageUserInfo>
          <h1>Jeon,Tae Hyeon</h1>
          <p>Code Magician</p>
          <MypageFollows onClick={onClickFollow}>
            <img src="/img/users.png" alt="" />
            <span>4followers</span>
            <span>4followings</span>
          </MypageFollows>
        </MypageUserInfo>
        <div>
          <EditBtn onClick={profileEdit}>
            Edit Profile
          </EditBtn>
        </div>
      </MypageSideMenu>
    )
}
export default MyPageSide;
let MypageSideMenu=styled.div`
width: 17%;
height: 120vh;

box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.2), 5px 0px 2px rgba(0, 0, 0, 0.02);
text-align: center;
& >img{
    border-radius: 50%;
    width:100%;
   margin: 70px 0;
}
`
let MypageUserInfo=styled.div`
text-align: left;
width: 140px;
margin: 0 auto;
&>p{
    color:  #656d76;
  font-size: 20px  
}
`
let MypageFollows=styled.div`
color:  #c6c7cc;
font-size: 12px;
margin-top: 20px;
& >img{
    width: 18px;
    position: relative;
    top: 4px;
}
& >span{
    margin-right: 10px;
}
`
let EditBtn=styled.button`
width: 210px;
    height: 40px;
    font-size: 20px;
    text-align: center;
    margin: 50px auto;
    border-radius: 5px;
    color: black;
    background-color: #d9d9d9;
    border: none;
`