import MDEditor, { commands, ICommand } from '@uiw/react-md-editor';
import onImagePasted from '../../../utils/onImagePasted';
import insertToTextArea from '../../../utils/insertTotextArea';
import React, { useState } from "react";
import axios from 'axios';
import style from '../writingPage.module.css'


function Markdown({ md, setMd }) {



    const onChangeHandler = e => {
        const image = e.target.files[0];
        if (!image) {
            return;
        }
        const insertedMarkdown = insertToTextArea(`![image](https://s3.asia-east-north-2.devigation/images/${image.name})`);

        // 주소 값은 서버 받은 이후 수정 필요
        if (!insertedMarkdown) {
            return;
        }
        setMd(insertedMarkdown);
        e.target.value = null;


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

    const inputFileRef = React.useRef(null);
    const onImageButtonClick = () => {
        inputFileRef.current.click();
    }

    const localImage: ICommand<string> = {
        name: 'localImage',
        keyCommand: 'localImage',
        buttonProps: null,
        icon: (
            <button type='button' className={style.imgUploadBtn} title='upload image' onClick={onImageButtonClick}>
                {/* <img className={style.imgUploadImg} src="img/localImage.png" alt='업'/> */}
                <label className={style.uploadImage}>
                    <svg width="13" height="13" viewBox="0 0 48 48" >
                    <g transform="translate(0.000000,46.000000) scale(0.100000,-0.100000)" stroke="none">
                        <path fill="currentColor" d="M335 420 c-30 -31 -36 -43 -27 -52 9 -9 16 -7 31 6 20 18 20 17 23
                        -45 2 -49 7 -64 18 -64 11 0 16 15 18 64 3 62 3 63 23 45 15 -13 22 -15 31 -6
                        9 9 3 21 -27 52 -21 22 -42 40 -45 40 -3 0 -24 -18 -45 -40z"/>
                        <path fill="currentColor" d="M65 376 c-24 -24 -25 -30 -25 -156 0 -126 1 -132 25 -155 23 -24 29
                        -25 155 -25 126 0 132 1 155 25 21 20 25 34 25 84 0 63 -14 86 -35 58 -11 -15
                        -14 -15 -30 3 -20 22 -64 27 -82 9 -9 -9 -21 -4 -48 20 -42 36 -63 39 -99 10
                        l-26 -20 0 65 0 65 88 3 c69 2 87 6 87 18 0 12 -17 16 -83 18 -76 3 -84 1
                        -107 -22z m170 -216 l80 -80 -118 0 -117 0 0 47 c0 39 5 52 32 80 18 18 35 33
                        38 33 3 0 41 -36 85 -80z m97 13 c19 -18 28 -37 28 -57 l0 -31 -46 47 c-26 25
                        -43 51 -40 57 11 18 28 13 58 -16z"/>
                    </g>
                    </svg>
                </label>
                <form onChange={onChangeHandler}>
                    <input type="file" ref={inputFileRef} name="inputImg" id="realUpload" accept="image/*" />
                </form>
            </button>
        ),
    };



    return (
        <div className={style.markarea}>
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
                            buttonProps: { 'aria-label': 'Insert title' },
                        }),
                        commands.bold,
                        commands.italic,
                        commands.strikethrough,
                        commands.hr,
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
                        await onImagePasted(event.dataTransfer, setMd);
                    }}
                />
            </div>
        </div>
    );
}

export default Markdown;