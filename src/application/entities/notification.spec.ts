import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', async () => {
    const content = new Notification({
      content: new Content('Você recebeu uma silicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(content).toBeTruthy();
  });
});
