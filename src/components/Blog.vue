<template>
    <HeaderBlogComponent />
    <h1>Este é o meu blog</h1>
</template>
<script>
    import HeaderBlogComponent from './Headers/HeaderBlogComponent.vue';

    export default {
        name: 'Blog',
        components: {
            HeaderBlogComponent
        }
    }
</script>