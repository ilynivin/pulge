<h3 align = "center">

![PulgeImg](https://cdn.discordapp.com/attachments/1101145432941404164/1101737220735500388/readme_Center_Image.png)

</h3>

---

<h2 align = "center">

![npm](https://img.shields.io/npm/v/pulge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/Nivin389/pulge)
![GitHub contributors](https://img.shields.io/github/contributors/Nivin389/pulge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Nivin389/pulge)
![GitHub](https://img.shields.io/github/license/Nivin389/pulge)
![GitHub top language](https://img.shields.io/github/languages/top/Nivin389/pulge)
![npm](https://img.shields.io/npm/dt/pulge)

</h2>


## Table of Contents 🎢

- [WhatIsPulge](#what-is-pulge--🎭)
- [Demo](#demo-🎞)
- [HowPulgeWorks](#how-pulge-works--⚙)
- [Installation](#installation-💿)
- [How do i Create Headings and add  contents in pulge](#how-do-i-create-headings-and-add-contents-in-pulge--🎆)
- [Publishing 🌐](#publishing-🌐)
- [Contributers 🤝](#contributers-🤝)


---


# What is Pulge ? 🎭

Pulge is a Package for those who wants to create a CLI Portfolio . Pulges uses other Pakages such as [Chalk](https://www.npmjs.com/package/chalk) , [Chalk Animation](https://www.npmjs.com/package/chalk-animation) , [Figlet](https://www.npmjs.com/package/figlet) and [Gradient - String](https://www.npmjs.com/package/gradient-string) . 

Pulge may be help full those who  wanted to create games in CLI . 


---

# Demo 🎞

To run the Demo Mod open the Command Prompt and run 
```
npx pulge
```

## How pulge Works ? ⚙

Pulge uses the power of JavaScript and Other Pakages to run it . 

## Installation 💿

To install Pulge run 
```
npm i pulge
```
When the command runs sucessfully Create a `index.js`. File and Copy the following code in the `Index.js` File

```
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
        const msg = `Thank you for Reading `
    
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

```

**Note** : **The SHEBANG IS Importent for the Pulge dont remove it . It wont work.**

---

## How do i Create Headings and add  contents in pulge ? 🎆

 To create a Heading and to add contents in Pulge create a `async function FunctionName()` and inside it type `console.log(``)` The backtiks will help to print multiple lines in Console.log . 
 
 - To add colours to text Copy the follwing command to ${chalk.bgcolour('word')}

 Call the Function `await Function-Name` at the end of the code . 

 **Note**: **The order of the function determines which function Should run**


 ## Publishing 🌐

 To publish Pulge type the follwing command in Terminal 
 ```
 npm init
 ```
 When the command runs sucessfuly go to `package.json` and add this command 
 ```
   "bin": "./index.js"
 ```

And to run Automatically paste this command in `package.json` Under the Scripts
```
  "scripts": {
    "start": "node ."
  }

  ```


---

## Contributers 🤝

We Loves People Who loves to Contribute our Project ;D

<a href="https://github.com/Nivin389/pulge/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Nivin389/pulge" />
</a>
