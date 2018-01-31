import backgroundScreenshot from '../static/images/background-screenshot.png';
import breakoutScreenshot from '../static/images/breakout-screenshot.png';
import budgitScreenshot from '../static/images/budgit-screenshot.png';
import cathayBallScreenshot from '../static/images/cathay-ball-screenshot.png';
import electoralSystemVisualizationScreenshot from '../static/images/electoral-system-visualization-screenshot.png';
import floodItScreenshot from '../static/images/floodit-screenshot.png';
import goldenJubileeAwardsOfExcellenceScholarshipScreenshot from '../static/images/golden-jubilee-awards-of-excellence-scholarship-screenshot.png';
import jottoScreenshot from '../static/images/jotto-screenshot.png';
import joulesScreenshot from '../static/images/joules-screenshot.png';
import monSheongFoundationScreenshot from '../static/images/mon-sheong-foundation-screenshot.png';
import monSheongTelethonScreenshot from '../static/images/mon-sheong-telethon-screenshot.png';
import pubbleScreenshot from '../static/images/pubble-screenshot.png';
import recipezyScreenshot from '../static/images/recipezy-screenshot.png';
import squareSwapper5000Screenshot from '../static/images/squareswapper5000-screenshot.png';

const Projects = [
  {
    name: 'Airo Health',
    image: { src: backgroundScreenshot, alt: 'Airo Health Screenshot' },
    technologies: [ 'C++', 'Firebase', 'Java', 'JavaScript', 'Objective-C', 'React Native', 'Redux'],
    description: 'iOS and Android apps to help users track and relieve anxiety',
    links: [
      { name: 'App Store', address: 'https://itunes.apple.com/us/app/airo-health/id1331707609?ls=1&mt=8' },
      { name: 'Google Play', address: 'https://play.google.com/store/apps/details?id=com.airohealth' },
    ],
  },
  { 
    name: 'Breakout',
    image: { src: breakoutScreenshot, alt: 'Breakout Screenshot' },
    technologies: [ 'C++', 'X11 Library' ],
    description: 'A clone of the simple brick-breaking arcade game by Atari',
    links: [
      { name: 'GitHub', address: 'https://www.github.com/elailai94/breakout' },
    ],
  },
  {
    name: 'Budg.it',
    image: { src: budgitScreenshot, alt: 'Budg.it Screenshot' },
    technologies: [ 'InVision', 'Sketch' ],
    description: 'A high-fidelity prototype of a simple, student-focused budgeting application',
    links: [
      { name: 'InVision', address: 'https://projects.invisionapp.com/share/C6CLI17NE' },
    ],
  },
  {
    name: 'Cathay Ball',
    image: { src: cathayBallScreenshot, alt: 'Cathay Ball Screenshot' },
    technologies: [ 'CSS', 'HTML', 'JavaScript', 'MySQL', 'PHP', 'WordPress' ],
    description: "The official website to promote Mon Sheong Foundation's annual charity gala",
    links: [
      { name: 'Website', address: 'https://cathayball.monsheong.org' },
    ],
  },
  {
    name: 'Distributed System',
    image: { src: backgroundScreenshot, alt: 'Distributed System Screenshot' },
    technologies: [ 'C++' ],
    description: 'A simple distributed system to execute remote procedure calls',
    links: [
      { name: 'GitHub', address: 'https://www.github.com/elailai94/distributed-system' },
    ],
  },
  {
    name: 'Electoral System Visualization',
    image: { src: electoralSystemVisualizationScreenshot, alt: 'Electoral System Visualization Screenshot' },
    technologies: [ 'CSS', 'HTML', 'JavaScript', 'jQuery', 'Underscore.js' ],
    description: 'A visual simulation of four different electoral systems',
    links: [
      { name: 'GitHub', address: 'https://www.github.com/elailai94/electoral-system-visualization' },
    ],
  },
  {
    name: 'FloodIt',
    image: { src: floodItScreenshot, alt: 'FloodIt Screenshot' },
    technologies: [ 'C++', 'X11 Library' ],
    description: 'A clone of the simple tile-matching puzzle game',
    links: [
      { name: 'GitHub', address: 'https://www.github.com/elailai94/floodit' },
    ],
  },
  {
    name: 'Golden Jubilee Awards of Excellence Scholarship',
    image: { src: goldenJubileeAwardsOfExcellenceScholarshipScreenshot, alt: 'Golden Jubilee Awards of Excellence Scholarship Screenshot' },
    technologies: [ 'CSS', 'HTML', 'JavaScript', 'MySQL', 'PHP', 'WordPress' ],
    description: "The official website to promote Mon Sheong Foundation's annual scholarship awards",
    links: [
      { name: 'Website', address: 'http://www2.monsheong.org/scholarship' },
    ],
  },
  {
    name: 'Jotto',
    image: { src: jottoScreenshot, alt: 'Jotto Screenshot' },
    technologies: [ 'Java', 'Swing GUI Toolkit' ],
    description: 'A clone of the logic-oriented word game by Morton M. Rosenfeld',
    links: [
      { name: 'GitHub', address: 'https://www.github.com/elailai94/jotto' },
    ],
  },
  {
    name: 'Joules',
    image: { src: joulesScreenshot, alt: 'Joules Screenshot' },
    technologies: [ 'Ruby' ],
    description: 'A library (gem) for providing Physics formulas',
    links: [
      { name: 'GitHub', address: 'https://www.github.com/elailai94/joules/' },
      { name: 'RubyGems', address: 'https://www.rubygems.org/gems/joules' },
    ],
  },
  {
    name: 'Mon Sheong Foundation',
    image: { src: monSheongFoundationScreenshot, alt: 'Mon Sheong Foundation Screenshot' },
    technologies: [ 'Chase Paymentech API', 'CSS', 'Foundation', 'HTML', 'JavaScript', 'MailChimp API', 'MySQL', 'PayPal Payments API', 'PHP', 'SASS', 'WordPress' ],
    description: 'The official website of Mon Sheong Foundation',
    links: [
      { name: 'Website', address: 'https://www.monsheong.org' },
    ],
  },
  {
    name: 'Mon Sheong Telethon',
    image: { src: monSheongTelethonScreenshot, alt: 'Mon Sheong Telethon Screenshot' },
    technologies: [ 'CSS', 'HTML', 'JavaScript', 'MySQL', 'PHP', 'WordPress' ],
    description: "The official website to promote Mon Sheong Foundation's annual televised fundraising event",
    links: [
      { name: 'Website', address: 'https://telethon.monsheong.org' },
    ],
  },
  {
    name: 'OS161',
    image: { src: backgroundScreenshot, alt: 'OS161 Screenshot' },
    technologies: [ 'C' ],
    description: 'An educational operating system developed by the Systems Research Group at Harvard University',
    links: [
      { name: 'GitHub', address: 'https://www.github.com/elailai94/os161' },
    ],
  },
  {
    name: 'Pubble',
    image: { src: pubbleScreenshot, alt: 'Pubble Screenshot' },
    technologies: [ 'Express', 'JavaScript', 'Node.js', 'Pebble SDK','XE Currency Data API', 'Zomato API' ],
    description: 'A Pebble app to help users to find the price of meals in restaurants near their current location',
    links: [
      { name: 'Devpost', address: 'https://www.devpost.com/software/pubble' },
      { name: 'GitHub', address: 'https://www.github.com/elailai94/pubble' },
    ],
  },
  {
    name: 'Recipezy',
    image: { src: recipezyScreenshot, alt: 'Recipezy Screenshot' },
    technologies: [ 'JavaScript', 'React Native', 'Redux', 'Spoonacular API' ],
    description: 'iOS and Android apps to help users discover new recipes based on dietary preferences while using as many ingredients in their inventory as possible',
    links: [
      { name: 'GitHub', address: 'https://www.github.com/hippothesis/recipezy' },
      { name: 'Google Play', address: 'https://play.google.com/store/apps/details?id=com.recipezy&hl=en' },
    ],
  },
  {
    name: 'SquareSwapper5000',
    image: { src: squareSwapper5000Screenshot, alt: 'SquareSwapper5000 Screenshot' },
    technologies: [ 'C++', 'Ncurses', 'X11 Library' ],
    description: 'A simple tile-matching puzzle game inspired by Candy Crush and Bejeweled',
    links: [
      { name: 'GitHub', address: 'https://www.github.com/elailai94/squareswapper5000' },
    ],
  },
  {
    name: 'The Go-Back-N Protocol',
    image: { src: backgroundScreenshot, alt: 'The Go-Back-N Protocol Screenshot' },
    technologies: [ 'Java' ],
    description: 'Sender and receiver programs to transfer a text file between themselves across an unreliable network using the Go-Back-N protocol',
    links: [
      { name: 'GitHub', address: 'https://www.github.com/elailai94/the-go-back-n-protocol' },
    ],
  },
  {
    name: 'WLP4C',
    image: { src: backgroundScreenshot, alt: 'WLP4C Screenshot' },
    technologies: [ 'Assembly', 'C++' ],
    description: 'A compiler for the WLP4 programming language, which is a subset of the C/C++ programming language',
    links: [
      { name: 'GitHub', address: 'https://www.github.com/elailai94/wlp4c' },
    ],
  },
];

export default Projects;
