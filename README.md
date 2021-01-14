# Ecoyou
This project is a fork of our entry for Hackacomm 2021. This cantankerous kid needs to play more with the Django and React without wrecking our original model apart. If things go well, the following may happen:
- UI revamp ensues
- A Redeem page appears
- Backend data gets integrated for displaying information in User profile, Challenges, etc.


# Setting it up

To begin, clone the repository (to whatever folder you prefer, I usually put them into the documents folder), and enter the cloned folder.
```bash
git clone https://github.com/Marshmallows7920/environment-webapp/
cd environment-webapp
```

## Configure and run the backend - Python/Django
Make sure you have python installed from [https://www.python.org/downloads/](https://www.python.org/downloads/).  
I used python 3.8.4 but newers versions should probably be fine too.

First navigate to the backend folder (assuming you are inside the environment-webapp repo's directory).
```bash
cd backend
```

Then install django and a cors dependency
```bash
python -m pip install Django
python -m pip install django-cors-headers 
```

Now verify that you have django installed. The following command should show you the version of django installed.
```bash
python -m django --version
```

Now you should be able to launch the backend using the following command. And then keep the window running the backend open as long as you are working on the app.
```bash
python manage.py runserver
```

If everything is working correctly, once you navigate to [http://127.0.0.1:8000/](http://127.0.0.1:8000/) you should see a text in your browser literally saying "Yup! Working!".

## Configre and run the frontend - Javascript/React
Make sure you have nodejs and npm installed from [https://nodejs.org/en/download/](https://nodejs.org/en/download/).

Now navigate to the frontend folder (assuming you are inside the environment-webapp repo's directory).
```bash
cd frontend
```

Now install all the npm dependencies for the react project by running the following command:
```bash
npm install
```

Then start the dev server for the react project
```bash
npm run start
```

And if you have the backend running at the same time, the react app.
