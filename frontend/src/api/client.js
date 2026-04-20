const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

async function request(endpoint, options = {}) {
  const token = localStorage.getItem('admin_token');

  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.error || errorBody?.message || response.statusText || 'Request failed');
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export const api = {
  getProjects: (params = {}) => {
    const query = new URLSearchParams();

    if (params.category) query.set('category', params.category);
    if (params.featured) query.set('featured', 'true');
    if (params.search) query.set('search', params.search);

    const suffix = query.toString() ? `?${query.toString()}` : '';
    return request(`/projects${suffix}`);
  },
  getProject: (id) => request(`/projects/${id}`),
  getDevelopers: () => request('/developers'),
  getDeveloper: (id) => request(`/developers/${id}`),
  getArticles: (params = {}) => {
    const query = new URLSearchParams();

    if (params.tag) query.set('tag', params.tag);
    if (params.search) query.set('search', params.search);

    const suffix = query.toString() ? `?${query.toString()}` : '';
    return request(`/articles${suffix}`);
  },
  getArticle: (id) => request(`/articles/${id}`),
  submitContact: (data) =>
    request('/contacts', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};
