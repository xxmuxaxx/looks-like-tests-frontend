export type Answers = Array<{ questionId: number; answerIds: number[] }>;

export const mockTest = {
  id: 0,
  name: "Тестирование на знание методов оценки",
  minRightAnswers: 1,
  duration: 15,
  questions: [
    {
      id: 0,
      name: "Вам предстоит изучить и ответить на ряд вопрсосов и знании криетриев оценки и подсчета статистики",
      type: "radio",
      images: [
        "https://placeimg.com/300/300/any",
        "https://placeimg.com/300/300/any",
      ],
      answers: [
        {
          id: 0,
          name: "Отношение числа дней",
        },
        {
          id: 1,
          name: "Отношение числа ставок",
        },
        {
          id: 2,
          name: "И то, и другое",
        },
        {
          id: 3,
          name: "Ни то, ни другое",
        },
      ],
    },
    {
      id: 1,
      name: "В каком возрасте можно покупать молоко?",
      type: "checkbox",
      answers: [
        {
          id: 0,
          name: "12-18 лет",
        },
        {
          id: 1,
          name: "19-56 лет",
        },
        {
          id: 2,
          name: "56 и более лет",
        },
      ],
    },
  ],
};
