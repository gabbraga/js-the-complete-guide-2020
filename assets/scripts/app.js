class ToolTip {}

class ProjectItem {
    constructor(id) {
        this.id = id;
        this.connectMoreInfoBtn();
        this.connectSwitchBtn();
    }

    connectMoreInfoBtn() {

    }

    connectSwitchBtn() {
        const projectItemLi = document.getElementById(this.id);
        const switchBtn = projectItemLi.querySelector('button:last-of-type');
        switchBtn.addEventListener('click', )
    }
}

class ProjectList {
    projects = [];
    constructor(projectType) {
        const projectItems = document.querySelectorAll(`#${projectType}-projects li`);
        for (const project of projectItems) {
            this.projects.push(new ProjectItem(project.id));
        }
    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
    }
}

App.init();

