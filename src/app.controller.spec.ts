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
      // when
      const user = await appController.getUser('1');
      // then
      expect(user).toBeTruthy();
    });
  });
});
