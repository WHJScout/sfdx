import {
    LightningElement,
    api,
    wire
} from 'lwc';
import {fireEvent} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo; //{roomName,:'room-01',rommCapacity:12}
    @api areDetailsVisible = false;

    @wire(CurrentPageReference) pageReference;  

    titleClickHandler() {
        // Creates the event with the contact ID data.
        const selectedEvent = new CustomEvent('notification', {
            detail: this.meetingRoomInfo,
            bubbles:true
        });

        // Dispatches the event.
        this.dispatchEvent(selectedEvent);

        fireEvent(this.pageReference, 'pubsubtileclick', this.meetingRoomInfo);
    }



}