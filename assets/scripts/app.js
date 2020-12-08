class DOMHelper {
    static clearEventListeners(element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }
    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);
    }
}

class ToolTip {

    constructor(closeNotifierFunction) {
        this.closeNotifier = closeNotifierFunction;
    }

    closeToolTip = () => {
        this.detach();
        this.closeNotifier();
    }
    
    detach() {
        this.element.remove();
    }

    attach() {
        const tooltipDiv = document.createElement('div');
        tooltipDiv.className = 'card';
        tooltipDiv.textContent = 'dummy';
        tooltipDiv.addEventListener('click', this.closeToolTip);
        this.element = tooltipDiv;
        document.body.append(tooltipDiv);
    }
}

class ProjectItem {
    hasActiveToolTip = false;

    constructor(id, updateProjectListsFunction, type) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoBtn();
        this.connectSwitchBtn(type);
    }

    connectMoreInfoBtn() {
        const projectItemLi = document.getElementById(this.id);
        const moreInfoBtn = projectItemLi.querySelector('button:first-of-type');
        moreInfoBtn.addEventListener('click', this.showMoreInfoHandler);
    }

    showMoreInfoHandler() {
        if(!this.hasActiveToolTip) {
            const tooltip = new ToolTip(() => {
                this.hasActiveToolTip = false;
            });
            tooltip.attach();
            this.hasActiveToolTip = true;
        }
    }

    connectSwitchBtn(type) {
        const projectItemLi = document.getElementById(this.id);
        let switchBtn = projectItemLi.querySelector('button:last-of-type');
        switchBtn = DOMHelper.clearEventListeners(switchBtn);
        switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
        switchBtn.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));
    }

    update(updateProjectListsFunction, type) {
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectSwitchBtn(type);
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
            this.projects.push(new ProjectItem(project.id, this.switchProject.bind(this), this.projectType));
        }
    }

    addProject(project) {
        this.projects.push(project);
        DOMHelper.moveElement(project.id, `#${this.projectType}-projects ul`);
        project.update(this.switchProject.bind(this), this.projectType);
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

