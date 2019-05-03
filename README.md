
#  Carmen Sandiego with react

## The Game 
Inspired by the original Carmen Sandiego 1990/1991 MS-DOS Version.  https://www.youtube.com/watch?v=bJFLONgDnDE

##  TO DO
- [ ]  Save and Restore the state of the game in localStorage with possibily to rename each save
- [ ]  Add animation when expiration time i.e. the date is superior at Sunday, 5pm. 
- [x]  Add animation when the user has a wrong warrant  
- [x]  Fix map animation plane when the user go back from a wrong destination  
- [ ]  Compress and optimize mp4 animations, mp3 sounds and jpg pictures and store them to cdn
- [ ]  Fix french i18n translations : place, date, end messages, dossiers, typemachine, etc.
- [ ]  Add shortcuts keyboard 
- [ ]  Write some tests with Jest
- [ ]  Fix animation display bug on Opera browser
- [ ]  Improve close button design
- [ ]  Fix `eval()` on crime options
- [x]  Add credit webpage
- [x]  Move EndFail EndSuccess to Config json
- [ ]  Preload media 
- [ ]  Move backdrop at top level

## Features, ideas
Typemachine interactive instructions divided through 20 steps. Main steps are: 
	* Username input text
	* New user ? Button yes or no (TO DO store user on remote)
	* Start the case and follow the first instructions
https://codepen.io/julien180/pen/jRQvrY

Typemachine at the end of the case. Fail or success. 
 
At step 20, the case is starting. 

Clues choosen within modal with emojis and vilain animation + club Bubble 

Destinations choosen on modal with emojis and map animation

Crime computer with 5 forms select: Sex, Hobby, Feature, Hair, Vehicule 

Dossiers of criminels from the menu

Save and restore game with localStorage from the menu

i18n English and French 

Data of the case are stored onto a json files `GameData/Data/`



##  Commands

Run the game in dev mode to [http://localhost:3000](http://localhost:3000) with hot reload
`yarn start` or `npm start`


Builds the app for production to the `build` folder.
`yarn build` or `npm run build`

Launches the test runner in the interactive watch mode.
`npm test`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).