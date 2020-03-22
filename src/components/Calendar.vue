<template>
  <div class="demo-app">
    <FullCalendar
      class="demo-app-calendar"
      ref="fullCalendar"
      defaultView="timeGridWeek"
      eventTextColor="white"
      :header="{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      }"
      :plugins="calendarPlugins"
      :weekends="calendarWeekends"
      :events="calendarEvents"
      :editable="true"
      :droppable="true"
    />
  </div>
</template>

<script>
import { db } from "@/main"
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data: function() {
    return {
      calendarPlugins: [
        // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin // needed for dateClick
      ],
      calendarWeekends: true,
      calendarEvents: [
        // initial event data
        { title: "Event Now", start: new Date() }
      ]
    };
  },

mounted() {
  this.getEvents();
},

  methods: {
     getEvents() {
     db.collection("task list").get().then(function(querySnapshot) {
     querySnapshot.forEach(function(doc) {
         // doc.data() is never undefined for query doc snapshots
         console.log(doc.id, " => ", doc.data());
     });
 });
     }
  },
};
</script>

<style lang='scss'>
// you must include each plugins' css
// paths prefixed with ~ signify node_modules
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/timegrid/main.css";
.demo-app {
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

.demo-app-calendar {
  margin: 0 auto;
  max-width: 900px;
}
calendarEvents {
  color: white;
  }
</style>