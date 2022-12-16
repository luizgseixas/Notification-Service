import { makeNotification } from '@test/factories/notification-factory';
import { inMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able count recipient notifications', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-recipient-1',
    });

    expect(count).toBe(2);
  });
});
