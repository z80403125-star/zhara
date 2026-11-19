"use strict";

const questions = [
  {
    question: "Что обычно называют заработной платой?",
    answers: [
      "Только премию по итогам года",
      "Вознаграждение работнику за выполненную работу",
      "Деньги, которые компания тратит на аренду офиса"
    ],
    correct: 1,
    explanation: "Зарплата — вознаграждение за труд с учётом квалификации, сложности, количества и качества работы."
  },
  {
    question: "Что означает сумма «до вычета налогов» (gross)?",
    answers: [
      "Сумма, которая поступит на банковскую карту",
      "Зарплата вместе с личными накоплениями",
      "Начисленная сумма до удержания налогов"
    ],
    correct: 2,
    explanation: "Gross — начисленная зарплата до удержаний. Сумма к выплате обычно меньше."
  },
  {
    question: "Что такое зарплата «на руки» (net)?",
    answers: [
      "Сумма после предусмотренных удержаний",
      "Сумма до начисления оклада",
      "Стоимость рабочего места сотрудника"
    ],
    correct: 0,
    explanation: "Net — сумма, которую работник получает после удержаний из начисленной зарплаты."
  },
  {
    question: "Что такое оклад?",
    answers: [
      "Доплата исключительно за сверхурочную работу",
      "Общая сумма всех расходов работодателя",
      "Фиксированная часть оплаты за выполнение обязанностей за период"
    ],
    correct: 2,
    explanation: "Оклад — установленная фиксированная часть оплаты труда за месяц или другой период."
  },
  {
    question: "Как обычно рассчитывают оплату при почасовой системе?",
    answers: [
      "Считают только количество рабочих дней в году",
      "Умножают ставку за час на число отработанных часов",
      "Назначают одинаковую сумму всем сотрудникам"
    ],
    correct: 1,
    explanation: "При почасовой оплате заработок зависит от ставки за час и фактически отработанного времени."
  },
  {
    question: "Что характерно для сдельной оплаты труда?",
    answers: [
      "Оплата зависит от количества произведённых единиц или выполненных операций",
      "Оплачивается только время обеденного перерыва",
      "Оплата не меняется в зависимости от выполненного объёма"
    ],
    correct: 0,
    explanation: "При сдельной системе размер оплаты связан с объёмом произведённой продукции или выполненной работы."
  },
  {
    question: "Чем номинальная зарплата отличается от реальной?",
    answers: [
      "Номинальная выплачивается раз в год, а реальная — каждый день",
      "Это два названия одной и той же премии",
      "Номинальная — сумма денег, реальная — количество товаров и услуг, которые на неё можно купить"
    ],
    correct: 2,
    explanation: "Реальная зарплата показывает покупательную способность денег с учётом цен."
  },
  {
    question: "Что такое премия в составе оплаты труда?",
    answers: [
      "Обязательный налог на доход",
      "Дополнительное поощрительное вознаграждение, часто связанное с результатами",
      "Заранее установленная сумма, которую всегда вычитают из оклада"
    ],
    correct: 1,
    explanation: "Премия — стимулирующая выплата; условия её начисления обычно определяются правилами работодателя и договорённостями."
  },
  {
    question: "Что такое компенсационная выплата?",
    answers: [
      "Выплата за особые условия или дополнительные затраты, связанные с работой",
      "Возврат работником всей своей зарплаты",
      "Подарок сотруднику, не связанный с работой"
    ],
    correct: 0,
    explanation: "Компенсационные выплаты связаны, например, с особыми условиями труда или возмещением расходов."
  },
  {
    question: "Что обычно отражает расчётный листок?",
    answers: [
      "Только график отпусков всех сотрудников",
      "Список личных покупок работника",
      "Состав начислений, удержаний и сумму к выплате за период"
    ],
    correct: 2,
    explanation: "Расчётный листок помогает увидеть, из чего сложилась зарплата и какие удержания произведены."
  },
  {
    question: "Что означает прогрессивная шкала налогообложения?",
    answers: [
      "Каждый следующий месяц налог автоматически уменьшается",
      "Ставка налога может повышаться для части дохода при переходе порогов",
      "Налог начисляется только на премии"
    ],
    correct: 1,
    explanation: "В прогрессивной системе ставка зависит от уровня дохода; детали зависят от законодательства страны."
  },
  {
    question: "Что обычно понимают под сверхурочной работой?",
    answers: [
      "Работу по инициативе работодателя за пределами установленной продолжительности рабочего времени",
      "Любую работу, выполненную сотрудником из дома",
      "Работу во время обычного обеденного перерыва по желанию"
    ],
    correct: 0,
    explanation: "Сверхурочная работа — работа за пределами установленного рабочего времени; её оформление и оплата регулируются законом."
  },
  {
    question: "Что такое индексация зарплаты?",
    answers: [
      "Перевод зарплаты на другой банковский счёт",
      "Повышение выплат для поддержания их покупательной способности, например при росте цен",
      "Удержание части зарплаты за опоздание"
    ],
    correct: 1,
    explanation: "Индексация помогает компенсировать снижение покупательной способности денег из-за роста цен."
  },
  {
    question: "Что показывает минимальный размер оплаты труда (МРОТ) в России?",
    answers: [
      "Среднюю зарплату во всех компаниях страны",
      "Максимальную сумму, которую можно получить за месяц",
      "Установленный государством минимальный уровень оплаты труда при соблюдении условий закона"
    ],
    correct: 2,
    explanation: "МРОТ — установленная законом минимальная величина оплаты труда; конкретные правила зависят от периода и условий."
  },
  {
    question: "Зачем работнику трудовой договор?",
    answers: [
      "В нём фиксируются условия работы, включая оплату и обязанности",
      "Он нужен только для получения премии",
      "Он заменяет расчётный листок и банковский счёт"
    ],
    correct: 0,
    explanation: "Трудовой договор закрепляет основные договорённости сторон, в том числе условия оплаты труда."
  },
  {
    question: "Что обычно означает «аванс» в разговоре о зарплате?",
    answers: [
      "Премию за работу в выходной день",
      "Деньги, которые сотрудник обязан вернуть работодателю",
      "Часть зарплаты, выплачиваемую за первую половину расчётного периода"
    ],
    correct: 2,
    explanation: "Авансом часто называют выплату за первую половину месяца; формально это часть заработной платы."
  },
  {
    question: "Что может уменьшить сумму к выплате по сравнению с начисленной зарплатой?",
    answers: [
      "Предусмотренные законом удержания, например налог",
      "Стоимость товаров в магазине работодателя",
      "Количество выходных дней в следующем месяце"
    ],
    correct: 0,
    explanation: "Разница между начисленной суммой и суммой на руки может возникать из-за налогов и других законных удержаний."
  },
  {
    question: "Какой документ обычно помогает проверить начисление зарплаты за месяц?",
    answers: [
      "Билет на общественный транспорт",
      "Рекламный буклет компании",
      "Расчётный листок"
    ],
    correct: 2,
    explanation: "В расчётном листке указывают составные части зарплаты, удержания и итог к выплате."
  },
  {
    question: "Какая формула лучше всего описывает сдельный заработок?",
    answers: [
      "Стоимость аренды офиса ÷ число сотрудников",
      "Сдельная расценка × количество выполненных единиц работы",
      "Число выходных × ставка налога"
    ],
    correct: 1,
    explanation: "При сдельной оплате заработок обычно рассчитывают по расценке за единицу и выполненному объёму."
  },
  {
    question: "Что полезнее всего сделать, если сумма зарплаты кажется неверной?",
    answers: [
      "Не проверять начисления до конца года",
      "Сверить расчётный листок и задать вопрос бухгалтерии или работодателю",
      "Сразу удалить банковское приложение"
    ],
    correct: 1,
    explanation: "Сначала проверь начисления и удержания в расчётном листке, затем уточни расхождения у работодателя."
  }
];

