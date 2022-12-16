import { makeNotification } from '@test/factories/notification-factory';
import { inMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able get recipient notifications', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'example-recipient-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-recipient-1' }),
        expect.objectContaining({ recipientId: 'example-recipient-1' }),
      ]),
    );
  });
});
