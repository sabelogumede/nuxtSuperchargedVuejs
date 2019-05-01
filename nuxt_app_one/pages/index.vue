<template>
  <section class="container">
    <div>
      <my_comp/>
      <Button type='primary'>iView Button</Button>
      <Button type='dashed'>Dashed</Button>
      <Button type='text'>Text</Button>
      <br><br>
      <Button type='info'>Info</Button>
      <Button type='success'>Success</Button>
      <Button type='warning'>Warning</Button>
      <Button type='error'>Error</Button>
      
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import my_comp from '@/components/my_comp.vue'

export default {
  components: {
    AppLogo,
    my_comp
  }
}
</script>

<style>

</style>

