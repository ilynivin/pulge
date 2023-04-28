#!/usr/bin/env node

// SHEBANG 👆 (#!)

// Import 
import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";

let playername; 

// Timer to stop the animation 👇

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r,ms))



// Function 1 ( Welcome ) 👇
async function Welcome(){

    const rainbowTitile = chalkAnimation.rainbow('Welcome to My Profile \n');
    await sleep();
    rainbowTitile.stop();
}

// Function 2 (About me ) 👇

async function Aboutme(){

    const rainbowTitile  = chalkAnimation.neon('About Me \n')
    await sleep();
    rainbowTitile.stop();

    console.log(`
    Hai I am ${chalk.bgBlue('Nivin')}. A 15 y/o Web devaloper and App devaloper 
    I have started my Coding journey since is was at ${chalk.bgGrey('6th')}.
    I am Living under the city Working to Make ${chalk.bgGreen('Cool Stuffs')}.
    In my spare time i have create 15+ Repo in my ${chalk.bgCyanBright('Github ')}.
    I am a huge fan of ${chalk.bgYellow('Robotics')} and i have create a Robotics since i was at 5th.

    `);
}


// Function 3 (Skills ) 👇
async function skills(){

    const rainbowtitile = chalkAnimation.pulse('Skills \n')
    await sleep();
    rainbowtitile.stop();

    console.log(`
    ${chalk.bgYellow('Java Script')}
    ${chalk.bgRed('HTML')}
    ${chalk.bgBlue('Css')}
    ${chalk.bgGreen('Python')}
    ${chalk.bgGray('MarkDown')}

    `)
}


// Function 4 (Projets ) 👇
async function projets(){

    const rainbowtitile = chalkAnimation.karaoke('My Projects \n')
    await sleep();
    rainbowtitile.stop();

    console.log(`
    
    ${chalk.bgMagenta('My Portfolio Website')}
    ${chalk.bgBlueBright('My Blog')}
    ${chalk.bgGreen('Js Counter')}
    ${chalk.bgCyanBright('Calculator')}
    `)

}


// Function 5 (ASCII Display ) 👇
 async function End(){
        const msg = `Thank You For Reading !`
    
        figlet(msg, (err , data) => {
            console.log(gradient.pastel.multiline(data));
        });
    }



// Order of the Program to Run 👇

await Welcome();
await Aboutme();
await skills();
await projets();
await End();