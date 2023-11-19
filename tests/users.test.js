import Users from "../src/users";
import axios from 'axios'


jest.mock('axios')

describe('users', () => {

  beforeEach(() => {
    axios.mockClear()
  })

  const fake_response = [{name: 'John Doe'}]

  it('should return last user', async () => {
    axios.get.mockResolvedValue({data: fake_response})
    expect(await Users.getLastUserName()).toBe('John Doe')
  })

  // it('should return last user with fetch', async () => {
  //   fetch.mockResponseOnce(JSON.stringify(fake_response))
  //   expect(await Users.getLastUserNameFetch()).toBe('John Doe')
  // })
});