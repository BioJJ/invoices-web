import { Note } from '@/models/Note';
import { NoteParser } from '@/parsers/parserNote';
import api from './http-common';

class NotesServices {
  async getAll(): Promise<Note[]> {
    try {
      const { data } = await api.get('/notes');

      return (data as any[]).map((item) => NoteParser(item));
    } catch (error) {
      throw new Error(error);
    }
  }

  get(id: string) {
    return api.get(`/notes/${id}`);
  }

  create(data: any) {
    return api.post('/notes', data);
  }

  update(id: string, data: any) {
    return api.patch(`/notes/${id}`, data);
  }

  delete(id: string) {
    return api.delete(`/notes/${id}`);
  }
}

export default new NotesServices();
