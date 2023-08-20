import MDEditor, {commands, ICommand} from '@uiw/react-md-editor';
import onImagePasted from '../../../utils/onImagePasted';
import insertToTextArea from '../../../utils/insertTotextArea';
import { useEffect, useState } from "react";
import axios from 'axios';


function Markdown(){
    const [md, setMd] = useState('');
    const [img, setImg] = useState({});

    const onChangeHandler = e =>{
        console.log(e.target.files[0]);
        const image = e.target.files[0];
        const insertedMarkdown = insertToTextArea(`![${image.name}](${image.name})`);
        // 주소 값은 서버 받은 이후 수정 필요
            if (!insertedMarkdown) {
                return;
            }
            setMd(insertedMarkdown);

        // const formData = new FormData();
        // /* append 앞 첫 문자열이 키 */
        // formData.append("image", image);
        // axios.post("url", formData).then ((res) => {
        //     const imageUrl = res.data.image_url;
        //     const insertedMarkdown = insertToTextArea(`![${image.name}](${imageUrl})`);
        //     if (!insertedMarkdown) {
        //         return;
        //     }
        //     setMd(insertedMarkdown);
        // })

    }

    const localImage: ICommand<string> = {
        name: 'localImage',
        keyCommand: 'localImage',
        buttonProps: null,
        icon: (
                <button type='button' class="imgUploadBtn" title='upload image'>
                    <div class="imgUploadDiv" >
                        <label for="realUpload">
                            <img class="imgUploadImg" src="img/localImage.png"/>
                        </label>
                        <form id ="imageForm" onChange={onChangeHandler}>
                            <input type="file" name="inputImg" id="realUpload" accept="image/*"/>
                        </form>
                    </div>
                </button>
        ),
        };
    
    

    return (
        <div className="markarea">
                            <div data-color-mode="light"> 
                                <MDEditor
                                            height={695}
                                            value={md}
                                            onChange={setMd}
                                            commands={[
                                                    commands.group([
                                                        commands.title1,
                                                        commands.title2,
                                                        commands.title3,
                                                        commands.title4,
                                                        commands.title5,
                                                        commands.title6
                                                    ], {
                                                        name: 'title',
                                                        groupName: 'title',
                                                        buttonProps: { 'aria-label': 'Insert title'},
                                                    }),
                                                    commands.bold,
                                                    commands.italic,
                                                    commands.strikethrough,
                                                    commands.hr,
                                                    commands.title,
                                                    commands.divider,
                                                    commands.link,
                                                    commands.quote,
                                                    commands.code,
                                                    commands.codeBlock,
                                                    commands.comment,
                                                    commands.image,
                                                    localImage,
                                                    commands.divider,
                                                    commands.unorderedListCommand,
                                                    commands.orderedListCommand,
                                                    commands.checkedListCommand,
                                                    
                                                    ]}
                                                    onPaste={async (event) => {
                                                        await onImagePasted(event.clipboardData, setMd);
                                                    }}
                                                    onDrop={async (event) => {
                                                        await onImagePasted(event.dataTransfer, setMd);}}
                                    />     
                            </div>
                        </div>
    );
}

export default Markdown;