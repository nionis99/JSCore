export default class Job {
    title: string;
    priority: number;

    constructor(title: string, priority: number) {
        this.title = title;
        this.priority = priority;
    }
}