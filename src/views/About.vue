<template>
  <div class="about">
	<tiny-mce
		id="id"
		value="value"
    />
	<v-app id="dialog">
		<v-dialog
			v-model="dialog"
			width="500"
			:retain-focus="false"
			eager="true"
		>
			<template v-slot:activator="{ on, attrs }">
				<v-btn
					color="red lighten-2"
					dark
					v-bind="attrs"
					v-on="on"
				>
					Click Me
				</v-btn>
			</template>
	
			<v-card>
				<v-card-title class="headline grey lighten-2">
					Privacy Policy
				</v-card-title>
			
				<v-card-text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</v-card-text>

				<tiny-mce
					id="dialogId"
					value="dialogValue"
				/>
	
				<v-divider></v-divider>
			
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
						color="primary"
						text
						@click="dialog = false"
					>
						I accept
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		</v-app>
  </div>
</template>

<script>
	import TinyMce from '@/components/TinyMce'

	export default{
		components: {
			TinyMce,
		},
		data(){
			return {
				id: 'About',
				value: 'About',
				dialogId: 'Dialog',
				dialogValue: 'Dialog',
				dialog: false,
			}
		}
	}
</script>
