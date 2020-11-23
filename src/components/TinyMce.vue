<template>
  <div>
	<tinymce
		:id="id"
		ref="tm"
		:key="key"
		v-model="value2"
		:toolbar1="toolbar1"
		:other_options="options"
		@editorInit="editorInit"
		@editorChange="editorChange"
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
				value2: this.value,
				test: true,
				options: {
					language_url: '/test.js',
					// language_url: '/tinymceJA.js'
				},
				key: 0,
			}
		},
		methods: {
			switchTab () {
				this.$emit('parentMethod', this.value2)
				// this.key = this.key ? 0 : 1
				console.log(this.key)
				// this.$refs.tm.$destroy()
			},
			focusin () {	
			},
			editorInit (event) {
				console.log(event)
				console.log(this.$refs.tm)
				console.log(this.value)
				console.log(this.value2)
				this.$nextTick(() => {
					console.log(this.value)
					this.value2 = this.value
					console.log(this.value2)
				})
			},
			editorChange (event) {
				console.log(event)
				console.log(this.value)
				console.log(this.value2)
			}
		},
	}
</script>
