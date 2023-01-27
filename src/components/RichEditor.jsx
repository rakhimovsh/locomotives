import React, {useEffect} from 'react';
import { Jodit } from 'jodit'
import JoditReact from "jodit-react";
// import ImageIcon from '../assets/images/card-image.svg'

export const FileUpload = async (file) => {
  let result = null;

  let formData = new FormData();
  formData.append('picture', file);

  await fetch(`http://146.190.84.52:3000/admin/upload/news/picture`, {
    method: 'POST',
    body: formData
  })
      .then((response) => response.json())
      .then((data) => {
        result = data?.data.fileName;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  console.log(result);
  return result;
}

const RichEditor =({setValue, defaultValue})=>{
  const [editorValue, setEditorValue] = React.useState('');

  useEffect(()=>{
    setEditorValue(defaultValue)
  }, [defaultValue])
  const editorConfig = {
    readonly: false,
    autofocus: true,
    tabIndex: 1,

    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,
    defaultActionOnPaste: 'insert_clear_html',

    placeholder: 'Write something awesome ...',
    beautyHTML: true,
    toolbarButtonSize: "large",
    buttons: [
      'source',
      '|', 'bold', 'italic',
      '|', 'ul', 'ol',
      '|', 'font', 'fontsize', 'brush', 'paragraph',
      '|', 'video', 'table', 'link',
      '|', 'left', 'center', 'right', 'justify',
      '|', 'undo', 'redo',
      '|', 'hr', 'eraser', 'fullsize', "preview"
    ],
    extraButtons: ["uploadImage"]
  }
  function componentWillMount() {
    uploadImageButton();

  }
  function uploadImageButton (){
    Jodit.defaultOptions.controls.uploadImage = {
      name: 'Upload image to Cloudinary',
      iconURL: ImageIcon,
      exec: (async (editor) => {
        await imageUpload(editor);
      })
    };
  }
  function imageUpload (editor) {

    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async function () {

      const imageFile = input.files[0];

      if (!imageFile) {
        return;
      }

      if (!imageFile.name.match(/\.(jpg|jpeg|png)$/)) {
        return;
      }

      const imageInfo = await FileUpload(imageFile);

      insertImage(editor, `http://146.190.84.52:3000/news/picture/${imageInfo}`);

    }
  }
  function insertImage  (editor, url)  {
    const image = editor.selection.j.createInside.element('img');
    image.setAttribute('src', url);
    editor.selection.insertNode(image);
  }

   function onChange (value)  {setValue(value)}

  return(
      <JoditReact
          value={editorValue}
          config={editorConfig}
          onChange={onChange}

      />
  )
}

export default RichEditor;