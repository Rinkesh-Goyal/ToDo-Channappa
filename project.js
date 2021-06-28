export default class Project{
    constructor(projectTitle){
        this.projectTitle=projectTitle;
        this.projectList=[];
    }

    // getData(){
    //     return {projectTitle,projectList};
    // }

    getProject(){
        return this.projectTitle;
    }

    // setTitle(projectName){
    //     this.projectTitle=projectName;
    // }

    addProject(projectName){
        this.projectList.push(projectName);
    }

    getProjectList(){
        return this.projectList;
    }   

}