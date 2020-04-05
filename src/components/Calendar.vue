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
      :activator="selectedElement"
      @eventDrop="updateEvent"
      @eventResize="updateEvent"
      @eventReceive="updateEvent"

      @eventClick="eventClick"

    />
  </div>
</template>

<script>
import Vue from "vue";
import { db } from "@/main"
import moment from 'moment';
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

Vue.use(moment);

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data: () => ({ 
      calendarPlugins: [
        // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin // needed for dateClick
      ],
      calendarWeekends: true,
      calendarEvents: [],

      title: null,
      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      currentlyEditing: null,

      dropAccept: '.div.list-group-item',
      drop: function() {
      console.log('div.list-group-item');
    }
  
  }),

mounted() {
  this.getEvents();
},

  methods: {
    async getEvents () {
      let snapshot = await db.collection('task list').get()
      const calendarEvents = []
      snapshot.forEach(doc => {
        let appData = doc.data()
        appData.id = doc.id
        calendarEvents.push(appData)
        console.log(doc.id, " => ", doc.data());
      })
      this.calendarEvents = calendarEvents
     },

     eventClick(arg) {
        console.log(arg.event.start)
        var start = arg.event.start
        console.log(start.getUTCHours());

        var newStart = moment(start).format();
        console.log(newStart)
        
     },

     async updateEvent (arg) {

      await db.collection('task list').doc(arg.event.id).update({
        start: moment(arg.event.start).format(),
        end: moment(arg.event.end).format()
      })
      console.log("The ID is " + arg.event.id + "and the start is " + arg.event.start);
    },

    getColour(event) {
      if (event.priority == true)
      return "red"
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