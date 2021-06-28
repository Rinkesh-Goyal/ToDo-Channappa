export default class Task{
    constructor(title,dueDate,priority,desc){
        this.title=title;
        this.desc=desc;
        this.priority=priority;
        this.dueDate=dueDate;
    }

    getData(){
        return{
            title,
            desc,
            dueDate,
            priority
        }
    }
}