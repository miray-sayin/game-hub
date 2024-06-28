import platforms from '../data/platforms';

const usePlatforms = () => ({
  data: platforms.results,
  error: null,
  isLoading: false,
});

export default usePlatforms;
