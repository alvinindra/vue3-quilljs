<script lang="ts">
  import { defineComponent, onMounted, ref, toRefs, h } from 'vue'
  import Quill from 'quill'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'

  export default defineComponent({
    name: 'richTextEditor',
    props: {
      modelValue: String,
      placeHolder: String,
      toolBarConfig: Array,
      theme: {
        type: String,
        default: 'snow'
      }
    },
    emits: ['update:modelValue'],
    setup: (props, { emit }) => {
      const { modelValue,toolBarConfig, placeHolder, theme } = toRefs(props)
      const editor = ref()
      const editorRef = ref()
      onMounted(() => {
        editor.value = new Quill(editorRef.value, {
          modules: {
            toolbar: toolBarConfig?.value
          },
          placeholder: placeHolder?.value,
          theme: theme?.value
        })
        editor.value.root.innerHTML = modelValue?.value
        editor?.value.on('text-change', () => {
          emit('update:modelValue', editor.value.root.innerHTML)
        })
      })
      return () => {
        return h('div', { ref: editorRef })
      }
    }
  })
</script>