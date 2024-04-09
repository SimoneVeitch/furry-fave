## Phase 1 Project - Furry Fave 2024 Web application 

## Furry Fave summary

It’s that time of year again, Furry Fave time. The competition where dogs of all sizes, qualities and barks compete to win Furry Fave of the year. 

On the Furry Fave website users can scroll through a gallery of this year’s contestants and like their favourite dog to help the Furry Fave judges decide who should win Furry Fave 2024. 

Users can also add their own dog to the competition by submitting a form with their dog’s details. 

## Project detail 

The Furry Fave web application is my response to the Academi Xi Front-End Web Development: Transform course, Phase 1 Project. 

As per the project requirements, Furry Fave is a HTML/CSS/JS frontend that accesses data from a db.json file using json-server. 

The web application runs on a single page, using event listeners and loop iterations to fetch, patch and display data. 

## Getting started 

The data I am using on the web application is located in a db.json file. For the application to display this data and the features around it, you will need to get the JSON server up and running in the background. 

First you need to fork and clone the project into your local directory. Please fork a copy into your GitHub account first, then clone from that copy, to avoid any edits being made to my original copy. 

Next, start up JSON Server. To do this, you run json-server --watch db.json in your terminal. Running this command will instruct json-server to use a db.json file in your terminal's current directory, so make sure to run this command from the same directory as the project. In your browser, you can verify the server is running by navigating to http://localhost:3000/dogs to see the API data.

Leave the server running for the duration of your review. Open a second terminal window and navigate to the project website by opening the index.html file in the browser. Please note Google Chrome is the preferred browser for this project review. 

## Web application features and functionality

The web application has seven sections, each with its own key features and functionality.

**Header section**
The header section contains the navigation for the site and the Furry Fave icon. The navigation consists of three elements; ’home’, ‘contestants’ and ‘submit a dog’. Clicking on these will take the user to the corresponding sections on the site. 

On mobile, the navigation design changes to a hamburger menu. This has been achieved through javascript. 

**Hero section**
The hero section consists of a h1, an icon animation and a hero button. 

The h1 is the title of the competition. Below the h1 is a dog medal icon, which is animated in CSS. Below the icon is the hero button. When clicked, the page scrolls to the form at the bottom of the web application where users can add a dog to the competition. This has been achieved through javascript, by using a click event listener. 

**Intro section**
The intro section consists of a couple of paragraphs that explains the purpose of the website and competition to users. 

**Contestants section**
The contestants section consists of a h2, two icons, and a contestants gallery which includes like buttons. 

The h2 explains that this is the contestants section. When a user hovers over the h2 the text changes. This has been achieved with javascript, using a mouseenter/mouseleave event listener. 

Below the h2 are two animated heart dog paw icons. 

Below the icons is the main feature of the website, the contestants gallery. The gallery is a scrolling gallery which displays the dogs that are in the competition to be Furry Face 2024. When a user hovers on an image of a dog the card flips and displays the back which has information about the dog as well as a total of how many likes the dog has to date. 

Below the image/card of each dog is a like button which the user can click to increase a dog’s likes. 

The gallery functionality has been achieved with javascript using fetch and patch requests, and click and submit event listeners. The submit event listener is connected to the form submit at the bottom of the application, but data submitted through the form will display in the gallery. 

**Leader section**
The leader sections consists of a h2, an animated paragraph, an image and a confetti animation. 

The h2 explains the purpose of the section. The animated paragraph and the image updates dynamically based on which dog has the most likes to date. This has been achieved with javascript. 

The confetti animation has been added using javascript and css to make the section feel celebratory. 

**Form section**
The form section consists of a h2, a paragraph, an icon and a form. 

The h2 explains the purpose of the section, and the paragraph the purpose of the form. Below the paragraph is an animated icon. 

Below the icon is a form. To enter a dog into the Furry Fave 2024 competition a user can add the details of the dog they want to submit in the form. Once they click submit the dog’s details and image will display in the contestants gallery. After a user has clicked submit they will see a thank you message in place of the form.

The form functionality has been achieved with javascript using fetch request, and submit event listeners.  

**Footer section**
The footer section consists of a paragraph and the Furry Fave icon. 

## Contribution

This is a project web application build, which will be reviewed and graded. Please do not contribute to this project or make any amends to original files. 

## Acknowledgement

Four icons have been used throughout the web application, which I have downloaded from Noun Project. 

**Header and footer icon**
Dog by hyojung kang from Noun Project (CC BY 3.0): https://thenounproject.com/icon/dog-6024620/ 

**Hero icon**
Badge Pet by NeueDeutsche from Noun (CC BY 3.0): https://thenounproject.com/icon/badge-pet-465367/ 

**Contestants icon**
footprint by rasendria from Noun (CC BY 3.0): https://thenounproject.com/icon/footprint-3974617/ 

**Form icon**
shiba tongue by Kseniia Moore from Noun (CC BY 3.0): https://thenounproject.com/icon/shiba-tongue-4701681/ 







