window.addEventListener('load', () => {
	const form = document.querySelector("#task-form");
	const input = document.querySelector("#task-input");
	const list_item = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_item = document.createElement('div');
		task_item.classList.add('task');

		const task_content = document.createElement('div');
		task_content.classList.add('content');

		task_item.appendChild(task_content);

		const task_input = document.createElement('input');
		task_input.classList.add('text');
		task_input.type = 'text';
		task_input.value = task;
		task_input.setAttribute('readonly', 'readonly');

		task_content.appendChild(task_input);

		const task_action = document.createElement('div');
		task_action.classList.add('actions');
		
		const edit_task = document.createElement('button');
		edit_task.classList.add('edit');
		edit_task.innerText = 'Edit';

		const delete_task = document.createElement('button');
		delete_task.classList.add('delete');
		delete_task.innerText = 'Delete';

		task_action.appendChild(edit_task);
		task_action.appendChild(delete_task);

		task_item.appendChild(task_action);

		list_item.appendChild(task_item);

		input.value = '';

		edit_task.addEventListener('click', (e) => {
			if (edit_task.innerText.toLowerCase() == "edit") {
				edit_task.innerText = "Save";
				task_input.removeAttribute("readonly");
				task_input.focus();
			} else {
				edit_task.innerText = "Edit";
				task_input.setAttribute("readonly", "readonly");
			}
		});

		delete_task.addEventListener('click', (e) => {
			list_item.removeChild(task_item);
		});
	});
});
