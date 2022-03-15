export const SERVER_SETTINGS = {
  ADDRESSES: {
    LOCAL: '',
    REMOTE: ''
  },
  LISTENER: {
    PORT: 5000
  },
  API_CALLS: {
    DEFAULT: '/',
    STUDENT_REQUESTS: {
      GET_STUDENTS: '/getStudents',
      SET_STUDENT: '/setStudent'
    },
    BOOK_REQUESTS: {
      GET_BOOKS: '/getBooks',
      SET_BOOK: '/setBook'
    }
  }
}

export const DB_SETINGS = {
  ADDRESSES: {
    LOCAL: 'postgres://localhost:27017/',
    REMOTE: 'postgres://dtsesist:Qzng09QMV3QY1CMjJuuL1vseDhddI9cB@salt.db.elephantsql.com/dtsesist'
  },
  CLIENT: 'pg',
  NAME: 'librarysys',
  COLLECTIONS: {
    STUDENT: 'student',
    BOOK: 'book'
  }
}