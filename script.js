
//doors
let doorImage1 = document.querySelector('#door1');
let doorImage2 = document.querySelector('#door2');
let doorImage3 = document.querySelector('#door3');



let numClosedDoors = 3;

let openDoor1 = ''
let openDoor2 = ''
let openDoor3 = ''

let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg'

const startButton = document.querySelector('#start');

let currentlyPlaying = true;

const isBot = (door) => {
    if (door.scr === botDoorPath) {
        return true;
    } else {
        return false;
    }
}

//play function
const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }

}

const playDoor = (door) => {
    numClosedDoors--;
    
    if (numClosedDoors===0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
}


//randomize chorebot
const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);

    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    } else if (choreDoor === 3) {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }

}

//door images
const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg'
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg'




//doors
 doorImage1.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    } 
}

doorImage2.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    } 
}

doorImage3.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    } 
}

function startRound() {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.textContent = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
    
}

startButton.onclick = () => {
    if(!currentlyPlaying){
        startRound();
    }
}



const gameOver = (status) => {
    if(status === 'win') {
        startButton.textContent = 'You win! Play again?';
    } else {
        startButton.textContent = 'Game over! Play again?';
    }

currentlyPlaying = false;
}




//randomChoreDoorGenerator()
startRound();

