import {ping} from "../src/discord";

describe('discord', () => {
  it ("test the mock", () => {
    const mock = jest.fn().mockReturnValueOnce(4).mockReturnValueOnce(2)

    console.log(mock()) //4
    console.log(mock()) //2
    console.log(mock()) //undefined

  })

  it ("should dm the user", async () => {
    const channelMock = {
      send: jest.fn()
    }
    const createDMMock = jest.fn().mockResolvedValue(channelMock)

    const message = {
      delete: jest.fn().mockResolvedValue({}),
      reply: jest.fn(),
      author: {
        createDM: createDMMock
      }
    }
    await ping(message)
    expect(message.delete).toHaveBeenCalled()
    expect(channelMock.send).toHaveBeenCalledWith('pong')
  })

  it ("should reply to the user if desactivated", async () => {
    const createDMMock = jest.fn().mockRejectedValue({})

    const message = {
      delete: jest.fn().mockResolvedValue({}),
      reply: jest.fn(),
      author: {
        createDM: createDMMock
      }
    }
    await ping(message)
    expect(message.delete).toHaveBeenCalled()
    expect(message.reply).toHaveBeenCalledWith('pong')
  })
});