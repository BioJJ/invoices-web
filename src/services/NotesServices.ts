import api from './http-common';

class NotesServices {
  getAll() {
    return api.get('/notes');
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
