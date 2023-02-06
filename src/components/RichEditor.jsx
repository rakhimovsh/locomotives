import React from 'react';
import { Jodit } from 'jodit'
import JoditReact from "jodit-react";
import { api, getEditorImage } from '../utils/api';


const FileUpload = async (file) => {
  let result = null;

  let formData = new FormData();
  formData.append('picture', file);
  const response = await api().post("/admin/upload/news/picture", formData)
  result = response?.data

  return result;
}
class JoditEditor extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            editorContent: ''
        }

        this.editorConfig = {
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
                '|', 'hr', 'eraser', 'fullsize'
            ],
            extraButtons: ["uploadImage"]
        }
    }

    componentDidMount() {
        this.uploadImageButton();

    }

    uploadImageButton = () => {
        Jodit.defaultOptions.controls.uploadImage = {
            name: 'Upload image to Cloudinary',
            iconURL: "https://www.kindpng.com/picc/m/261-2619141_cage-clipart-victorian-cloud-upload-icon-svg-hd.png",
            exec: (async (editor) => {
                await this.imageUpload(editor);
            })
        };
    }
    imageUpload = (editor) => {

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

            const imageInfo = await FileUpload(imageFile);;

            this.insertImage(editor, getEditorImage(imageInfo.data.fileName));

        }.bind(this);
    }

    insertImage = (editor, url) => {
        const image = editor.selection.j.createInside.element('img');
        image.setAttribute('src', url);
        editor.selection.insertNode(image);
    }

    onChange = (value) => { this.props.setValue(value)}


    render() {
        return (
            <React.Fragment>
                <JoditReact
                    value={this.state.editorContent}
                    config={this.editorConfig}
                    onChange={this.onChange.bind(this)}
                />
            </React.Fragment>
        )
    }
}

export default JoditEditor;