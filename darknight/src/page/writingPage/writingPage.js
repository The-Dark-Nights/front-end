import "../../css/common.css";
import style from "./writingPage.module.css";
import Markdown from "./components/markdown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";





function WritingPage() {

    const navigate=useNavigate();
    const clickWrite=()=>{navigate('/post')};
    const [md, setMd] = useState('');

    

    
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
            <div className={style.backgroundDiv}>
                <div>
                    <div className={style.writingDiv}>
                        <Markdown md={md} setMd={setMd}/>               
                    </div>    
                    <div className={style.bottomBtnDiv}>
                        <button className={style.outBtn} onClick={clickWrite}>
                            <img className={style.outIcon} alt="나가기" src="img/left_arrow.png" />
                            나가기</button>
                        <button className={style.importBtn} title="가져오기" onClick={importOnClick}>
                            <div className={style.importDiv}>
                                <label>
                                    <img className={style.buttonImage} src="img/import.png" alt="다운"/>
                                </label>
                                <form>
                                    <input type="file" name="importMarkdown" id="importMarkdown" onChange={importFile} accept=".md"/>
                                </form>
                            </div>
                        </button>
                        <button className={style.draftBtn}>Draft</button>
                        <button className={style.publishBtn}>publish</button>
                    </div>
                </div>

            </div>
        </>
    )
};


export default WritingPage;