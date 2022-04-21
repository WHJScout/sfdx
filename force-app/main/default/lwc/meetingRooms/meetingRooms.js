import {
    LightningElement
} from 'lwc';



export default class MeetingRooms extends LightningElement {
    constructor() {
        super();
        this.template.addEventListener('notification', this.handleNotification);

    }

    meetingRoomsInfo = [{
            roomName: 'A-01',
            roomCapacity: '100'
        },
        {
            roomName: 'A-02',
            roomCapacity: '16'
        },
        {
            roomName: 'A-03',
            roomCapacity: '12'
        },
        {
            roomName: 'B-01',
            roomCapacity: '5'
        },
        {
            roomName: 'B-02',
            roomCapacity: '8'
        },
        {
            roomName: 'B-03',
            roomCapacity: '10'
        },
        {
            roomName: 'C-01',
            roomCapacity: '20'
        }

    ];

    selectedMeetingRoom;
    selectedMeetingRoomCap;


    // handleNotification(evt) {
    //     // Code runs when event is received
    //     console.log(`father get message from child ` + evt.detail);
    //     this.selectedMeetingRoom = evt.detail.roomName;
    //     this.selectedMeetingRoomCap = evt.detail.roomCapacity;
    // }

    handleNotification = (evt) => {
        // Code runs when event is received
        console.log(`father get message from child ` + evt.detail);
        this.selectedMeetingRoom = evt.detail.roomName;
        this.selectedMeetingRoomCap = evt.detail.roomCapacity;


    };



}