<script>
	import { Header } from '../Header'
	// import axios from 'axios'
	var Dashboard = {
		components:{
			Header,
		},
		data() {
			return {
				showLoader : false,
			}
		},
		created() {
		},
		methods: {
      showLoading() {
      	this.showLoader = true;
      },
      hideLoading() {
      	setTimeout(()=>{
				  this.showLoader = false;
				},1000);
      },
    }
	}
	export default Dashboard
</script>