/*
const rbs = document.querySelectorAll('input[name="radio"]');
let selectedValue;
for (const rb of rbs) {
    if (rb.checked) {
        selectedValue = rb.value;
        break;
    }
}
console.log(selectedValue);
*/

const rbs = document.querySelectorAll('input[name="radio"]');

const workCurrent = document.getElementById('work-current');
const workPrevious = document.getElementById('work-previous');

const playCurrent = document.getElementById('play-current');
const playPrevious = document.getElementById('play-previous');

const studyCurrent = document.getElementById('study-current');
const studyPrevious = document.getElementById('study-previous');

const exerciseCurrent = document.getElementById('exercise-current');
const exercisePrevious = document.getElementById('exercise-previous');

const socialCurrent = document.getElementById('social-current');
const socialPrevious = document.getElementById('social-previous');

const selfCurrent = document.getElementById('self-current');
const selfPrevious = document.getElementById('self-previous');

const timePeriodSpans = document.querySelectorAll('.time-period');

rbs.forEach(input => input.addEventListener('click', ()=> {
    //console.log(input.value)
    if(input.value === 'daily'){
        fetch('data.json')
        .then(response => response.json())
        .then(data => {
            //console.log(data)

            timePeriodSpans.forEach(span => span.innerText = 'Previous -')

            workCurrent.innerText = data[0].timeframes.daily.current;
            workPrevious.innerText = data[0].timeframes.daily.previous;
            playCurrent.innerText = data[1].timeframes.daily.current;
            playPrevious.innerText = data[1].timeframes.daily.previous;
            studyCurrent.innerText = data[2].timeframes.daily.current;
            studyPrevious.innerText = data[2].timeframes.daily.previous;
            exerciseCurrent.innerText = data[3].timeframes.daily.current;
            exercisePrevious.innerText = data[3].timeframes.daily.previous;
            socialCurrent.innerText = data[4].timeframes.daily.current;
            socialPrevious.innerText = data[4].timeframes.daily.previous;
            selfCurrent.innerText = data[5].timeframes.daily.current;
            selfPrevious.innerText = data[5].timeframes.daily.previous;
        })
    } else if(input.value === 'weekly'){
        fetch('data.json')
        .then(response => response.json())
        .then(data => {
            //console.log(data)

            timePeriodSpans.forEach(span => span.innerText = 'Last Week -')

            workCurrent.innerText = data[0].timeframes.weekly.current;
            workPrevious.innerText = data[0].timeframes.weekly.previous;
            playCurrent.innerText = data[1].timeframes.weekly.current;
            playPrevious.innerText = data[1].timeframes.weekly.previous;
            studyCurrent.innerText = data[2].timeframes.weekly.current;
            studyPrevious.innerText = data[2].timeframes.weekly.previous;
            exerciseCurrent.innerText = data[3].timeframes.weekly.current;
            exercisePrevious.innerText = data[3].timeframes.weekly.previous;
            socialCurrent.innerText = data[4].timeframes.weekly.current;
            socialPrevious.innerText = data[4].timeframes.weekly.previous;
            selfCurrent.innerText = data[5].timeframes.weekly.current;
            selfPrevious.innerText = data[5].timeframes.weekly.previous;
        })
    } else if(input.value === 'monthly'){
        fetch('data.json')
        .then(response => response.json())
        .then(data => {
            //console.log(data)

            timePeriodSpans.forEach(span => span.innerText = 'Last Month -')

            workCurrent.innerText = data[0].timeframes.monthly.current;
            workPrevious.innerText = data[0].timeframes.monthly.previous;
            playCurrent.innerText = data[1].timeframes.monthly.current;
            playPrevious.innerText = data[1].timeframes.monthly.previous;
            studyCurrent.innerText = data[2].timeframes.monthly.current;
            studyPrevious.innerText = data[2].timeframes.monthly.previous;
            exerciseCurrent.innerText = data[3].timeframes.monthly.current;
            exercisePrevious.innerText = data[3].timeframes.monthly.previous;
            socialCurrent.innerText = data[4].timeframes.monthly.current;
            socialPrevious.innerText = data[4].timeframes.monthly.previous;
            selfCurrent.innerText = data[5].timeframes.monthly.current;
            selfPrevious.innerText = data[5].timeframes.monthly.previous;
        })
    }



}))
