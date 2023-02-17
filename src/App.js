import "./App.css";
// component 기능의 Box.js를 import 사용 = <Box/>
import Box from "./component/Box";
import { useState } from "react";

/*
박스 2개 - 타이틀, 사진, 결과
가위, 바위, 보 버튼
버튼 클릭하면 클릭한 값 박스에 출력
컴퓨터는 랜덤하게 아이템 선택
위의 결과를 가지고 누가 이겼는지 승패 출력
승패결과에 따라 테두리 색깔 변경 - 이기면 초록, 지면 빨강, 비기면 검정
*/

/* 하나의 덩어리를 리턴해야 함 = <div></div>로 묶어줌 */

const choice = {
  rock: {
    name: "Rock",
    img: "./images/rock.jpg",
  },
  paper: {
    name: "Paper",
    img: "./images/paper.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "./images/scissors.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]); // 유저가 선택한 값 - 컴퓨터가 선택한 값과 비교하여 승패 가릴 것
    let computerChoice = randomChoice(); // randomChoice 함수를 실행한 결과값을 computerChoice 변수에 대입
    setComputerSelect(computerChoice); // 컴퓨터가 선택한 값 - 유저가 선택한 값과 비교하여 승패 가릴 것
    setResult(judgement(choice[userChoice], computerChoice)); // judgement(유저 선택값, 컴퓨터 선택값)
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // Object.keys() = 객체의 키값(choice = rock, paper, scissors)만 뽑아 어레이로 만들어 주는 함수
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length); // Math.random() = 0~1 사이의 랜덤값 반환 / Math.floor() = 소수점 아래 버리고 반환
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
    console.log("user??", user, "computer??", computer);

    // user == computer / tie
    // user == rock, computer == scissors / user win
    // user == rock, computer == paper / user lose
    // user == scissors, computer == paper / user win
    // user == scissors, computer == rock / user lose
    // user == paper, computer == rock / user win
    // user == paper, computer == scissors / user lose

    /* if문으로 표현
  if (user.name == computer.name) {
    return "Tie"
  } else if(user.name == "Rock") {
    if(computer.name == "Scissors") {
      return "Win"
    } else {
      return "Lose"
    }
  }
  */

    // 삼항연산식으로 표현 - 수업
    if (user.name == computer.name) {
      return "Tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "Win" : "Lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "Win" : "Lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "Win" : "Lose";

    // 위의 if문을 삼항 연산식으로 표현 - 내가 연습
    // user.name == computer.name ? "Tie" : user.name == "Rock",
    // computer.name == "Scissors" ? "Win" : "Lose";
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;

/*
onClick = 함수를 호출하는 문장을 넣는것이 아니라,
콜백함수 형태로 함수를 전달하는 형식으로 넣어야 실행됨
*/
