# Introducing _Kaizen_: the most mindfull project management app

This project was built by Tania Yeromiyan, Merlin Jones, Umar Begg and Kate Harrison.

Kaizen was presented as the solution to the following problem statement provided by our client Codeweavers:

**_"How can we organise and manage a team of developers who are working remotely on a project?"_**

## The idea behind and motivation for Kaizen

Project management tools are an extremely saturated market, and as a team we did not want to simply build anyother project management clone mimicking the same behaviours seen across websites such as Trello and Github projects.

Based on our user research, it was evident that "productivity" is not much of an issue for those who work remotely. Instead, remote workers experience other problems such as being socially isolated and disconected, anxious, and feeling like their mental health is not really a priority to their employer.

## Kaizen's unique features

Based on our research finidings, we decided to incorporate the following features into our app:

#### **Pomodoro Timer**

This is to help the user stay focused and stick to one specific task on their todos. The pop-up timer modal blocks out other items on the todo list from view, which can help prevent [context switching](https://insights.sei.cmu.edu/blog/addressing-the-detrimental-effects-of-context-switching-with-devops/) and therefore feelings of overwhelm.

#### **Mood Charts**

After each pomodoro session comes to an end, the user is asked to rate their mood. This information is completely anonymous and to be shared with team leads and management within the company utilising this app. The purpose of this is to detect common trend and mood dips based on the day and take the appriopriate neccessary actions to help boost the mental health of everyone in the team. This could be done by organizing virtual **social** team meetups in the coffee room.

#### **Coffee Room**

We were initially very impressed with the idea of having a KumoSpace within our website.
This space would be for employees to drop in and out of during the day, for team socialization and general catchups and get-togethers.

Unfortunately actually building a replica of something like Kumospace is beyond our technical skills right now, so we merely placed a screenshot of us to just convey the idea.

#### **Guided Break Flows**

Another common complaint amongst remote workers was that they felt overworked, did not take regular breaks and did not get enough physical acviticty working from home. The guided flows at the end of each pomodoro work session aim to combat this, providing the user with an active, social and mindful break flow to follow after each finished work session.

## What did we learn?

We decided to write the project with React and Typscript, which was a irst timer experience for all of us on the team. Despite its challenges, we learned a lot about the different React hooks (especially `useContext`!) and how to pass data between React function components.

This was a really rewarding experience for us as we got to experiment and try out many new frameworkes and also put our programming skills to the test.

### Languages, Frameworks and Tools?

<p align="left">

<a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a><a href="https://www.chartjs.org" target="_blank"> <img src="https://www.chartjs.org/media/logo-title.svg" alt="chartjs" width="40" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> 

<a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>

## How to Install Kaizen

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
