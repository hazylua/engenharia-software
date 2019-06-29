<template>
    <div class='absolute-center'>
        <div class='block-lab shadow' @click="selectiona_lab">
            <font-awesome-icon class='icon' icon="building" size='5x' color='grey'/>
            <p class='block-text'>LAB01</p>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            lab_nome : 'labinfo'
        }
    },
    methods:{
        selectiona_lab(){
            this.$router.push(this.lab_nome)
        }
    }
}
</script>