import React from "react"
import {nanoid} from "nanoid"

export default function Question(props){
    
    const problem = props.quiz.problem;
    const answers = props.quiz.allAnswer;
    const thisChoice = props.choice[props.id];
    const purple = "#D6DBF5";
    const green = "#94D7A2";
    const red = "#F8BCBC";

    const answerElements = answers.map((ans) => {
        let bgcolor = "transparent";
        if (props.showAns){
            if (ans == props.quiz.correctAnswer){
                bgcolor = green;
            }else if (ans == thisChoice){
                bgcolor = red;
            }            
        }else if (ans == thisChoice){
            bgcolor = purple;
        }
        const buttonColor = {backgroundColor: bgcolor}
        return <button 
                    key={nanoid()}
                    className="ans-button"
                    onClick={props.select}
                    value={ans}
                    name={props.id}
                    style={buttonColor}
                    disabled={props.showAns}
                >{ans}</button>
    });

    return (
        <div>
            <h3>{problem.replace(/\"/g, "")}</h3>
            {answerElements}
        </div>
    )
}