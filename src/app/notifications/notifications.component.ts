import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications = [
      {
		    id: "001",
        type: "message",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        from: "James Arthur",
		    fromId: "xY6g4dE2",
		    recipientId: "8rlqjbr",
		    timestamp: "2017-02-12T10:32:51+00:00"
      },
      {
        id: "002",
        type: "task",
        content: "Get some bloody sleep",
        from: "Jono Forbes",
		    fromId: "xY6g4dE2",
		    recipientId: "8rlqjbr",
		    timestamp: "2017-02-12T09:12:51+00:00"
      },
      {
        id: "003",
        type: "calendar",
        content: "Invitation to attend Tuesday brunch at the office",
        from: "Anthony Van Biervliet",
		    fromId: "xY6g4dE2",
	    	recipientId: "8rlqjbr",
		    timestamp: "2017-02-12T06:06:51+00:00"
      },
	    {
        id: "004",
        type: "task",
        content: "Look after Carrie this weekend",
        from: "Debbie Reynolds",
		    fromId: "xY6g4dE2",
		    recipientId: "8rlqjbr",
		    timestamp: "2016-11-12T09:12:51+00:00"
      },
	    {
		    id: "005",
        type: "message",
        content: "I'm worried about John. He's been acting awful strange lately. Do you think he's okay?",
        from: "Jackie Kennedy",
		    fromId: "xY6g4dE2",
		    recipientId: "8rlqjbr",
		    timestamp: "1964-02-12T10:32:51+00:00"
      },
      {
        id: "006",
        type: "message",
        content: "Can you find a way to clone me without creating an existential challenge for me and a conflating sense of no longer being unique? Could be useful",
        from: "Jono Forbes",
		    fromId: "xY6g4dE2",
		    recipientId: "8rlqjbr",
		    timestamp: "2017-02-12T09:12:51+00:00"
      },
      {
        id: "007",
        type: "task",
        content: "braaaaaaaaaaaaaaaaaaaiiins",
        from: "Rob Zombie",
		    fromId: "xY6g4dE2",
		    recipientId: "8rlqjbr",
		    timestamp: "2012-02-12T06:06:51+00:00"
      },
	    {
        id: "008",
        type: "task",
        content: "Is this the real world? Is it just fantasy?",
        from: "Freddie Mercury",
		    fromId: "xY6g4dE2",
	    	recipientId: "8rlqjbr",
		    timestamp: "2016-11-12T09:12:51+00:00"
      }

  ];

  

  constructor() { }

  deleteMe(i) {
    this.notifications.splice(i,1);
    console.log(i);
  }
    
  ngOnInit() {
  }


};