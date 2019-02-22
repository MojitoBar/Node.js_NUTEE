var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')
var app = express();
// 정적인 파일을 불러오는 코드 (public 폴더를 기준으로 함)
app.use(express.static('public'));

// post 방식으로 들어오는 값을 처리하는 녀석
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/index', function(req, res){
    var context = '메인페이지';
    var color = ['filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)']
    var list = ['최근 게시물', '최근 공지사항', '오늘의 메뉴', '학사일정'];
    res.render('index', { context: context, color: color, list: list });
})

app.get('/index/0/:id', function(req, res){
    var number = 0;
    var id = req.params.id;
    var context = '공지사항'
    var color = ['filter: grayscale(0) brightness(1)', 'filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)']

    var list =  ['누티 공지사항', '총학 공지사항', '동연 공지사항']

    res.render('notice', {number: number, id: id, context: context, color: color, list: list});
})

app.get('/index/1/:id', function(req, res){
    var number = 1;
    var id = req.params.id;
    var context = '커뮤니티'
    var color =  ['filter: grayscale(1) brightness(0.7)', 'filter: grayscale(0) brightness(1)', 'filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)']

    var list = ['자유게시판', '고백게시판', '홍보게시판', '건의게시판', '벼룩시장', '분실물센터', 'HOT게시판']

    res.render('notice', {number: number, id: id, context: context, color: color, list: list});
})

app.get('/index/2/:id', function(req, res){
    var number = 2;
    var id = req.params.id;
    var context = '누티 TV, 게임'
    var color =  ['filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)', 'filter: grayscale(0) brightness(1)', 'filter: grayscale(1) brightness(0.7)']

    var list = ['누티 TV보기', '누티 NEON', '살아남아라, 대학생!', '누티 키우기', '누티를 잡아라']

    res.render('notice', {number: number, id: id, context: context, color: color, list: list});
})

app.get('/index/3/:id', function(req, res){
    var number = 3;
    var id = req.params.id;
    var context = '바로가기'
    var color =  ['filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)', 'filter: grayscale(0) brightness(1)']

    var list = ['성공회대학교', '종합정보시스템', '과제제출시스템', '중앙도서관', 'e커리어센터', '총학생회', '동아리연합회']

    res.render('notice', {number: number, id: id, context: context, color: color, list: list});
})

app.get('/index/write_page', function(req, res){
    var context = '자유게시판 글쓰기'
    var color = ['filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)']
    var list = ['최근 게시물', '최근 공지사항', '오늘의 메뉴', '학사일정'];
    res.render('write_page', {color: color, list: list, context: context });
})

app.get('/login', function(req, res){
    var context = '로그인'
    var color = ['filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)']
    var list = [];
    res.render('login', {color: color, list: list, context: context});
})

app.get('/signin', function(req, res){
    var context = '회원가입'
    var color = ['filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)']
    var list = [];
    res.render('signin', {color: color, list: list, context: context});
})

app.get('/notice_view/:id', function(req, res){
    var id = req.params.id;
    var context = '커뮤니티'
    var color = ['filter: grayscale(1) brightness(0.7)', 'filter: grayscale(0) brightness(1)', 'filter: grayscale(1) brightness(0.7)', 'filter: grayscale(1) brightness(0.7)']
    var list = ['자유게시판', '고백게시판', '홍보게시판', '건의게시판', '벼룩시장', '분실물센터', 'HOT게시판']
    res.render('notice_view', {id: id, color: color, list: list, context: context});
})

app.listen(3000, function (req, res) {
    console.log('Connected, 3000 port!');
})
