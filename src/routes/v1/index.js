const user = require("./users.route");
const cases = require("./cases.route");
const casetype = require("./caseType.route");
const court = require("./court.route");
const policeStation = require("./policeStation.route")
const todoNote = require("./note.route");


const routes = [
    {
        path: "user",
        router: user,
    },
    {
        path: "cases",
        router: cases,
    },
    {
        path: "casetype",
        router: casetype,
    },
    {
        path: "court",
        router: court,
    },
    {
        path: "police-station",
        router: policeStation,
    },
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