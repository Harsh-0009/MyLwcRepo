import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={} //object which store ans value
    correctAnswer = 0  // to show the correct number of question
    isSubmitted = false // use to show the result
myQuestions = [
    {
        id:"Question1",
        question:"Which one of the following is not a template loop ?",
        answers:{
            a:"for:each",
            b:"iterator",
            c:"map loop"
        },
        correctAnswer:"c"

       },
        {
            id:"Question2",
            question:"Which of the  file is invalid in LWC component folder ?",
            answers:{
                a:"SVG",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"Which of the following is not a valid event name in LWC ?",
            answers:{
                a:"handleClick",
                b:"handleChange",
                c:"handleInput"
            },
            correctAnswer:"a"
        }
]
get allNotSelected(){
    return !(Object.keys(this.selected).length === this.myQuestions.length)
}

 get isScoredFull(){

return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswer?
     'slds-text-color_success':'slds-text-color_error'}`


 }
changeHandler(event){
    //console.log("name", event.target.name);
   // console.log("value", event.target.value);
    const {name, value} =event.target

    this.selected={...this.selected, [name]:value}


}
submitHandler(event){
    event.preventDefault()
    let correct = this.myQuestions.filter(item=>this.selected[item.id]=== item.correctAnswer)
    this.correctAnswer = correct.length
    this.isSubmitted = true
    console.log("correctAnswer",this.correctAnswer);

}
resetHandler(){

    this.selected ={}
    this.correctAnswer =0
    this.isSubmitted = false




}
}