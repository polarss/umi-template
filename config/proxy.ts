export default {
  '/managerServer': {
    target: process.env.API_PROXY_URL,
    changeOrigin: true,
  },
};
