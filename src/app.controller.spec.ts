import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('get', () => {
    it('should return a user', async () => {
      // given
      const userId = '1';
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
