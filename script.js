
//doors
let doorImage1 = document.querySelector('#door1')
let doorImage2 = document.querySelector('#door2')
let doorImage3 = document.querySelector('#door3')


//randomize chorebot
let numClosedDoors = 3;

let openDoor1 = ''
let openDoor2 = ''
let openDoor3 = ''

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
    doorImage1.src = openDoor1;

}

doorImage2.onclick = () => {
    doorImage2.src = openDoor2;

}

doorImage3.onclick = () => {
    doorImage3.src = openDoor3;

}

randomChoreDoorGenerator()

