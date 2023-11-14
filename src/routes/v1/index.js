const user = require("./users.route");
const cases = require("./cases.route");
const casetype = require("./caseType.route");
const court = require("./court.route");
const policeStation = require("./policeStation.route")
const todoNote = require("./note.route");


const routes = [
    // create and get
    {
        path: "user",
        router: user,
    },
    {
        path: "cases",
        router: cases,
    },
    // create and get
    {
        path: "casetype",
        router: casetype,
    },
    // create and get
    {
        path: "court",
        router: court,
    },
    // create and get
    {
        path: "police-station",
        router: policeStation,
    },
    // create and get
    {
        path: "todo-note",
        router: todoNote,
    },
];

module.exports = (app) => {
    routes.forEach((route) => {
        const prefixedPath = `/api/v1/${route.path}`;
        app.use(prefixedPath, route.router);
        // without "/api/v1/"
        // app.use(route.path, route.router);
    });
};