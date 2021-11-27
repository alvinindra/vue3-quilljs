# Vue 3 Quill Rich Text Editor

This is Vue 3 Quill Rich Text editor created by 7uvss from https://7uvss.github.io/vue3-quill-editor/ and this package only add placeholder to the text editor

## Demo

https://7uvss.github.io/vue3-quill-editor/

## Install

```javascript
npm i vue3-quilljs
```

## Usage

Global Registration:

```javascript
// vue - main.js
import Quill from 'vue3-quilljs'
import 'vue3-quilljs/lib/style.css'

app.use(Quill)
```

In .vue:

```html
<template>
  <richTextEditor
    :toolBarConfig="toolBarConfig"
    placeHolder="Write a text"
    v-model="rawHTML"
    theme="snow"
  ></richTextEditor>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const toolBarConfig = [
    [{ header: [1, 2, 3, false] }],
    [{ color: [] }, { background: [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ align: [] }],
    ['clean']
  ]
  const rawHTML = ref('')
</script>
```

#### Themes

Themes allow you to easily make your editor look good with minimal effort. Quill features two offically supported themes: **Snow** and **Bubble**. The default of theme is **Snow**

```html
<template>
  <richTextEditor
    :toolBarConfig="toolBarConfig"
    placeHolder="Write a text"
    v-model="rawHTML"
    theme="bubble"
  ></richTextEditor>
</template>
```

#### Toolbar

```Javascript
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
]
```
