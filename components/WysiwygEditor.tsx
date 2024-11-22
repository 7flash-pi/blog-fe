'use client'
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { TINYMICE_API_KEY } from '@/common/util';

type Props = {
  value: string; // The content that will be displayed in the editor
  onChange: (newValue: string) => void; // A function to handle the content change
};

const WysiwygEditor = ({ value, onChange }: Props) => {
  return (
    <div className="w-full">
      <Editor
        apiKey={TINYMICE_API_KEY} // Replace with your TinyMCE API key if required
        value={value}
        onEditorChange={(newValue) => onChange(newValue)} // Update content on change
        init={{
          height: 400,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | bold italic underline strikethrough | link | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | removeformat | help',
        }}
      />
    </div>
  );
};

export default WysiwygEditor;
