class ToolTip {}

class ProjectItem {}

class ProjectList {
    constructor(projectType) {
        const projectItems = document.querySelectorAll(`#${projectType}-projects li`);
    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
    }
}

App.init();

