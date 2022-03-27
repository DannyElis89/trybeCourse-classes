const dogPictures = require('./dogPictures');

describe('Verifica funcionamento da requisição', () => {
  dogPictures.pictures = jest.fn();
  // afterEach(() => {dogPictures.pictures = jest.fn().mockReset()});
  afterEach(dogPictures.pictures.mockReset)

  test('testa a requisição em caso de sucesso', async () => {
    dogPictures.pictures.mockResolvedValue("request sucess");

    dogPictures.pictures();

    expect(dogPictures.pictures).toHaveBeenCalled();
    expect(dogPictures.pictures).toHaveBeenCalledTimes(1);

    await expect(dogPictures.pictures()).resolves.toBe("request sucess");
    expect(dogPictures.pictures).toHaveBeenCalledTimes(2);

    // dogPictures.pictures.mockReset();
  });

  test('testa a requisição em caso de falha', async () => {

    dogPictures.pictures.mockRejectedValue("request failed");

    expect(dogPictures.pictures).toHaveBeenCalledTimes(0);

    await expect(dogPictures.pictures()).resolves.toBe("request failed");
    expect(dogPictures.pictures).toHaveBeenCalledTimes(1);

    // dogPictures.dogPictures.mockReset();
  })
})
