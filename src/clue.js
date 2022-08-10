// ITERATION 1

// Suspects Array

const suspectsArry = [
    { 
      firstName: 'Jacob',
      lastName: 'Green',
      occupation: 'Entrepreneur'
    }
  ];

// Rooms Array

const roomsArray = [
    {
      name: "Room1",
    }, 
    
    {
      name: "Room2",
    },
    
    {
      name: "Room3",
    },
    
    {
      name: "Room4",
    },
    
    {
      name: "Room5",
    },
    
    {
      name: "Room6",
    },
    
    {
      name: "Room7",
    },
    
    {
      name: "Room8",
    },
    
    {
      name: "Room9",
    },
    
    {
      name: "Room10",
    },
    
    {
      name: "Room11",
    },
    
    {
      name: "Room12",
    },
    
    {
      name: "Room13",
    },
    
    {
      name: "Room14",
    },
    
    {
      name: "Room15",
    },
  ];

// Weapons Array

const weaponsArray = [
    {
      name: "Pistol",
      weight: 10
    },
    
    {
      name: "AK", 
      weight: 20 
    }, 
    
    {
      name: "WalterPPQ", 
      weight: 30
    }, 
    
    {
      name: "Baseballbat",
      weight: 40
    },
    
    {
      name: "Rope",
      weight: 50
    },
    
    {
      name: "Knife",
      weight: 60
    }, 
    
    {
      name: "Sword",
      weight: 70
    },
    
    {
      name: "Toothpick",
      weight: 80
    },
    
    {
      name: "RPG",
      weight: 90
    },
  ];


// ITERATION 2

function selectRandom(selectRandomArray){
    const rand = Math.random()*selectRandomArray.length | 0;
    const rValue = selectRandomArray[rand];
    return rValue;
  }; 
  
  

function pickMystery() {}


// ITERATION 3

function revealMystery() {}

