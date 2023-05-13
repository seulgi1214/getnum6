/* JavaScript 파일: script.js */

// 버튼을 선택합니다.
var button = document.getElementById('generate');

// 결과를 표시할 공간을 선택합니다.
var resultDiv = document.getElementById('result');

// 버튼이 클릭되면 실행할 함수를 정의합니다.
button.onclick = function() {
    // 결과를 저장할 빈 배열을 만듭니다.
    var result = [];
  
    // 6개의 숫자를 생성합니다.
    while(result.length < 6){
        var num = Math.floor(Math.random() * 45) + 1;
        if(result.indexOf(num) === -1) {
            result.push(num);
        }
    }

    // 결과를 정렬합니다.
    result.sort(function(a, b) {
        return a - b;
    });
  
    // 결과를 화면에 표시하고 결과 창을 보이게 합니다.
    resultDiv.innerHTML = '생성된 숫자: ' + result.join(', ');
    resultDiv.classList.remove('d-none');
};
