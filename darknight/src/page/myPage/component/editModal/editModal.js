import style from '../../mypage.module.css'
function EditModal({edit,setEdit}){
  const clickDisplay = () => {
    setEdit(!edit);
  };
    return(
        <>
          <div className={style.myPageModal}>
          <div className={edit?`${style.myPageModalBack}`:"none"} onClick={clickDisplay}></div>
          <div className={edit?`${style.myPageModalContent}`:'none'}>
            <p>Name</p>
            <input type="text" placeholder="Jeon,Tae Hyeon"/>
            <p>Pronouns</p>
            <div className={style.pronouns}>
              <img src="/img/phone.png" alt=""/><input type="text" placeholder="010-22-222"/>
            </div>
            <div className={style.pronouns}>
              <img src="/img/building.png" alt=""/><input type="text" placeholder="서울시 송파구"/>
            </div>
            <div className={style.myPageModalBtnBox}>
              <button className={style.saveBtn}>save</button>
              <button className={style.closeBtn}>close</button>
            </div>
          </div>
        </div>
        </>
    )
}   
export default EditModal;