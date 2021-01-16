<script>
	import { Header } from '../Header'
	import { Loader } from '../../components/Loader'
	// import axios from 'axios'
	var Dashboard = {
		components:{
			Header,
			Loader,
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
				},500);
      },
    }
	}
	export default Dashboard
</script>