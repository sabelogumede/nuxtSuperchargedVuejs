<template>
    <div>
        this is id.vue in /user

        <!-- Id Router =id?id=1233 url -->
        <!-- <b>{{$route.query.id}}</b> -->

        <!-- Id Router =parsing params url -->
        <b>{{$route.params.id}}</b>
        <br/>
        <!-- Id Router =parsing query -->
        <b>{{$route.query.msg}}</b>
        
    </div>
</template>

<!-- All user input should be validated -->
<script>
    export default{
        validate({params,query,store}){
            //01 at the end it must return either true or false
            //if it returns true page loads but if it returns false = error
            // return true

            //02. we can limit param input to type only, 
            //for number...
            return /^\d+$/.test(params.id)
        }
    }
</script>