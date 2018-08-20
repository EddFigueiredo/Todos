export default {
  get: jest.fn((url) => {
    if (url === '/hello-world') {
      return Promise.resolve({
        data: 'Hello World'
      })
    }
  }),
  post: jest.fn((url) => {
    if (url === '/something') {
      return Promise.resolve({
        data: 'data'
      })
    }
    if (url === '/something2') {
      return Promise.resolve({
        data: 'data2'
      })
    }
  }),
  create: jest.genMockFromModule('axios'),
  defaults: {
    adapter: {}
  }
}
