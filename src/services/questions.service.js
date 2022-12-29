const date = new Date()
const day = date.getDate()
const month = date.getMonth()+1
const year = date.getFullYear()

const PreparedQuestions = [
  {
    id: 0,
    title: "Fisrt test",
    time: 12,
    date: `${day}-${month}-${year}`,
    questions: [
      {
        title: "Do you like the test?",
        question: ["Yes", "Yes", "No", "Yes"],
        answer: 3
      },
      {
        title: "Wanna work on NASA?",
        question: ["Totally", "Nah", "I'm good", "Toad"],
        answer: 2
      },
      {
        title: "Who's the best?",
        question: ["RYNN", "LORDCOKIS", "ARCHI", "ME"],
        answer: 1
      }
    ]
  },
  {
    id: 1,
    title: "Second test",
    time: 5,
    date: `${day}-${month}-${year}`,
    questions: [
      {
        id:0,
        title: "Do you like the questioner?",
        question: ["yes", "yes", "yes", "yes"],
        answer: 1
      },
      {
        id:1,
        title: "Wanna work on NASA?",
        question: ["nah", "Nsh", "Nah", "nh"],
        answer: 3
      },
      {
        id:2,
        title: "Who's the best?",
        question: ["RYNN", "RYNN", "RYNN", "RYNN"],
        answer: 1
      }
    ]
  },
  {
  "title": "React.js",
  "time": "15",
  "questions": [
      {
          "title": "Для чего нужен ServiceWorker",
          "question": [
              "Для Progressive Web App",
              "Для Hyper-text markup language",
              "Для JavaScript",
              "Для всего"
          ],
          "answer": "1"
      },
      {
          "title": "Для чего нужен Manifest.json",
          "question": [
              "Для указания путей",
              "Для PAA",
              "Для CSS",
              "Нет верных ответов"
          ],
          "answer": "4"
      },
      {
          "title": "Основная фишка в React.js, отличная от чистого js",
          "question": [
              "Скорость",
              "Простота",
              "Компоненты",
              "Консоль"
          ],
          "answer": "3"
      },
      {
          "title": "Что используется для объявления состояния?",
          "question": [
              "useEffect",
              "useState",
              "useCallback",
              "useForm"
          ],
          "answer": "2"
      },
      {
          "title": "Как лучше объявлять переменные в реакте?",
          "question": [
              "const",
              "let",
              "var",
              "string"
          ],
          "answer": "1"
      }
  ],
  "id": 2,
  "date": "25-12-2022"
  }
]

export const questionsService = {
  fetchAll() {
    if(!localStorage.getItem('questions') || JSON.parse(localStorage.getItem('questions')).length === 0){
      localStorage.setItem('questions', JSON.stringify(PreparedQuestions))
    }
    const storage = localStorage.getItem('questions')
    const parsedstorage = JSON.parse(storage)
    return parsedstorage
  },


  addTest(newTest){
    const storage = localStorage.getItem('questions')
    let parsedstorage = JSON.parse(storage)
    newTest = JSON.parse(newTest)
    const id = Math.floor(Math.random(10) * 10000)
    const additional = {
      id,
      date:`${day}-${month}-${year}`
    }
    Object.assign(newTest, additional)
    parsedstorage.push(newTest)
    localStorage.setItem('questions', JSON.stringify(parsedstorage))
  },


  fetchOne(id){
    const storage = localStorage.getItem('questions')
    const parsedstorage = JSON.parse(storage)
    const filtered = parsedstorage.find((el, index) => el.id === parseInt(id))
    return filtered
  },


  remove(id){
    const storage = localStorage.getItem('questions')
    const parsedstorage = JSON.parse(storage)
    const filtered = parsedstorage.filter((questioner) => questioner.id !== id);
    localStorage.setItem('questions', JSON.stringify(filtered))
    return filtered
  },

//TODO Сделать отдельный сервис для результатов
//TODO Переименовать тесты в результаты
}