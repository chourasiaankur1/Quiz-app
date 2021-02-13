const quizData = [
    {
        question:"Smallest prime number is?",
        opt1:'2',
        opt2:'1',
        opt3:'3',
        opt4:'5',
        ans:'2'
    },
    {
        question:"Square root of 100 is?",
        'opt1':'20',
        'opt2':'15',
        'opt3':'10',
        'opt4':'8',
        ans:'10'
    },
    {
        question:"Odd numbers between 1 and 20?",
        'opt1':'8',
        'opt2':'9',
        'opt3':'10',
        'opt4':'11',
        ans:'10'
    },
    {
        question:"Square of 8 is?",
        'opt1':'16',
        'opt2':'64',
        'opt3':'256',
        'opt4':'81',
        ans:'64'
    },
    {
        question:"In 2020 who was the Prime Minister of India?",
        'opt1':'Narendra Damodar Das Modi',
        'opt2':'Dr. Manmohan Singh',
        'opt3':'Amit Shah',
        'opt4':'Rahul Gandhi',
        ans:'Narendra Damodar Das Modi'
    }
]

let questionId = 0;

$(document).ready(function(){

    document.getElementById('prev').style.visibility = 'hidden';
    document.getElementById('question').innerHTML = quizData[questionId]['question'];
    document.getElementById('result').style.visibility = 'hidden';
    
    for(let i=0;i<4;i++)
        document.getElementById('opt'+String(i+1)).innerHTML = '<input type="radio" name="opt">'+String(quizData[questionId]['opt'+String(i+1)]);

    $('#prev').click(function(){

        if(questionId>0)
        {
            questionId--;
            question = quizData[questionId];
            document.getElementById('question').innerHTML = question['question'];
            for(let i=0;i<4;i++)
                document.getElementById('opt'+String(i+1)).innerHTML = '<input type="radio" name="opt">'+String(quizData[questionId]['opt'+String(i+1)]);
        }

        if(questionId == 0)
            document.getElementById('prev').style.visibility = 'hidden';
        document.getElementById('next').style.visibility = 'visible';
        document.getElementById('result').style.visibility = 'hidden';
    });

    $('#next').click(function(){
    
        if(questionId<4)
        {
            questionId++;
            question = quizData[questionId];
            document.getElementById('question').innerHTML = question['question'];
            for(let i=0;i<4;i++)
                document.getElementById('opt'+String(i+1)).innerHTML = '<input type="radio" name="opt">'+String(quizData[questionId]['opt'+String(i+1)]);
        }

        if(questionId == 4)
            document.getElementById('next').style.visibility = 'hidden';
        document.getElementById('prev').style.visibility = 'visible';
        document.getElementById('result').style.visibility = 'hidden';
    });

    $('.submit').click(function(){

        let optValue = $('input[name="opt"]:checked').parent().text();

        if(optValue == quizData[questionId]['ans'])
        {
            document.getElementById('result').style.visibility = "visible";
            document.getElementById('result').innerText = "Correct Answer";
            document.getElementById('result').style.color = "green";
        }
        else
        {
            document.getElementById('result').style.visibility = "visible";
            document.getElementById('result').innerText = "Inorrect Answer";
            document.getElementById('result').style.color = "red";
        }
    })

});
