import { app } from './api';

export function getCakes() {
    return app.get('/cakes');
};

export function newCake(cake: any) {
    return app.post('/cakes', cake);
}

export function deleteCake(id: string) {
    return app.delete(`/cakes/${id}`);
}

export function updateCake(cake: any) {
    return app.put(`/cakes/${cake.id}`, cake);
}
