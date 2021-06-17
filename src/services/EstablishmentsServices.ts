import api from './http-common';

class EstablishmentsServices {
  getAll() {
    return api.get('/establishments');
  }

  get(id: string) {
    return api.get(`/establishments/${id}`);
  }

  create(data: any) {
    return api.post('/establishments', data);
  }

  update(id: string, data: any) {
    return api.patch(`/establishments/${id}`, data);
  }

  delete(id: string) {
    return api.delete(`/establishments/${id}`);
  }
}

export default new EstablishmentsServices();
