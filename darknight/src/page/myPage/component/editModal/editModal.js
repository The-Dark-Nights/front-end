
function EditModal(){
    return(
        <>
          <div class="myPageModal">
          <div class="myPageModalBack"></div>
          <div class="myPageModalContent">
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