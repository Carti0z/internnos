export interface InterviewRequest {
  userId: string
  internshipId: string
  interviewType: 'technical' | 'behavioral' | 'project'
  currentQuestion?: number
  previousAnswers?: { question: string; answer: string }[]
}

export interface InterviewResponse {
  question: string
  questionNumber: number
  totalQuestions: number
  type: string
  context?: string
  timeLimit?: number
}

export interface InterviewEvaluation {
  overallScore: number
  breakdown: {
    technicalKnowledge: number
    communication: number
    problemSolving: number
    projectUnderstanding: number
  }
  feedback: string
  strengths: string[]
  areasForImprovement: string[]
  recommendations: string[]
}

export class InterviewerAgent {
  async getNextQuestion(request: InterviewRequest): Promise<InterviewResponse> {
    // Generate next interview question based on type and previous answers
    const questions = {
      technical: [
        "Explain the difference between SQL and NoSQL databases.",
        "What is the purpose of React's useEffect hook?",
        "Describe the concept of RESTful APIs.",
      ],
      behavioral: [
        "Tell me about a difficult problem you solved.",
        "Describe a time you had to work with a difficult team member.",
        "How do you handle tight deadlines?",
      ],
      project: [
        "Walk me through your portfolio project architecture.",
        "What challenges did you face during your internship project?",
        "How would you improve your current project?",
      ],
    }

    const questionList = questions[request.interviewType] || questions.technical
    const questionIndex = request.currentQuestion || 0

    return {
      question: questionList[questionIndex % questionList.length],
      questionNumber: questionIndex + 1,
      totalQuestions: 5,
      type: request.interviewType,
      timeLimit: 300, // 5 minutes
    }
  }

  async evaluateAnswer(request: {
    question: string
    answer: string
    type: string
  }): Promise<{ score: number; feedback: string }> {
    // Evaluate interview answer
    return {
      score: 75,
      feedback: "Good explanation. Could provide more specific examples.",
    }
  }

  async completeInterview(request: InterviewRequest): Promise<InterviewEvaluation> {
    // Evaluate entire interview performance
    return {
      overallScore: 78,
      breakdown: {
        technicalKnowledge: 82,
        communication: 76,
        problemSolving: 80,
        projectUnderstanding: 74,
      },
      feedback: "You demonstrated good technical knowledge and problem-solving skills. Communication could be improved with more structured responses.",
      strengths: [
        "Strong technical foundation",
        "Good problem-solving approach",
        "Clear project understanding",
      ],
      areasForImprovement: [
        "Structure responses more clearly",
        "Provide more specific examples",
        "Practice explaining complex concepts",
      ],
      recommendations: [
        "Practice STAR method for behavioral questions",
        "Prepare more technical examples",
        "Work on communication skills",
      ],
    }
  }
}

export const interviewerAgent = new InterviewerAgent()
