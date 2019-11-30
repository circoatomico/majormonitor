// src/middleware/auth.js
export default function auth({ next, router }) {
    if (!localStorage.getItem('api_token')) {
        return router.push({ name: '/logar/login' });
    }

    return next();
} 