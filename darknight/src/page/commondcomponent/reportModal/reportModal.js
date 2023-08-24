import { useState } from "react";
import style from "../../postDetailPage/postDetail.module.css";
function ReportModal({ report, setReport }) {
  const [modal, setModal] = useState(false);
  const clickModal = () => {
    setReport(!report);
  };
  return (
    <>
      {/* //   <!-- 신고 모달 --> */}
      <div className={report ? `${style.reportModal}` : "none"}>
        <div
          className={modal ? "none" : `${style.reportModalBack}`}
          onClick={clickModal}
        ></div>
        <div className={modal ? "none" : `${style.reportModalContent}`}>
          <div className={style.reportSelectBox}>
            <p>Occupation</p>
            <select name="" id="" className={style.reportSelect}>
              <option value="">신고사유</option>
              <option value="">신고사유</option>
              <option value="">신고사유</option>
            </select>
          </div>
          <div className={style.textareaBox}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="신고이유를 작성해주세요"
            ></textarea>
          </div>

          <div className={style.reportModalBtnBox}>
            <button className={style.saveBtn} onClick={clickModal}>
              save
            </button>
            <button className={style.closeBtn} onClick={clickModal}>
              close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ReportModal;
