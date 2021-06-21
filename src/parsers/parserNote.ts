import { Note } from '@/models/Note';

export function NoteParser(payload: any) {
  const note: Note = new Note();

  note._id = payload._id;
  note.issue_date = new Date(payload.issue_date);
  note.total = payload.total;
  note.establishment = payload.establishment;

  return note;
}
