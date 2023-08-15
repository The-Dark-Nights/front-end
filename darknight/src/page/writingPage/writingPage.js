import { useEffect, useState } from "react";
import "../../css/common.css";
import "../../css/writingPage.css";

function WritingPage() {

    const modalOkClick = () => {
        const modal = document.getElementById('writingModal');
        modal.style.display='none';
    };
    const exportOnClick= ()=> {
        const modal = document.getElementById('writingModal');
        modal.style.display='block';

    };

    return(
        <>
            <div id="backgroundDiv">
                <div id="writingDiv">
                    <div id="viewDiv">
                        <textarea class="writingArea" placeholder="입력하세요"></textarea>
                        <textarea class="previewArea" placeholder="미리보기입니다."></textarea>
                    </div>
                    
                    <div id="bottomBtnDiv">
                        <button class="outBtn">
                            <img class="outIcon" src="img/left_arrow.png"/>
                            나가기</button>
                        <button id="importBtn" class="purpleBtn portBtn bottomRight">
                            <img class="buttonImage" src="img/import.png" alt="다운"/>
                        </button>
                        <button id="exportBtn" class="purpleBtn portBtn bottomRight" onClick={exportOnClick}>
                            <img class="buttonImage" src="img/export.png" alt="업"/>
                        </button>
                        <button class="purpleBorderBtn saveBtn bottomRight">Draft</button>
                        <button class="purpleBtn saveBtn bottomRight">publish</button>
                    </div>


                </div>
                <div id="writingModal">
                    <div class="writingModalBack"></div>
                    <div class="writingModalContent">
                        <div class="iconDiv">
                            <img src="img/completeIcon.png"/>
                        </div>
                        
                        <p class="messageDiv">Export Completed!</p>
                        
                    <div class="writingModalBtnBox">
                        <button class="purpleBtn okBtn" onClick={modalOkClick}>OK</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WritingPage;