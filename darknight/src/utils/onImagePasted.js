import { SetStateAction } from 'react';
// import { fileUpload } from '../../../../../libs/firebase/storage';
import insertToTextArea from './insertTotextArea';

const onImagePasted = async (dataTransfer: DataTransfer, setMarkdown: (value: SetStateAction<string | undefined>) => void) => {
  const files: File[] = [];
  for (let index = 0; index < dataTransfer.items.length; index += 1) {
    const file = dataTransfer.files.item(index);

    if (file) {
      files.push(file);
    }
  }

  await Promise.all(
    files.map(async (file) => {
      const url = 
      // await fileUpload(file);
      `https://s3.asia-east-north-2.devigation/images/${file.name}`;
      // 주소 값은 서버 받은 이후 수정 필요
      const insertedMarkdown = insertToTextArea(`![${file.name}](${url})`);
      if (!insertedMarkdown) {
        return;
      }
      setMarkdown(insertedMarkdown);
    }),
  );
};

export default onImagePasted;