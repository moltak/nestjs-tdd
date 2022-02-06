import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let service: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getUser: jest.fn(),
          },
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    service = app.get<AppService>(AppService);
  });

  describe('get', () => {
    it('should return a user', async () => {
      // given
      const userId = '1';
      jest
        .spyOn(service, 'getUser')
        .mockResolvedValue({ id: Number.parseInt(userId) });
      // when
      const user = await appController.getUser(userId);
      // then
      expect(user).toBeTruthy();
      expect(user.id).toEqual(Number.parseInt(userId, 10));
    });

    it('should return NotFoundException', async () => {
      expect.assertions(1);
      // given
      const userId = '1';
      jest.spyOn(service, 'getUser').mockRejectedValue(new NotFoundException());
      // when
      // then
      try {
        await appController.getUser(userId);
      } catch (err) {
        expect(err).toEqual(new NotFoundException());
      }
    });
  });
});
