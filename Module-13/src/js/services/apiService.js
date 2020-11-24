const baseUrl = 'https://pixabay.com/api';

export default {
  page: 1,
  query: '',
  async fetchGallery(query) {
    const apiKey = '19062217-5acbcbc5cf1ddb062c8ac3a1e';
    const queryString = `/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;
    const fullUrl = await fetch(baseUrl + queryString);
    const getResult = await fullUrl.json();
    this.incrementPage();
    return getResult.hits;
  },

  get searchQuery() {
    return this.query;
  },

  set searchQuery(string) {
    this.query = string;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};
