import React from "react";
import Cover from "./componets/Cover"
import Question from "./componets/Question";
import Quiz from "./componets/Quiz"

export default function App(){
    const [start, setStart] = React.useState(false);
    
    function startQuiz(){
        setStart(true);
    }
    return (
        <main>
            {!start && <Cover startQuiz={startQuiz} />}
            {start && <Quiz />}
        </main>
    );
}