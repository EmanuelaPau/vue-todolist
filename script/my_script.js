console.log('hello JS');

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            myToDoArray: [
                {
                    text: 'aggiungi lista',
                    done: false
                },
                {
                    text: 'collega lista',
                    done: true
                },
                {
                    text: 'copia lista',
                    done: false
                }
            ],
            myNewTask: "",
        }
    },
    methods: {
        addNewTaskToArray(taskToAdd, myArray) {
            myTaskObject = {
                text: taskToAdd,
                done: false
            };
            myArray.push(myTaskObject);
            this.myNewTask = '';
        },

        removeTaskToArray(taskIndex, myArray) {
            if (taskIndex >= myArray.lenght || taskIndex < 0) {
                console.warn('there are not tasks to delete in this position')
            } else {
                myArray.splice(taskIndex, 1);
            }
        },

        addBarredText(myArray, myIndex) {
            if (myArray[myIndex].done === true) {
                return 'my_barred-text';
            } else {
                return ''
            }
        },

        changeTaskState(myArray, myIndex) {
            if (myArray[myIndex].done === false) {
                myArray[myIndex].done = true;
            } else {
                myArray[myIndex].done = false;
            }
        }
    }
}).mount('#app') 