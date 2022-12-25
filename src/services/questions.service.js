const date = new Date()
const day = date.getDate()
const month = date.getMonth()+1
const year = date.getFullYear()

const PreparedQuestions = [
  {
    id: 0,
    title: "Fisrt test",
    time: 120,
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
    time: 180,
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
  addTest(newTest){
    const storage = localStorage.getItem('questions')
    let parsedstorage = JSON.parse(storage)
    newTest = JSON.parse(newTest)
    const id = parsedstorage.length
    const additional = {
      id,
      date:`${day}-${month}-${year}`
    }
    Object.assign(newTest, additional)
    parsedstorage.push(newTest)
    localStorage.setItem('questions', JSON.stringify(parsedstorage))
  },
  addResult(result){
    if(!localStorage.getItem('tests') || JSON.parse(localStorage.getItem('tests')).length === 0){
      localStorage.setItem('tests', JSON.stringify([]))
    }
    const storage = localStorage.getItem('tests')
    let parsedstorage = JSON.parse(storage)
    result = JSON.parse(result)
    const id = parsedstorage.length
    const additional = {
      id,
      date:`${day}-${month}-${year}`
    }
    Object.assign(result, additional)
    parsedstorage.push(result)
    localStorage.setItem('tests', JSON.stringify(parsedstorage))
  },
  fetchTests(){
    if(!localStorage.getItem('tests') || JSON.parse(localStorage.getItem('tests')).length === 0){
      localStorage.setItem('tests', JSON.stringify([]))
    }
    const storage = localStorage.getItem('tests')
    const parsedstorage = JSON.parse(storage)
    return parsedstorage
  },
  removeTest(id){
    const storage = localStorage.getItem('tests')
    const parsedstorage = JSON.parse(storage)
    const filtered = parsedstorage.filter((tester) => tester.id !== id);
    localStorage.setItem('tests', JSON.stringify(filtered))
    return filtered
  }
}