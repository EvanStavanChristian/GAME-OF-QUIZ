class Question{
    constructor(){
        this.button=createButton("Submit")
        this.input2=createInput("Enter Your Name Here...");
        this.input1=createInput("Enter Correct Option No...");
        this.title;
        this.question;
        this.option1;
        this.option2;
    }

    display(){
        this.title.html("My Quiz Game")
        this.title.position(350,0);

        this.question.html("Question:- What starts and ends with the latter 'E', but has only one latter? ");
        this.question.position(150,80);
        this.option1.html("1: Everyone");
        this.option1.position(150,100);
        this.option2.html("2: Envelope");
        this.option2.position(150,120);

        this.input1.position(400,30);
        this.input2.position(150,30);

        this.button.position(300,50)
        
    }
}