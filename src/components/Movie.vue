<template>
    <div>
		<template
			v-if="loading"
		>
			<v-container
				class="px-10 py-10"
				style="text-align: center"
			>
				<v-progress-circular
					:size="70"
					color="blue"
					indeterminate
				/>
			</v-container>
		</template>
		<template
			v-else
		>
			<v-row>
				<v-col
					v-for="(item, index) in internalItems" :key="index"
					cols="4"
					draggable
					@dragstart="dragList(index, item.id, $event)"
					@drop="dropList(index)"
					@dragover.prevent
					@dragenter.prevent
				>
					<div>
						<iframe width="290" height="163.125" :src="item.url" frameborder="0">
						</iframe>
						<p>{{ item.comment }}</p>
					</div>
				</v-col>
			</v-row>
			<v-row
				draggable
				@dragover.prevent
				@dragenter.prevent
				@drop="dropTrash()"
			>
				<v-spacer />
				<v-card
					class="text-center my-10"
					width="290"
					style="border: outset 5px red"
				>
					<v-icon
						color="red"
						style="font-size: 50px"
					>
						mdi-trash-can
					</v-icon>
				</v-card>
			</v-row>
		</template>
    </div>
</template>

<script>
  export default {
    name: 'Movie',

    props: {
        items: {
          type: Array,
          // required: true,
          default: null,
        },
        loading: {
			type: Boolean,
			required: true,
			default: true,	
		}
    },

    data () {
      return {
        internalItems: [],
        dragIndex: null,
        movieId: null,
      }
    },

    created () {
      this.initItems()
    },

    methods: {
      // 動画の初期表示
      initItems () {
        this.internalItems = []
        Object.keys(this.items[0]).forEach( item => {
            const newItem = {
                id: this.items[0][item].id,
                url: 'https://www.youtube.com/embed/' + this.items[0][item].url + '?controls=1&loop=1&playlist=' + this.items[0][item].url,
                comment: this.items[0][item].comment,
            }
            this.internalItems.push(newItem)
        })
		console.log(this.loading)
      },
      dragList (index, id, event) {
        event.dataTransfer.effectAllowed = 'move'
        event.dataTransfer.dropEffect = 'move'
        event.dataTransfer.setData('drag-index', index)
        this.dragIndex = event.dataTransfer.getData('drag-index')
        this.movieId = id
        console.log(event.dataTransfer)
      },
      dropList (index) {
        console.log(this.dragIndex)
        const deleteList = this.internalItems.splice(this.dragIndex, 1)
        console.log(deleteList[0])
        this.internalItems.splice(index, 0, deleteList[0])
      },
      dropTrash () {
        console.log(this.movieId)
        this.$emit('deleteMovie', this.movieId)
    //  const deleteList = this.internalItems.splice(this.dragIndex, 1)
    //  console.log(deleteList[0])
    //  this.internalItems.splice(this.dragIndex, 0)
      },
    }
  }
</script>
