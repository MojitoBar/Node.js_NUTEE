var type = ['중식 A', '중식 B', '석식'];
var id = ['__caffetteria_a', '__caffetteria_b', '__caffetteria_c']
var meal = [
    ['쌀밥', '돈육김치찌개', '생선까스', '망고샐러드', '유채나물무침', '포기김치'],
    ['돈까스', '치즈돈까스', '부대찌개'],
    ['쌀밥', '우거지된장국', '돈육춘장볶음', '오이무침']
];

function setCaffetteria() {
    for(var i = 0; i < 3; i++){
        var parent = document.getElementById(id[i]);

        var c_type = document.createElement("p");
        c_type.innerText = type[i];
        c_type.style.fontSize = "1.5rem";
        c_type.style.marginBottom = "2.5rem";
        parent.appendChild(c_type);
        
        for(var j = 0; j < meal[i].length; j++){
            var item = document.createElement("p");
            item.innerText = meal[i][j];
            item.style.fontWeight = "normal";
            parent.appendChild(item);
        }
    }
}

setCaffetteria();