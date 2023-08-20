import { useState } from "react";

function ReportModal({report,setReport}){
    const [modal,setModal]=useState(false);
    const clickModal=()=>{
        setReport(!report);
    }
    return(
        <>
         {/* //   <!-- 신고 모달 --> */}
      <div className={report?"reportModal":"none"}>
      <div className={modal?"none":"reportModalBack"} onClick={clickModal}></div>
      <div className={modal?"none":"reportModalContent"}>
        <div className="reportSelectBox">
          <p>Occupation</p>
          <select name="" id="" className="reportSelect">
            <option value="">신고사유</option>
            <option value="">신고사유</option>
            <option value="">신고사유</option>
          </select>
        </div>
        <div className="textareaBox">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="신고이유를 작성해주세요"
          ></textarea>
        </div>

        <div className="reportModalBtnBox">
          <button className="purpleBtn saveBtn" onClick={clickModal}>save</button>
          <button className="greyBtn closeBtn" onClick={clickModal}>close</button>
        </div>
      </div>
    </div>
    </>
    )
}
export default ReportModal;