import "../../css/common.css";
import style from "./writingPage.module.css";
import Markdown from "./components/markdown";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useCallback } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../constants";





function WritingPage() {

    const navigate=useNavigate();
    const clickWrite=()=>{navigate('/post')};
    
    
    const [md, setMd] = useState('');



    const postTitleRef = useRef(null);

    
    
    
    const exportFile = useCallback( () => {
        const file = new Blob([md], {type: 'text/md'});
        let fileName = "file.md";
        
        const element = document.createElement('a');

        element.href = URL.createObjectURL(file);
        element.download = fileName;
        document.body.appendChild(element);
        element.click();
    }
    ,[md]) 
    
    
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


    const savePost = e => {
        const postBody = md;
        const postTitle = postTitleRef.current.value;
        console.log(postBody);
        console.log(postTitle);
        axios.post(API_BASE_URL + "/v1/post/create",
            {
                "title" : postTitle,
                "categoryId" : 1,
                "content" : postBody,
                "published" : true,

            }
            ,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                },
            }
            )
        alert("글이 저장되었습니다.")
        navigate("/post")
    }   
    
    
    
    
    
	

    return(
        <>
            <div>
                <input type="text" placeholder="제목을 입력해주세요." ref={postTitleRef}></input>
            </div>
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
                        <button className={style.exportBtn} onClick={exportFile}>

                            <img className={style.exportImg} src="img/export.png" alt="export"></img>
                        </button>
                        <label className={style.importLabel} title="가져오기" for="importMarkdown">
                            <img className={style.importImage} src="img/import.png" alt="import"/>

                        </label>
                        <form>
                            <input type="file" name="importMarkdown" id="importMarkdown" onChange={importFile} accept=".md"/>
                        </form>
                        <button className={style.draftBtn}>Draft</button>
                        <button className={style.publishBtn} onClick={savePost}>publish</button>
                    </div>
                </div>

            </div>
        </>
    )
};


export default WritingPage;