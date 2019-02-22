var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var day = today.getDay();
month += 1;

// 스케줄 갯수
var _eventLength = 5;
var color = ['#fbb1b1', '#b1d3fb', '#d0b1fb', '#fbe0b1', '#fbb1b1'];
function dayy(year, month) { //월의 일수를 구함
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;

        case 4: case 6: case 9: case 11:
            return 30;

        case 2:
            if (((year % 400) == 0 || (year % 4) == 0 && (year % 100) != 0)) {
                return 29;
            }
            else {
                return 28;
            }
    }
}
// 임시 스케줄 관리
var event = ['5', '9', '13', '22', '25'];

// 스케줄 설정 & 현재 날짜 표시
function schedule(){
    var today = new Date();
    var _day = today.getDate();
    var _today = document.getElementById("day_" + _day);
    
    _today.style.color = "#07cea3c5";
    _today.style.borderRadius = "100%";
}

function setting(){
    for(var i=0; i<_eventLength; i++){
        var e = document.getElementById("day_" + event[i]);
        e.style.backgroundColor = color[i];
        e.style.color = "#f7f7f7";
        e.style.borderRadius = "100%";
    }
}

// 스케줄 제목과 내용 설정
var title = [];
for (var i = 0; i < _eventLength; i++){
    title[i] = 'JANUARY ' + event[i] + ", 2019";
}

var content = ['Computer conference', 'Design Competition Submission', '일정 테스트', 'test 123', 'Scroll test', 'TTTEEESSSTTT'];

function setEvent(){
    for (var i = 0; i < _eventLength; i++){
        var schedule = document.getElementById("__schedule");

        var schedule_item = document.createElement("div");
        schedule_item.className = '__schedule_item';
        
        var schedule_circle = document.createElement("div");
        schedule_circle.className = '__schedule_circle';
        schedule_circle.style.backgroundColor = color[i];
        schedule_circle.style.boxShadow = "2px 2px 6px" + color[i]

        var schedule_right = document.createElement("div");
        schedule_right.className = '__schedule_right';
        
        var schedule_title = document.createElement("p");
        schedule_title.className = '__schedule_title';
        schedule_title.innerText = title[i];

        var schedule_content = document.createElement("p");
        schedule_content.className = '__schedule_content';
        schedule_content.innerText = content[i];

        schedule.appendChild(schedule_item);
        schedule_item.appendChild(schedule_circle);
        schedule_item.appendChild(schedule_right);
        schedule_right.appendChild(schedule_title);
        schedule_right.appendChild(schedule_content);
    }
}

window.onload = function present() {
    var start = new Date(year, month - 1, 1);
    var ymda = document.getElementById("ymd");
    var Tab = document.getElementById("tab");
    var row = null;
    var cnt = 0;
    var ym = year + ". " + (month);

    ymda.innerHTML = 'JANUARY';

    while (tab.rows.length > 2) {     //테이블의 행의 길이가 2보다 크면 테이블의 행 제거함.
        tab.deleteRow(tab.rows.length - 1);
    }

    row = Tab.insertRow();
    for (var j = 0; j < start.getDay(); j++) { //달력의 시작 일 구함
        cell = row.insertCell();
        cnt += 1;
    }
    for (var i = 0; i < dayy(year, month); i++) { //달력 일수만큼 찍어줌
        cell = row.insertCell();
        cell.innerHTML = i + 1;
        cnt += 1;
        if (cnt % 7 == 0) { //cnt가 7이면 행을 늘려줌
            row = tab.insertRow();
        }
        cell.id = "day_" + (i + 1);
    }

    schedule();
    setting();
    setEvent();
}