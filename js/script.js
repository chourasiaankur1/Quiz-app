const quizData = [
    {
        question:"Smallest prime number is?",
        radio1:'2',
        radio2:'1',
        radio3:'3',
        radio4:'5',
        ans:'2'
    },
    {
        question:"Square root of 100 is?",
        radio1:'20',
        radio2:'15',
        radio3:'10',
        radio4:'8',
        ans:'10'
    },
    {
        question:"Odd numbers between 1 and 20?",
        radio1:'8',
        radio2:'9',
        radio3:'10',
        radio4:'11',
        ans:'10'
    },
    {
        question:"Square of 8 is?",
        radio1:'16',
        radio2:'64',
        radio3:'256',
        radio4:'81',
        ans:'64'
    },
    {
        question:"In 2020 who was the Prime Minister of India?",
        radio1:'Narendra Damodar Das Modi',
        radio2:'Dr. Manmohan Singh',
        radio3:'Amit Shah',
        radio4:'Rahul Gandhi',
        ans:'Narendra Damodar Das Modi'
    }
]

let questionId = 0;


$(document).ready(function(){

    document.getElementById('prev').style.visibility = 'hidden';
    document.getElementById('question').innerHTML = quizData[questionId]['question'];
    document.getElementById('result').style.visibility = 'hidden';
    const opts = document.querySelectorAll('.optRadio');
    
    opts.forEach(opt => {
        $('label[for='+opt.id+']').text(quizData[questionId][opt.id]);
    });

    $('#prev').click(function(){

        if(questionId>0)
        {
            questionId--;
            question = quizData[questionId];
            document.getElementById('question').innerHTML = question['question'];
            opts.forEach(opt => {
                $('label[for='+opt.id+']').text(quizData[questionId][opt.id]);
            })
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
            
            opts.forEach(opt => {
                $('label[for='+opt.id+']').text(quizData[questionId][opt.id]);
            });
        }

        if(questionId == 4)
            document.getElementById('next').style.visibility = 'hidden';
        document.getElementById('prev').style.visibility = 'visible';
        document.getElementById('result').style.visibility = 'hidden';
    });

    $('.submit').click(function(){

        let optValue;
        opts.forEach(opt => {
            if(opt.checked)
                optValue = $('label[for='+opt.id+']').text();
        });

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
