import { mapGetters } from 'vuex';
export default {
    data() {
        return {
        }
    },
    computed: {
		//...mapGetters 辅助函数是将 store 中的 getter 映射到局部计算属性
        ...mapGetters(['tip','moduleTip'])
    },
    mounted(){
    },
    methods: {
    }
}
