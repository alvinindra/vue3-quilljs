# Vue 3 Quill Rich Text Editor

This is Vue 3 Quill Rich Text editor created by 7uvss from https://7uvss.github.io/vue3-quill-editor/ and this package only add placeholder to the text editor

## Demo

https://7uvss.github.io/vue3-quill-editor/

## Install

```javascript
npm i vue3-quill-editor
```

## Usage

Global Registration:

```javascript
// vue - main.js
import Quill from "vue3-quill-editor";
import "vue3-quill-editor/lib/style.css";

app.use(Quill);
```

In .vue:

```html
<template>
  <richTextEditor
    :toolBarConfig="toolBarConfig"
    v-model="rawHTML"
  ></richTextEditor>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  const toolBarConfig = [
    [{ header: [1, 2, 3, false] }],
    [{ color: [] }, { background: [] }],
    ["bold", "italic", "underline", "strike"],
    [{ align: [] }],
    ["clean"],
  ];
  const rawHTML = ref("");
</script>
```
