export interface BaseUrl {
  authentication: string;
  note: string;
}

export interface RestUrl {
  register: string;
  login: string;
  checkEmailStatus: string;
  createNote: string;
  getNotesByUserId: string;
}
