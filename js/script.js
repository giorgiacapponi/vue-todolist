const { createApp } = Vue;
createApp({
    data() {
        return {
            toDoObject: [
                {
                    text: "prendi l acqua",
                    done: false
                },
                {
                    text: "prendi il latte",
                    done: false
                },
                {
                    text: "lava i piatti",
                    done: false
                }

            ],



        }
    },
    methods: {
        addToDo(item) {
            if (item.done !== true) {
                item.done = true;

            } else {
                item.done = false;
            }

        },

        addObject(newTodo){
            let newObject={
                text:newTodo,
                done:false
            }
            this.toDoObject.push(newObject)
            this.newTodo="";
        }
    }

}).mount('#app')