<h1>Task Manager</h1><br />
</h2>Environment and Dependancy Setup</h2> 
    1:  Use any package manager to download NodeJS and NPM (Node Package Manager)
    Command: pacman -S nodejs npm        OR      choco install nodejs
    2:  Now that Node package manager is installed use it to download yarn 
    Command:    npm install --global yarn
    <br />
<h2>Project setup and commands</h2>
The project has two directories - frontend(keyboards-d) and backend(mongo-kbd) - in order to run the project locally both must have an instance running in order for the two to communicate with each other.
here are the steps to run the project: 
    1: Open a new terminal and change the directory to mongo-kbd
    2: Run the command: yarn
        - simply running yarn will fetch and install the dependencies listed in the package.json file
    3: Run the command: yarn start
        - If running properly you should see "server connected" and the port number printed in the terminal
    4: Leave the mongo terminal running in the background and open a new terminal
    5: Change the directory to keyboards-d
        - Will follow the same steps as the previous setup
    6: Run the command: yarn
    7: Run the command: yarn start
    8: This should automatically open your browser and load the website * If the website does not load you can open up whatever browser and go to the url: http://localhost:3000
    
    With both terminals open you should now be able to access the website as well as communicate with the mongoDB backend. No tasks or users are stored locally, they are sent to a hosted mongoDB cluster.

<h3>Side notes</h3>

<h4>Troubleshooting?</h4>
Hopefully it won't be needed, but if there are any dependancy issues here are some fixes that helped me in the past:

- Delete the yarn.lock file in the directory that is causing problems and run the command: yarn

Sorry about the download npm to use to download yarn step. Yarn is essentially the same as npm, but I used yarn on my end and wanted to give directions to recreate the environment as closely as possible.