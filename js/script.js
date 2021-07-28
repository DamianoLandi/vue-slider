const root = new Vue({
    el: "#root",
    data: {
        imgs:[
            "./images/image1.jpg", 
            "./images/image2.jpg", 
            "./images/image3.jpg", 
            "./images/image4.jpg"
        ],
        counter: 0,
    },
    methods: {
        increaseCounter(){
            if(this.counter === 3){
                this.counter = 0;
            }else{
                this.counter++;
            }
        },
        decreaseCounter(){
            if(this.counter === 0){
                this.counter = 3;
            }else{
                this.counter--;
            }
        },
        sendToIndex(i){
            this.counter = i;
        },
        isSelected(i){
            if(i === this.counter){
                return "selected";
            }else{
                return "";
            };
        }
    },
});