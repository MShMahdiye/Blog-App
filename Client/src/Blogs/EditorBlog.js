import React, { useState } from 'react'
import {EditorState,convertToRaw} from 'draft-js'
import {Editor} from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

function EditorBlog({blogInfo,setBlogInfo,blogInfoEdit,setBlogInfoEdit}) {

  const getContent = (e) => {
    setBlogInfo({...blogInfo,content : draftToHtml(convertToRaw(editorState.getCurrentContent())) })
    console.log('hellooooo from get content : ');
    console.log('blog info set from getContent : ',blogInfo);
  }

  let description = EditorState.createEmpty()
  let [editorState,setEditorState] = useState(description)
  console.log('editorState',editorState);

  const onEditorStateChange = (editorState) => {
    console.log('onEditorStateChange property : ',editorState);
    setEditorState(editorState)
    // setBlogInfo({...blogInfo,[content]: editorState}) for add to cookie obj
  }

  console.log('editorState AFTER : ',editorState.value);
  console.log('draftToHtml : ',draftToHtml(convertToRaw(editorState.getCurrentContent())));
  return (
    <div className='flex justify-center items-center'>
      <Editor onChange={getContent}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          inline: {inDropdown : true},
          list: {inDropdown : true},
          textAlign: {inDropdown : true},
          link: {inDropdown : true},
          history: {inDropdown : true}
        }}
      />
    </div>
  )
}

export default EditorBlog