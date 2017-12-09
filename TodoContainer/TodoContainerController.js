({
	handleDeleteTask : function(component, event, helper) {
		// Get List of Tasks
		let tasks = component.get("v.tasks");
        // Get Array Index
        const arrayIndex = event.getParam('arrayIndex');
		// Remove the proper one
		tasks.splice(arrayIndex,1);
		// Set the List of tasks
		component.set('v.tasks',tasks);
	},
    handleCreateTask: function(component,event,helper){
        // Get List of Tasks
        let tasks = component.get('v.tasks');
        // Get new task
        const newTask = event.getParam('taskName');
        // Add the new task
        tasks.push(newTask);
        // Set the tasks
        component.set('v.tasks',tasks);
    }
})