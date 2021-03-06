<h1>Task Manager</h1><br />
</h2>Environment and Dependancy Setup</h2> 

- Use any package manager to download NodeJS and NPM (Node Package Manager)<br />
    Command: pacman -S nodejs npm        OR      choco install nodejs
- Now that Node package manager is installed use it to download yarn <br />
    Command:    npm install --global yarn

    <br />
<h2>Project setup and commands</h2>
The project has two directories - frontend(keyboards-d) and backend(mongo-kbd) - in order to run the project locally both must have an instance
running in order for the two to communicate with each other. Here are the steps to run the project: 
<br /><br />
    <ol>
    <li> Fork or clone the connor-index repository </li>
    <li> Open a new terminal and change the directory to mongo-kbd</li >
    <li> Run the command: yarn<br />
        - simply running yarn will fetch and install the dependencies listed in the package.json file</li >
    <li> Run the command: yarn start<br />
        - If running properly you should see "server connected" and the port number printed in the terminal</li >
    <li> Leave the mongo terminal running in the background and open a new terminal</li >
    <li> Change the directory to keyboards-d<br />
        - Will follow the same steps as the previous setup</li >
    <li> Run the command: yarn</li >
    <li> Run the command: yarn start</li >
    <li> This should automatically open your browser and load the website * If the website does not load you can open up whatever browser and go to the url: http://localhost:3000 </li >
    <li> With both terminals open you should now be able to access the website as well as communicate with the mongoDB backend. No tasks or users are stored locally, they are sent to a hosted mongoDB cluster.</li >
</ol>
<h3>Side notes</h3>
- The dotenv files have been left in the public repo for the assignment turn in. The 'secret' info is to a public trial server with mongoDB so there is no real risk of data loss/corruption
<h4>Troubleshooting?</h4>

- Delete the yarn.lock file in the directory that is causing problems and run the command: yarn
