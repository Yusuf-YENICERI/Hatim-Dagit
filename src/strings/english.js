let english = {
  Navbar: {
    Logo: 'Distribute Khatm',
    Links: ['Make New Khatm', 'About', 'Change Language', 'My Charts'],
    LinkHelpers: ['/', 'hakkimda', '/cizelgelerim'],
    Buttons: ['Send Feedback'],
    Languages: [
      {label: 'Arabic', value: 'ar'},
      {label: 'English', value: 'en'},
      {label: 'Turkish', value: 'tr'},
    ],
    Pwa: 'Download to Phone',
    Menu: 'Menu',
  },

  Pwa: {
    Alert: "Please use Chrome browser to download this, Safari doesn't support that feature yet!",
    Popup: [
      'To download this application please click',
      'the button available in your browser. Then choose the',
      'Add to Home Screen',
      'button from the menu open.',
      "the application is going to be installed insha'Allah.",
    ],
    SorryMessage: [
      `Dear Khatm Distribute users`,

      `First and foremost, we would like to express our gratitude to all the members who have been using the site. A substantial number of Khatms have been distributed for the Palestinian martyrs. May Allah be pleased. The website will be opened between 22:00-23:00(with Turkey time) in order to access the information in the made Khatms, inshaAllah.`,

      `Our site has undergone a restructuring process today due to unexpectedly high traffic. Therefore, we regret to inform you that we have had to temporarily close the site until the current congestion subsides.`,

      `Let's continue to pray for Palestine. We belive that we will see better days together, inshaAllah.`,

      `Khatm Distribute`,
    ],
  },

  Footer: {
    aciz_kul: 'Made by Yusuf YENİÇERİ',
    ziyaret: ['This site has been visited ', ' times'],
    version: 'Current version is ',
    GoToMainPage: 'Go to Home',
    Feedback: 'Give Feedback',
  },

  AlertDialog: {
    Text: 'You will send browser, browser information, system information etc. (user-agent in short) by accepting this. Do you want to continue?',
    Yes: 'Yes',
    No: 'No',
  },

  IsReadDialog: {
    Read: 'Read',
    NotRead: 'Being Read',
  },

  AutomaticKhatm: 'Stop Making Automatic Khatms',

  '/': {
    Question: 'Click on Button to Make New Khatm',
    MyInfos: 'Khatms I Made and My Charts',
    Button: {
      NewTag: 'New',
      BetaTag: 'Beta',
      MyInfos: {
        Charts: 'My Charts',
      },
      Main: 'New Khatm',
      YearBased: 'Make Yearly Khatm',
      Ramazan: 'Make New Ramazan Khatm (Cycled)',
      Aylar3: 'Make 3 Months Khatm',
      EvradEzkar: 'Distribute Vird-Dhikr',
      Header: {
        Text: 'Make New Khatm',
        InputSpan: [
          'Title',
          'Description',
          'Khatm Finish Date',
          'Number of Khatm',
          'Automatically make new Khatm when Khatm is finished',
          'Starting Date',
          'Number of Days To Finish A Khatm Together',
          'Total Khatm Number Will Be Finished',
          'Rotated Khatm',
        ],
        Input: ['Please enter a Khatm title'],
        Button: 'Continue',
      },
      Final: {
        Before: {
          Header: 'New Khatm Is Being Made!',
          Link: 'New Khatm Distribution Link:',
          LinkReady: 'Link is being made',
          Copy: 'Copy the Link',
          Button: 'Please wait',
        },

        After: {
          Header: 'New Khatm Is Ready!',
          Link: 'New Khatm Distribution Link:',
          Copy: 'Link Copied',
          Button: 'Continue',
        },
      },
    },
    ExistingKhatms: 'Khatms Made',
    BottomNavigation: {
      NewKhatm: 'New Khatm',
      KhatmInfos: 'My Khatm Informations',
    },
  },

  '/cuz': {
    KhatmFinishDate: ['The Prayer of this Khatm is going to be made at', '.'],
    NewSubKhatm: 'Add New Khatm to this page',

    Before: {
      Question: 'Click the Part You Want ..',
      Wait: 'Please wait ..',
      Error: 'An error occured, please refresh the page!',
      Deleted: 'This Khatm has been deleted by its owner!',
    },

    After: {
      Copy: {
        Before: 'Copy the Link',
        After: 'Link Copied',
      },
      Share: 'Share Khatm',
    },

    Button: {
      Question: 'part, enter your name to take it',
      Take: 'Take the Part',
      TakeCancel: 'Release the Part',
    },

    ShareBox: {
      Title: 'Select an app to share:',
      Sms: 'Share with Sms',
      Whatsapp: 'Share with Whatsapp',
    },

    AlertDialog: {
      Title: 'Part is already taken! Please take another Part.',
      Button: 'Ok',
      Feedback: 'Send Feedback',
    },

    CuzlerHatimCard: {
      deleteHatim: 'Delete Khatm',
      changeHatim: 'Change',
      takenParts: 'Taken parts',
      leftParts: ' parts left',
      yourParts: 'The Parts You Took',
      dua: [
        '',
        'days left until prayer',
        'Prayer was done',
        'Prayer will be made today',
        '',
        'days left until prayer',
      ],
      Modal: {
        Title: 'Change Khatm Info',
        Header: 'Khatm Title',
        Description: 'Khatm Description',
        Date: 'Khatm Prayer Date',
        Button: 'Ok',
      },

      Notification: {
        Title: 'Information is being updated',
        Description: 'Please wait until information is being updated.',
      },

      PartModal: {
        Title: 'Change Part Info',
        Title2: 'Enter your name below to take the Part',
        Name: 'Name of Who Taken the Part',
        ChangeNameButton: 'Change Name',
        CancelPart: 'Cancel Part',
      },
    },

    AddKhatmAlert: {
      Question: 'Are you sure you want to add a new Khatm?',
      YesButton: 'Yes',
      NoButton: 'No',
    },

    DeleteKhatmAlert: {
      Question: 'Are you sure you want to delete this Khatm?',
      YesButton: 'Yes',
      NoButton: 'No',
    },

    CuzItem: {
      ChartButton: 'View Chart',
    },
  },

  '/ramazan': {
    KhatmFinishDate: ['The Prayer of this Khatm is going to be made at', '.'],
    NewSubKhatm: 'Add New Khatm to this page',

    Before: {
      Question: 'Click the Part You Want ..',
      Wait: 'Please wait ..',
      Error: 'An error occured, please refresh the page!',
    },

    After: {
      Copy: {
        Before: 'Copy the Link',
        After: 'Link Copied',
      },
      Share: 'Share Khatm',
    },

    Button: {
      Question: 'part, enter your name to take it',
      Take: 'Take the Part',
      TakeCancel: 'Release the Part',
    },

    ShareBox: {
      Title: 'Select an app to share:',
      Sms: 'Share with Sms',
      Whatsapp: 'Share with Whatsapp',
    },
  },

  '/ucaylarhergun1cuz': {},
};

export default english;
