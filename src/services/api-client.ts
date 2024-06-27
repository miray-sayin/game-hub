import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e4ffce01bffe42aba5cc67685c1cfeb1',
  },
});
