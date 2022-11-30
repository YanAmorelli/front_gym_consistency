# front_gym_consistency

WIP!

## To-do
* Improve stats page
* Improve some logical ideas
* Improve code quality

## Stack 
* ReactJS
* Docker

## How to execute
It's really simple

1. Install node_modules (For the first time)
> npm i

2. Start application
> npm start 

## Execute using docker

1. Build image of ReactJS application
> docker build . -t docker_front_gym_consistency

2. Run container
> docker run -p 3000:3000 -d docker_front_gym_consistency

You can acess the application at:
http://localhost:3000


### Articles that can be important
* https://jsramblings.com/dockerizing-a-react-app/
