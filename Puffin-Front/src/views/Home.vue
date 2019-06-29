<template>
    <div>
        <SideMenu></SideMenu>
    <section class='center vertical'>
        <item-form :item="selectedItem"></item-form>

        <div class='container full-wid vertical max-hi-mid'>
            <div v-for="(item, key) in item_list" :key='key' class='item'>
                <div class='item_text'>{{item.slug}}</div>
                <span class='item__opt'>
                    <button class='block small shadow' @click='itemDetail(item)'>edit</button>
                    <button class='block small pastel-red shadow'>del</button>
                </span>
            </div>
        </div>
        <div>
            <div @click="signal({new:'window', id:'search'})" class='block center'>
                Procurar 
            </div>
            <div @click="signal({new:'window', id:'import'})" class='block center'>
                Importar
            </div>
            <div class='block center'>
                Exportar
            </div>
        </div>
    </section>
    </div>
</template>


<script>
const {ipcRenderer} = require('electron');
import axios from 'axios'
import SideMenu from '@/components/SideMenu.vue'
import ItemForm from '@/components/Form.vue'

export default {
    components:{
        'item-form':ItemForm,
        'SideMenu': SideMenu
    },
    data(){
        return {
            item_list : [],
            selectedItem: {}
        }
    },
    methods:{
        itemDetail(payload){
            this.selectedItem = payload
        },
        signal(payload){
            ipcRenderer.send('newWindow', payload);
        }
    },
    created() {
        axios.get('http://localhost:8000/item/')
            .then(res => {
                if(res.data.code){
                    this.item_list = res.data.docs
                }
            })
            .catch(err => alert("Algo deu errado!"))
    },
}
</script>
