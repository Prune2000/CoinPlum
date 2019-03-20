import axios from 'axios';
export default class Event {
    constructor(coinid) {
        this.coinid = coinid;
    }

    async getResults() {
        
        try {
            const eventRes = await axios(`https://api.coinpaprika.com/v1/coins/${this.coinid}/events/`);
            
            // Reversing the array because the events are starting with the oldest and I want to display the most recent first
            this.resultEvent = eventRes.data;

            let selectedEvents = [];
            
            const futureEvents = (event) => {
                // Selecting only future events
                // 1. Get today's date and format it:
                let today = new Date().toISOString(); // gets this format: 2017-04-27T23:45:05.654Z
                let todayArray = today.split('T'); // separates the date from the time
                let todayArrayDate = todayArray[0].split('-'); // separates yy-mm-dd
                
                // 2. Format the date from each events:
                let eventsDate = event.date.split('T');
                let eventsDateArray = eventsDate[0].split('-');

                // 3. Compare today's date to the event's date. Push it in an array if it is in the future
                if (eventsDateArray[0] >= todayArrayDate[0] && eventsDateArray[1] >= todayArrayDate[1] && eventsDateArray[2] >= todayArrayDate[2]) {
                    selectedEvents.push(event);
                    return selectedEvents;
                }
            }

            this.resultEvent.forEach(futureEvents);

            this.resultEvent = selectedEvents;

        } catch (error) {
            alert('Error in the event');
        }
    }
}