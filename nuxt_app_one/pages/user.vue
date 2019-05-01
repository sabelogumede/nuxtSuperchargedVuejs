<template>
    <div>
        this is user.vue in pages/

        <!-- nuxt child helpes with the nesting.
            Its like a window -->
        <nuxt-child/>
    </div>
</template>

<script>
    import my_comp from '~/components/my_comp'

    export default {
        components:{
            my_comp
        }
    }
</script>
