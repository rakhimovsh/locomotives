import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import { api, getEditorImage } from '../utils/api';


const CkEditor = ({ handleChange, defaultValue = '' }) => {
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append('picture', file);
            api().post('/admin/upload/news/picture', body).then(({ data }) => {
              resolve({
                default: getEditorImage(data?.data.fileName),
              });
            }).catch((error) => {
              reject(error);
            });
          });
        });
      },
      delete: () => {

      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }


  return (
    <CKEditor
      editor={ClassicEditor}
      data={defaultValue}
      config={{
        extraPlugins: [uploadPlugin],
      }}
      image={{
        resizeUnit: '%',
        resizeOptions: [{
          name: 'resizeImage:original',
          value: null,
        },
          {
            name: 'resizeImage:50',
            value: '50',
          },
          {
            name: 'resizeImage:75',
            value: '75',
          }],
        toolbar: ['resizeImage'],

      }}
      onChange={handleChange}
      onDelete={(evt) => console.log(evt)}
    />
  );
};

export default CkEditor;