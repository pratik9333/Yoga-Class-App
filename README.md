# Yoga Class App

## About
This App designed to better manage the users admission for the yoga classes which happen every month. 

App is desiged based on the following requirements. 

- People within the age limit of 18-65 can enroll for the monthly classes and they will
be paying the fees on a month on month basis. I.e. an individual will have to pay the fees
every month and he can pay it any time of the month.

- They can enroll any day but they will have to pay for the entire month. The monthly fee is
500/- Rs INR.

- There are a total of 4 batches a day namely 6-7AM, 7-8AM, 8-9AM and 5-6PM. The
participants can choose any batch in a month and can move to any other batch next
month. I.e. participants can shift from one batch to another in different months but in
same month they need to be in same batch. 

## Implementation Details

- Tech Stack Used

![image](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200402205611/What-is-PERN-Stack.png)

- To get the user details, a simple form is created using react.js. It takes required information and call a post request to the server. 

- In server, a simple middleware has been created to check the validation of data sent by user and then passing it to next controller to store data in database if validation passed or will sent a failed response to frontend included reasons.

- A mock function named handlePayment() is been called that does payment for user, store the payment details in the database and sents the response according to that in frontend. 

- Batches has been added already according to requirements, but it also had feature to add more batches according to the requirements. 

- User authentication is not done yet, will be adding soon in future updates. 

- ER Diagram Of App

![image](https://res.cloudinary.com/dqdnwfv3r/image/upload/v1670975705/Images/WhatsApp_Image_2022-12-14_at_4.58.44_AM_bdtqsp.jpg)

## User Interface Details

   - Just contain a registration form where users need to fill in the required details. Based on request to backend, it will respond to frontend. 
   
   ![image](https://res.cloudinary.com/dqdnwfv3r/image/upload/v1670973349/Images/Screenshot_2022-12-14_at_4.15.41_AM_c61tb1.png)


## Backend Demo Development

Clone and install.

```bash
git clone https://github.com/pratik9333/Yoga-Class-App.git
cd Yoga-Class-App/server
npm i
```

App is containerized, in order to run node app server and postgres database please install docker and docker compose and run the below commands. 

```bash
cd infrastructure
docker-compose up -d --build
```

- The app is now running at http://localhost:80
- To see the database entries, open your web browser and navigate to http://localhost:8080

- Fill the below as same entries, and lastly password can be accessed from .env file in your local system. 

![image](https://res.cloudinary.com/dqdnwfv3r/image/upload/v1670977181/Screenshot_2022-12-14_at_5.48.41_AM_cyyt5n.png)


## Frontend Demo Development

```bash
cd Yoga-Class-App/client
npm i
npm start
```

## Useful Links

- [Deployed Website](http://yoga-frontend-lb-c4e1c0060ba65b11.elb.us-east-1.amazonaws.com)
- [Backend api link](http://node-server-lb-1092089902.us-east-1.elb.amazonaws.com/)

## Future updates

- User Authentication. 
- Seperate admin dashboard to add class batches with more information, adding more instructors, payment informations, user informations, etc. 
- Seperate user section to edit/view his profile, view payment informations, view batch members, etc. 


---------

```javascript

if (youEnjoyed) {
    starThisRepository();
}

```

-----------
