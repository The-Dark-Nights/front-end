import "../../css/common.css";
import style from "./writingPage.module.css";
import Markdown from "./components/markdown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";





function WritingPage() {

    const navigate=useNavigate();
    const clickWrite=()=>{navigate('/post')};
    const [md, setMd] = useState('');

    

    
    
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
                            나가기
                        </button>
                        <label className={style.importLabel} title="가져오기" for="importMarkdown">
                            <img className={style.buttonImage} src="img/import.png" alt="다운"/>
                        </label>
                        <form>
                            <input type="file" name="importMarkdown" id="importMarkdown" onChange={importFile} accept=".md"/>
                        </form>
                        <button className={style.draftBtn}>Draft</button>
                        <button className={style.publishBtn}>publish</button>
                    </div>
                </div>

            </div>
        </>
    )
};


export default WritingPage;