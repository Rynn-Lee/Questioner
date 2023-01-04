import { accountService } from "./account.service"
import { questionsService } from "./questions.service"
import { resultsService } from "./results.service"


export const services = {
  questions: questionsService,
  results: resultsService,
  account: accountService
}