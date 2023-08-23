
function EditModal({edit,setEdit}){
  const clickDisplay = () => {
    setEdit(!edit);
  };
    return(
        <>
          <div class="myPageModal">
          <div class={edit?"myPageModalBack":"none"} onClick={clickDisplay}></div>
          <div class={edit?"myPageModalContent":'none'}>
            <p>Name</p>
            <input type="text" placeholder="Jeon,Tae Hyeon"/>
            <p>Pronouns</p>
            <div class="pronouns">
              <img src="/img/phone.png" alt=""/><input type="text" placeholder="010-22-222"/>
            </div>
            <div class="pronouns">
              <img src="/img/building.png" alt=""/><input type="text" placeholder="서울시 송파구"/>
            </div>
            <div class="myPageModalBtnBox">
              <button class="purpleBtn saveBtn">save</button>
              <button class="greyBtn closeBtn">close</button>
            </div>
          </div>
        </div>
        </>
    )
}   
export default EditModal;