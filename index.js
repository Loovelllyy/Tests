// const input = document.getElementById('input')
// TODO make variable of strings;

function readFile(input) {
    let file = input.files[0];
    let inputText = '';

    let reader = new FileReader();
    let objArr = [];
    let answers = [];
    let counterForQues = 1;
    let counterForAnsw = 1
    reader.readAsText(file);

    let newObj = {} // {quest: string, answ: string[], correct: string}
    // let reg = new RegExp('[1-9]');
    let reg = /[1-9]/
    let regAnsw = /correct/

    reader.onload = function () {
        inputText = reader.result;
        let testObj = inputText.split(reg)[1];
        let testAnsw = testObj.split(regAnsw)
        console.log(testAnsw);
    }

    // reader.onload = function() {
    //     inputText = reader.result;
    //     let testArr = inputText.split('\r\n');
    //     for (let i = 0; i < testArr.length; i++) {
    //         // console.log(+testArr[i][0])
    //         if (!(isNaN(+testArr[i][0]))) {
    //             let key = testArr[i][0];
    //             let value = testArr[i].split(' ').slice(1).join(' ');
    //             objArr.push({id: counterForQues, [key]: value})
    //             counterForQues++
    //         }
    //         if (!(testArr[i].indexOf('correct') === -1)) {
    //             let value = testArr[i].split('correct: ').join('');
    //             answers.push({id: counterForAnsw, answer: value});
    //             counterForAnsw++
    //         }
    //         if (isNaN(+testArr[i][0])){
    //
    //         }
    //     }
    //     console.log(objArr);
    //     console.log(answers);
    //     // }
    //
    // };

}


let obj = {one: 'hello', two: 'world'};

console.log(obj.one, obj.two);