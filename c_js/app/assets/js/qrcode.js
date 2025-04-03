import {api} from './module/unsplash.js';

(async () => {
  const response = await api();
  console.dir(response);
})();