const questions = [
    {
        "que" : "whicho of the following of the Markup Language?",
        "a" : "HTML",
        "b" : "CSS",
        "c" : "JAVA",
        "d" : "jAVASCRIPT",
        "correct": "a"
    },
    {
        "que" : "Whats if CSS Full Form?",
        "a" : "hyper text language",
        "b" : "cascading style sheet",
        "c" : "casting studio sheet",
        "d" : "no any",
        "correct": "b"
    },
    {
        "que" : "by defualt input value is?",
        "a" : "string",
        "b" : "Number",
        "c" : "Null",
        "d" : "Boolien",
        "correct": "a"
    },
    {
        "que" : "which of the folowing of the disylay property?",
        "a" : "flex",
        "b" : "relative",
        "c" : "src",
        "d" : "inline",
        "correct": "d"
    }
]
let index = 0;
let total = questions.length
let right = 0,
    wrong = 0;
// console.log(right)
let quebox = document.getElementById("quebox")
let optionInputs = document.querySelectorAll(".option")
const loadQuestion = () =>{
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index]
    // console.log(data)
    quebox.innerText = index+1+ "). " + data.que;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}

const submit = document.getElementById("submit");
submit.addEventListener("click", function sumbitQuiz(){
    const data = questions[index];
    const ans = getAns();
    if(ans === data.correct){
        right++
    }else{
        wrong++
    }
    index++;
    loadQuestion();
    return;
})
const getAns = () =>{
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer =  input.value;
            }
        }
    )
    return answer;
}
const reset = ()=>{
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3>Thank You For Playing The Quiz. </h3>
    <h2> ${right} / ${total} are correct </h2>`
}

loadQuestion();



// console.log(questions[1])

//video pause on 21:10 min.
// https://www.youtube.com/watch?v=u9NFuoITzrs&list=LL&index=1