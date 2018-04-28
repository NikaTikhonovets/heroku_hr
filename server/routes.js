'use strict';
module.exports = function (server) {
    let vacancy = require('./controllers/vacancyController');
    let candidate = require('./controllers/candidateController');
    let resources = require('./controllers/resourceController');
    let login = require('./controllers/loginController');
    let events = require('./controllers/eventController');
    let users = require('./controllers/userController');
    let password = require('./controllers/passwordController');
    let authorization = require('./filter/authorization');

    server.get("/vacancies", vacancy.getVacancies);
    server.post("/vacancies", vacancy.addVacancies);
    server.post("/login", login.login);
    server.post("/registration", login.registration);

    server.post("/email", password.sendInstruction);
    server.get("/password/:token", password.checkToken);
    server.post("/password", password.setPassword);

    server.get("/events", events.getEvents);
    server.get("/events/:id", events.getEventById);
    server.put("/events/:id", events.updateEventById);
    server.post("/events", events.createEvent);

    server.get("/interviewee", candidate.getCandidatesForInterview);
    server.get("/interviewers", users.getAll);

    server.get("/notification", events.getNotification);

    // server.get(/\/views\/?.*/, resources.loadResource);
   // server.get('/', login.getLoginPage);

    server.get("/candidates/status/:name", candidate.getCandidateByStatus);
    server.get("/candidates", candidate.getCandidates);
    server.get("/candidates/:id", candidate.getCandidateById);
    server.get("/candidates/review/:id", candidate.getReview);
    server.put("/candidates/:id", candidate.updateCandidate);
    server.post("/candidates/skill/:id", candidate.addSkill);
    server.post("/candidates/experience/:id", candidate.addExperience);
    server.post("/candidates/review/:id", candidate.addReview);

    server.get("/user", users.getUser);
    server.put("/user/:id", users.updateUser);

};
