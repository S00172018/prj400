<template>
  <div class="about">
      <Header/>
    <h1>Calendar</h1>
    <Calendar/>
    <Cards/>
  </div>
</template>

<script>
import Calendar from '../components/Calendar'
import Cards from '../components/Cards'

export default {

  components: {
    Calendar,
    Cards
  }
  
}
</script>