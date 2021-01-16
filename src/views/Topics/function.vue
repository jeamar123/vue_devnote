<script>
	// import axios from 'axios'
	var Topics = {
		data() {
			return {

			}
		},
		created() {
			this.getTopics();
		},
		methods: {
			goToNote(data)	{
				let vm = this
				console.log(data);
				vm.$router.push({ name: 'Note', params: { id: 1 } });
			},
			getTopics()	{
				let vm = this
				vm.$parent.showLoading();

				setTimeout(() => {
					vm.$parent.hideLoading();
				}, 500);
			}
    }
	}
	export default Topics
</script>