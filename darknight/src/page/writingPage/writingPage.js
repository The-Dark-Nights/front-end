import "../../css/common.css";
import "../../css/writingPage.css";
import Markdown from "./components/markdown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";





function WritingPage() {

    const navigate=useNavigate();
    const clickWrite=()=>{navigate('/post')};
    const [md, setMd] = useState('');

    

    const modalOkClick = () => {
        const modal = document.getElementById('writingModal');
        modal.style.display='none';
    };
    const modalOpen= ()=> {
        const modal = document.getElementById('writingModal');
        modal.style.display='block';
    };
    const importOnClick = () => {
        const importBtn = document.getElementById('importMarkdown');
        importBtn.click();
    };
    // const exportOnClick = () => {
    //     const exportBtn = document.getElementById('test');
        // exportBtn.click();
        // console.log('작동', exportBtn.innerHTML);
        // console.log('작동', exportBtn.innerText);
        // const content = exportBtn.innerHTML;
        // exportBtn.innerHTML = content;
        
    // };
    
    const importFile = e => {
        
        if(e.target.files){
        const file = e.target.files[0];
        new Promise((resolve, reject) =>{
            resolve(file.text())
        }).then(res => { 
            setMd(res)
            e.target.value = null;
            }
        );
        }
    };   
    
    
    
    
    
	

    return(
        <>
            <div id="backgroundDiv">
                <div>
                    <div id="writingDiv">
                        <Markdown md={md} setMd={setMd}/>               
                    </div>    
                    <div id="bottomBtnDiv">
                        <button class="outBtn" onClick={clickWrite}>
                            <img class="outIcon" alt="나가기" src="img/left_arrow.png" />
                            나가기</button>
                        <button id="importBtn" class="purpleBtn portBtn bottomRight" title="가져오기" onClick={importOnClick}>
                            <div class="importDiv">
                                <label>
                                    <img class="buttonImage" src="img/import.png" alt="다운"/>
                                </label>
                                <form id="importForm">
                                    <input type="file" name="importMarkdown" id="importMarkdown" onChange={importFile} accept=".md"/>
                                </form>
                            </div>
                        </button>
                        {/* <button id="exportBtn" class="purpleBtn portBtn bottomRight" onClick={exportOnClick} title="내보내기">
                            <img class="buttonImage" src="img/export.png" alt="업"/>
                        </button> */}
                        <button class="purpleBorderBtn saveBtn bottomRight">Draft</button>
                        <button class="purpleBtn saveBtn bottomRight">publish</button>
                    </div>
                </div>
                <div id="writingModal">
                    <div class="writingModalBack"></div>
                    <div class="writingModalContent">
                        <div class="iconDiv">
                            <img src="img/completeIcon.png" alt="완료"/>
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
};


export default WritingPage;