const elements = {
  currentNumber: document.querySelector("#current-number"),
  totalNumber: document.querySelector("#total-number"),
  scoreCount: document.querySelector("#score-count"),
  progressTrack: document.querySelector(".progress-track"),
  progressFill: document.querySelector(".progress-fill"),
  questionKicker: document.querySelector("#question-kicker"),
  questionTitle: document.querySelector("#question-title"),
  answerList: document.querySelector("#answer-list"),
  feedback: document.querySelector("#feedback"),
  feedbackTitle: document.querySelector(".feedback-title"),
  feedbackDetail: document.querySelector(".feedback-detail"),
  feedbackIcon: document.querySelector(".feedback-icon"),
  footerHint: document.querySelector("#footer-hint"),
  nextButton: document.querySelector("#next-button"),
  quizCard: document.querySelector(".quiz-card"),
  resultCard: document.querySelector("#result-card"),
  finalScore: document.querySelector("#final-score"),
  finalPercent: document.querySelector("#final-percent"),
  correctCount: document.querySelector("#correct-count"),
  wrongCount: document.querySelector("#wrong-count"),
  resultMeterFill: document.querySelector(".result-meter-fill"),
  resultTitle: document.querySelector("#result-title"),
  restartButton: document.querySelector("#restart-button")
};

const answerLetters = ["А", "Б", "В"];
let currentQuestion = 0;
let correctAnswers = 0;
let answered = false;

