<template>
    <div class='container large mid space-up'>
        <form action="POST">
            <input class='form-text' type="text" :value="item.slug" placeholder="Nome do item">
            <input class='form-text form-half' type="text" :value="item._id" placeholder="Código de Identificação">
            <input class='form-text form-half' type="text" :value="item.qtd" placeholder="Quantidade">
            <input class='form-text' type="text" :value="item.localizacao" placeholder="Localização" disabled='true'>
        </form>
    </div>
</template>

<script>

export default {
    props:[ 'item' ]
}
</script>
