import  "../../css/common.css";
import style from "./writingPage.module.css";
import Markdown from "./components/markdown";
import { useNavigate } from "react-router-dom";



function WritingPage() {

        

    const modalOkClick = () => {
        const modal = document.getElementById('writingModal');
        modal.style.display='none';
    };
    const exportOnClick= ()=> {
        const modal = document.getElementById('writingModal');
        modal.style.display='block';

    };
    const navigate=useNavigate();
    const clickWrite=()=>{navigate('/post')};

    return(
        <>
            <div id="backgroundDiv" className={style.backgroundDiv}>
                <div>
                    <div id="writingDiv" className={style.writingDiv}>
                        <Markdown/>
                    </div>    
                    <div id="bottomBtnDiv" className={style.bottonBtnDiv}>
                        <button className={style.outBtn} onClick={clickWrite}>
                            <img className={style.outIcon} alt="나가기" src="img/left_arrow.png" />
                            나가기</button>
                        <button id="importBtn" className={style.downBtn}>
                            <img className={style.buttonImage} src="img/import.png" alt="다운"/>
                        </button>
                        <button id="exportBtn" className={style.downBtn} onClick={exportOnClick}>
                            <img className={style.imgUploadImg} src="img/export.png" alt="업"/>
                        </button>
                        <button className={style.purpleBorderBtn}>Draft</button>
                        <button className={style.down}>publish</button>
                    </div>
                </div>

                
                <div id="writingModal" className={style.writingModal}>
                    <div className={style.writingModalBack}></div>
                    <div className={style.writingModalContent}>
                        <div className={style.iconDiv}>
                            <img src="img/completeIcon.png" alt="완료"/>
                        </div>
                        
                        <p className={style.messageDiv}>Export Completed!</p>
                        
                    <div className={style.writingModalBtnBox}>
                        <button className="purpleBtn okBtn" onClick={modalOkClick}>OK</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
};


export default WritingPage;