<template>
  <div>
	<tinymce
		:id="id"
		ref="tm"
		:value="value"
		:toolbar1="toolbar1"
		@editorInit="editorInit"
		@focus.stop
	>
	</tinymce>
  </div>
</template>

<script>
	import tinymce from 'vue-tinymce-editor'

	export default{
		components: {
			tinymce,
		},
		props: {
			id: {
				default: 'id-1',
			},
			value: {
				default: '',
			},
		},
		data(){
			return {
				toolbar1: 'bold italic underline | fontsizeselect forecolor backcolor | link | code',
				other_options: [
					'anchor_top',
				],
			}
		},
		methods: {
			focusin () {	
			},
			editorInit (event) {
				console.log(event)
				event.stopImmediatePropagation()
				console.log(this.$refs.tm)
			}
		},
	}
</script>
