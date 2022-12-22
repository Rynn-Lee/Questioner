const date = new Date()
const day = date.getDay()
const month = date.getMonth()+1
const year = date.getFullYear()

export const DBservice = {
  fetchAll(){
    if(!localStorage.getItem('questions')){
      localStorage.setItem('questions', JSON.stringify(PreparedQuestions))
    }
    const storage = localStorage.getItem('questions')
    const parsedstorage = JSON.parse(storage)
    return parsedstorage
  },
  add(){
    
  },
  remove(id){
    const storage = localStorage.getItem('questions')
    const parsedstorage = JSON.parse(storage)
    const filtered = parsedstorage.filter((questioner) => questioner.id !== id);
    localStorage.setItem('questions', JSON.stringify(filtered))
    this.fetchAll()
    console.log(filtered)
  },
  store(){
    
  }
}
















const PreparedQuestions = [
  {
    id: 0,
    title: "Fisrt questioner",
    time: 20,
    date: `${day}-${month}-${year}`,
    questions: [
      {
        id: 0,
        title: "Do you like the questioner?",
        question: ["Yes", "Yes", "No", "Yes"],
        answer: "Yes"
      },
      {
        id: 1,
        title: "Wanna work on NASA?",
        question: ["Totally", "Nah", "I'm good", "Toad"],
        answer: "Nah"
      },
      {
        id: 2,
        title: "Who's the best?",
        question: ["RYNN", "LORDCOKIS", "ARCHI", "ME"],
        answer: "RYNN"
      }
    ]
  },
  {
    id: 1,
    title: "Second questioner",
    time: 80,
    date: `${day}-${month}-${year}`,
    questions: [
      {
        id: 0,
        title: "Do you like the questioner?",
        question: ["Yes", "Yes", "No", "Yes"],
        answer: "Yes"
      },
      {
        id: 1,
        title: "Wanna work on NASA?",
        question: ["Totally", "Nah", "I'm good"],
        answer: "Nah"
      },
      {
        id: 2,
        title: "Who's the best?",
        question: ["RYNN", "LORDCOKIS", "ARCHI"],
        answer: "RYNN"
      }
    ]
  }
]