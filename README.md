
# Project Name
Rick And Morty Peeps
![Alt Text](https://github.com/kelvinbe/rick-morty/blob/fixes-code-cleanup/public/morty.png?raw=true)

## Overview

Rick And Morty peeps is a NextJS web application that fetches data from Rick and Morty Api and displays the location as well as the residents of that particular location. 
We can search by location, character and episodes. It allows naviagtion to a specific resident and the ability to view details about said resident and add notes to that user.

## Functionality

- Fetching data from a REST API endpoint.
- Displays detailed information about each resident.
- Search and Filter Data by Location, Character and Episodes
- Allows users to add and save notes for each resident.
- Pagination of pages 


## Design Decisions

- **REST API** - My descision in using REST API is mainly based on the fact that they are better to use when it comes to performing simple data fetching. Being resource oriented also makes using REST API a good choice while ethcing data from apis. I achived this by using the fetch method and getting the response with my data ready to use and manipulate to give desired out come.

- **Atomic Design Structure** - I decided to use the atomic design structure since it creates a very good blue print on how to view component building. It allows the creation of reusable compoents by breaking them down into smaller chunks which are the Atoms and Building them up to Molecules which are made up of atoms and finally to organisms which are fully fledged components. It makes design work fairly easy since coming up with an idea and breaking it down iss fast and reliable in the long run.

- **Responsiveness** - Often a very important part of building any application is the view that the user will most likely use a mobile device to acces the site. Hence the use of Tailwind CSS to achive this is very optimal with the use of grid display it allowed for out of the box responsiveness for the application.

- **State Management** - To handle the state management i moved to use the components state passing down props since the project is not monumentally big, component state using use state would suffice and passing down props would not grow into prop drilling, which is often good to avoid. In future though i do see the need to add Redux Tool Kit as a means to handle state with the benefit of a global state allowing for the easy handling of sharing data between components.

- **Types Handling** - Working with Typescript is very beneficial by offering the service of adding types to our components using interface or type. This allowed me to have proper check of the data coming in and out of the components that way avoiding any unnecessary errors that may arrise by not explicitly setting the type.

- **Pagination** - Added pagination to allow for the smooth movement from one page to the next. This allows the user to access the different characters that are offered by the api and to view their status as well as their image and location where they currently reside. This was achived through a component that hits the api that allows for pages and count and next values from the api and updating the filtered data.

## Implementation Decisions

- **LocalStorage**: To allow users to add notes to a specific user i moved to use local storage for the persistance of the data because it is easier for the client side persistance  and  storing the data for the user in this case being the notes alone i thought it would be more prudent to use local storage. This would also reduce server load by not having frequent requests to a server if a database was to be used hence i found local storage as a good fit for the small implementation.

- **Routing**: I moved to use the NextJS folder structure for routing since it is a very convenient and powerful tool. With the provision of next/navigaition's routing, i was able to send each residents details via a url that i added to the params with url and decoded the url allowing for fetching of the data in the residents details page.


## Project Set Up Guideline

To set up the project locall follow the folloing steps:
1. Clone the project using `git clone git@github.com:kelvinbe/rick-morty.git`
2. Cd into project using `cd rick-morty`
3. Install requires dependencies by running `npm install`
4. Start the project by running `npm run dev`

## Deployed Version Link

## Here is a link to the deployed version of the web application 

[rick-morty-peeps](https://rick-morty-seven-pi.vercel.app/)