elements.totalNumber.textContent = String(questions.length).padStart(2, "0");
elements.progressTrack.setAttribute("aria-valuemax", String(questions.length));

function renderQuestion() {
  const item = questions[currentQuestion];
  const number = currentQuestion + 1;

  answered = false;
  elements.currentNumber.textContent = String(number).padStart(2, "0");
  elements.questionKicker.textContent = `ВОПРОС ${String(number).padStart(2, "0")}`;
  elements.questionTitle.textContent = item.question;
  elements.scoreCount.textContent = String(correctAnswers);
  elements.progressTrack.setAttribute("aria-valuenow", String(currentQuestion));
  elements.progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;
  elements.answerList.replaceChildren();
  elements.feedback.hidden = true;
  elements.feedback.className = "feedback";
  elements.nextButton.disabled = true;
  elements.nextButton.querySelector("span").textContent = "Следующий вопрос";
  elements.nextButton.querySelector(".button-arrow").textContent = "→";
  elements.footerHint.innerHTML = '<span class="hint-dot"></span> Выбери один вариант ответа';

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    const letter = document.createElement("span");
    const text = document.createElement("span");

    button.className = "answer-option";
    button.type = "button";
    button.dataset.answerIndex = String(index);
    letter.className = "answer-letter";
    letter.textContent = answerLetters[index];
    text.className = "answer-text";
    text.textContent = answer;
    button.append(letter, text);
    button.addEventListener("click", selectAnswer);
    elements.answerList.append(button);
  });
}

function selectAnswer(event) {
  if (answered) return;

  answered = true;
  const selectedIndex = Number(event.currentTarget.dataset.answerIndex);
  const item = questions[currentQuestion];
  const isCorrect = selectedIndex === item.correct;
  const answerButtons = elements.answerList.querySelectorAll(".answer-option");

  answerButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === item.correct) {
      button.classList.add("is-correct");
    } else if (index === selectedIndex) {
      button.classList.add("is-wrong");
    } else {
      button.classList.add("is-muted");
    }
  });

  if (isCorrect) {
    correctAnswers += 1;
    elements.feedback.classList.add("correct");
    elements.feedbackTitle.textContent = "Верно! Отличный ответ.";
    elements.feedbackIcon.textContent = "✓";
    elements.footerHint.innerHTML = '<span class="hint-dot"></span> Ответ засчитан';
  } else {
    elements.feedback.classList.add("incorrect");
    elements.feedbackTitle.textContent = `Не совсем. Правильный ответ: ${item.answers[item.correct]}`;
    elements.feedbackIcon.textContent = "!";
    elements.footerHint.innerHTML = '<span class="hint-dot"></span> Правильный ответ отмечен зелёным';
  }

  elements.feedbackDetail.textContent = item.explanation;
  elements.feedback.hidden = false;
  elements.scoreCount.textContent = String(correctAnswers);
  elements.nextButton.disabled = false;
  if (currentQuestion === questions.length - 1) {
    elements.nextButton.querySelector("span").textContent = "Посмотреть результат";
    elements.nextButton.querySelector(".button-arrow").textContent = "→";
  }
}

function showResults() {
  const incorrectAnswers = questions.length - correctAnswers;
  const percentage = Math.round((correctAnswers / questions.length) * 100);

  elements.finalScore.textContent = String(correctAnswers);
  elements.finalPercent.textContent = `${percentage}%`;
  elements.correctCount.textContent = String(correctAnswers);
  elements.wrongCount.textContent = String(incorrectAnswers);
  elements.resultMeterFill.style.width = `${percentage}%`;

  if (percentage === 100) {
    elements.resultTitle.textContent = "Идеальный результат!";
  } else if (percentage >= 70) {
    elements.resultTitle.textContent = "Отличная работа!";
  } else if (percentage >= 40) {
    elements.resultTitle.textContent = "Хорошее начало!";
  } else {
    elements.resultTitle.textContent = "Время узнать больше!";
  }

  elements.progressTrack.setAttribute("aria-valuenow", String(questions.length));
  elements.progressFill.style.width = "100%";
  elements.quizCard.hidden = true;
  elements.resultCard.hidden = false;
  elements.restartButton.focus();
}

elements.nextButton.addEventListener("click", () => {
  if (!answered) return;
  if (currentQuestion === questions.length - 1) {
    showResults();
    return;
  }

  currentQuestion += 1;
  renderQuestion();
});

elements.restartButton.addEventListener("click", () => {
  currentQuestion = 0;
  correctAnswers = 0;
  elements.resultCard.hidden = true;
  elements.quizCard.hidden = false;
  renderQuestion();
  elements.answerList.querySelector(".answer-option")?.focus();
});

renderQuestion();
