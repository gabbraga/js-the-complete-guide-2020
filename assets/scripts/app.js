class DOMHelper {
    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);
    }
}

class ToolTip {}

class ProjectItem {
    constructor(id, updateProjectListsFunction) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoBtn();
        this.connectSwitchBtn();
    }

    connectMoreInfoBtn() {
        const projectItemLi = document.getElementById(this.id);
        const moreInfoBtn = projectItemLi.querySelector('button:first-of-type');
        //moreInfoBtn.addEventListener('click', )
    }

    connectSwitchBtn() {
        const projectItemLi = document.getElementById(this.id);
        const switchBtn = projectItemLi.querySelector('button:last-of-type');
        switchBtn.addEventListener('click', this.updateProjectListsFunction);
    }
}

class ProjectList {
    projects = [];
    projectType;
    switchHandler;

    constructor(projectType) {
        this.projectType = projectType;
        const projectItems = document.querySelectorAll(`#${projectType}-projects li`);
        for (const project of projectItems) {
            this.projects.push(new ProjectItem(project.id, this.switchProject.bind(this)));
        }
    }

    addProject(project) {
        this.projects.push(project);
    }

    switchProject(projectId) {
        // returns an array of all the projects that DON'T have the passed 
        // project id (effectively removing only that 1 project from the array)
        this.switchHandler(this.projects.find(project => project.id === projectId));
        this.projects = this.projects.filter(project => project.id !== projectId);
    }

    setSwitchHandlerFunction(switchHandler) {
        this.switchHandler = switchHandler;
    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
        activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));
        finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));
    }
}

App.init();

