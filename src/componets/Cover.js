import { nanoid } from "nanoid";
import React from "react";

export default function Cover(props){
    return (
        <div className="cover-background">
            <h1 className="quiz-title">Quizzical</h1>
            <p className="quiz-description">Test your politics knowledge here</p>
            <button 
                className="start-button"
                onClick={props.startQuiz}
            >
                Start quiz
            </button>
        </div>
    );
}