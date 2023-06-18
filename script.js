let [computer_score, user_score] = [0, 0];
let result_ref = document.getElementById("result");
let choices_object = {
  pedra: {
    pedra: "empate",
    tesoura: "vitória",
    papel: "derrota",
  },
  tesoura: {
    pedra: "derrota",
    tesoura: "empate",
    papel: "vitória",
  },
  papel: {
    pedra: "vitória",
    tesoura: "derrota",
    papel: "empate",
  },
};

function checker(input) {
  var choices = ["pedra", "papel", "tesoura"];
  var num = Math.floor(Math.random() * 3);

  document.getElementById(
    "comp_choice"
  ).innerHTML = ` Computador escolheu <span> ${choices[
    num
  ].toUpperCase()} </span>`;

  document.getElementById(
    "user_choice"
  ).innerHTML = ` Você escoheu <span> ${input.toUpperCase()} </span>`;

  let computer_choice = choices[num];

  switch (choices_object[input][computer_choice]) {
    case "vitória":
      result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
      result_ref.innerHTML = "VOCÊ GANHOU";
      user_score++;
      break;
    case "derrota":
      result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
      result_ref.innerHTML = "VOCÊ PERDEU";
      computer_score++;
      break;
    default:
      result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
      result_ref.innerHTML = "EMPATE";
      break;
  }

  document.getElementById("computer_score").innerHTML = computer_score;
  document.getElementById("user_score").innerHTML = user_score;
  document.getElementById("instruction").innerHTML =
    "clique em outro elemento para continuar jogando";
}

function resetGame() {
  return window.location.reload();
}
