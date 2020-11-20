<template>
    <v-container>
		<v-sheet
			class="my-10"
			elevation="10"
			:rounded="'xl'"
			width="100%"
		>
			<v-container
				class="px-10"
				style="text-align: center !important"
			>
				<v-text-field
					label="動画ID"
					v-model="movieUrl"
					style="width: 300px"
				/>
				<v-text-field
					label="コメント"
					v-model="comment"
					style="width: 500px"
				/>
				<v-btn
					color="blue"
					@click="storeMovie()"
					x-large
				>
					Click!
				</v-btn>
			</v-container>
		</v-sheet>
        <movie
            ref="movie"
            :items="items"
            :aaa="aaa"
            :loading="loading"
            @deleteMovie="deleteMovie"
        />
    </v-container>
</template>

<script>
import Movie from './Movie.vue'
import axios from 'axios'

export default {
  name: 'Top',
  components: {
    Movie,
  },

  data () {
    return {
        movieUrl: "",
        comment: "",
        items: [{}],
        aaa: [{}],
        formData: {
          type: Array,
          default: () => [],
        },
        loading: {
			type: Boolean,
			required: true,
			default: true,	
		}
    }
  },

  created () {
    this.getMovies()
  },

  methods: {
    async storeMovie () {
        await axios
            .post("https://youtube-curation.herokuapp.com/rest", {
                url: this.movieUrl,
                comment: this.comment,
            })
            .then((response) => {
                console.log(response.data)
				this.getMovies()
            })
            .catch((error) => {
                console.log(error)
            })
    },
    async getMovies () {
		this.loading = true
        await axios
            .get("https://youtube-curation.herokuapp.com/rest/1")
            .then((response) => {
                this.formData = response.data.user.movies   
                this.items = [Object.assign(this.formData, {})]
            })
            .catch((error) => {
                console.log(error)
            })
			.finally(() => {
				setTimeout(() => {
					this.loading = false
				}, 1000)
				this.$refs.movie.initItems()
			})
    },
    async deleteMovie (id) {
        console.log('movieId:',id)
        await axios
            .post("https://youtube-curation.herokuapp.com/rest/" + id + "/destroy")
            .then((response) => {
                console.log(response.data)
                this.items = [Object.assign(this.formData, {})]
				this.getMovies()
            })
            .catch((error) => {
                console.log(error)
            })
    },
  }
}
</script>

<style scoped>
	body {
		margin: 0;
	}
</style>
