import Task from "../components/Task.js";
import delay from "../components/delay.js";
import { MICRO_TASK, MACRO_TASK, TASK_DELAY } from "../utils/constans.js";

function createTasks() {
	const keys = ["callStack", "webAPIs", "microQueue", "macroQueue"];
	const classNames = ["call-stack-area", "web-apis-area", "micro-queue", "macro-queue"];

	return keys.reduce((prev, curr, i) => {
		prev[curr] = new Task(classNames[i]);
		return prev;
	}, {});
}

async function runAnimation(taskMap, task) {
	await delay(TASK_DELAY);
	taskMap.callStack.appendTask(task);
	if (task === "fetch") return;

	await delay(TASK_DELAY);
	taskMap.webAPIs.appendTask(`${task} cb`);
	if (task === "catch") return;

	await delay(TASK_DELAY);
	if (MICRO_TASK.includes(task)) taskMap.microQueue.appendTask(`${task} cb`);
	if (MACRO_TASK.includes(task)) taskMap.macroQueue.appendTask(`${task} cb`);

	await delay(TASK_DELAY);
	taskMap.callStack.appendTask(`${task} cb`);
}

async function moveTasks(tasks) {
	const taskMap = createTasks();
	for (const task of tasks) {
		await runAnimation(taskMap, task);
	}
}

export default moveTasks;
