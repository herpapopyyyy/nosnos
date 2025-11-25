const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "2911", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: Your birthday!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why does my papopy love me so much?", // Example trending search query
    "Why am i the prettiest girl in the Universe?", // Another example query
    `Why should we bring back hugs and insta reels?`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been friends?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2024-10-14", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together (as firends, praying we become lovers) for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap a tiny bit  of our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Fe Youm W Leila", // Title of the song
      artist: "Warda (EL Set/Umm Kulthum V2)", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Enta Omry",
      artist: "Umm Kulthum",
      left: "40%",
      top: "15%",
    },
    {
      title: "Baeed Annak",
      artist: "Umm Kulthum",
      left: "15%",
      top: "40%",
    },
    {
      title: "Ana Atoub 3n 7obk Ana?",
      artist: "ElSheikh Emam",
      left: "30%",
      top: "75%",
    },
    {
      title: "7eseni",
      artist: "TUL8TE",
      left: "5%",
      top: "65%",
    },
    {
      title: "A Girl Within My Soul",
      artist: "Abdelrahman Mohamed",
      left: "25%",
      top: "90%",
    },
    {
      title: "Bel A7lam",
      artist: "Nassif Zeytoun",
      left: "35%",
      top: "50%",
    },
    {
      title: "2lby Mtl El Ward",
      artist: "Jadal",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Tiny Bit Of Our Messages", // Title for the messages recap page
    messageGallery: [
      { title: "" }, // Message entry
      { title: "" },
      { title: "" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Random Pictures Of Yours That I Really Like", // Title for the pictures recap page
    pictureGallery: [
      { title: "" }, // Picture entry
      { title: "" },
      { title: "" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Hi, ANA B7BK AWY YARAB T7BINI💖", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for everything, my love! 💖 Wishing us many more wonderful days,months and years together.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been friends?", // Example of a correct search query
    "how long have we been friends", // Another example of a correct search query
  ],
};

export default config;

