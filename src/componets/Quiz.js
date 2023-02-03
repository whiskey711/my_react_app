import { nanoid } from "nanoid";
import React from "react"
import Question from "./Question"

export default function Quizz(){
    const [questions, setQuestions] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [showAnswer, setShowAnswer] = React.useState(false);
    const [score, setScore] = React.useState(0);
    const [userChoice, setUserChoice] = React.useState({
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
    });

    console.log(userChoice);
    
    function selectAnswer(event){
        const {name, value} = event.target;
        setUserChoice((prevChoice) => {
            return {
                ...prevChoice,
                [name]: value
            }
        });
        if (value == questions[name-1].correctAnswer){
            setScore((prevScore) => prevScore+1);
        }
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

            // swap elements array[i] and array[j]
            // we use "destructuring assignment" syntax to achieve that
            // you'll find more details about that syntax in later chapters
            // same can be written as:
            // let t = array[i]; array[i] = array[j]; array[j] = t
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function toggleAnswer(){
        if (showAnswer){
            setQuestions([]);
            setLoading(true);
            setScore(0);
            setShowAnswer(false);
            setUserChoice({
                1: "",
                2: "",
                3: "",
                4: "",
                5: "",
            });
        }else{
            setShowAnswer(true);
        }
    }

    React.useEffect(() => {
        if (showAnswer) return;
        async function getQuiz(){
            const res = await fetch("https://opentdb.com/api.php?amount=5&category=24");
            const data = await res.json();
            const allQuestions = data.results.map((result) => {
                let allAns = result.incorrect_answers.concat(result.correct_answer);
                shuffle(allAns);
                return {
                    problem: result.question,
                    correctAnswer: result.correct_answer,
                    allAnswer: allAns
                }
            })
            setQuestions(allQuestions);
            setLoading(false);
        }
        getQuiz();
    }, [showAnswer]);

    let questionElements = [];
    for (let i=0; i<questions.length; i++){
        questionElements.push(
            <Question 
                key={i} 
                id={i+1} 
                quiz={questions[i]} 
                select={selectAnswer} 
                showAns={showAnswer}
                choice={userChoice}
            />
        );
    }

    return (
        <div className="quiz-background">
            <div>
                {!loading && questionElements}
            </div>
            {showAnswer && <span>{`You scored ${score}/5 correct answers`}</span>}
            <button className="check-answer" onClick={toggleAnswer}>
                {showAnswer ? "Play again" : "Check Answers"}
            </button>
        </div>
    )
}