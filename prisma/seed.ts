import Photon from '@generated/photon';

const photon = new Photon();

async function main() {
  const user1 = await photon.users.create({
    data: {
      email: 'bart@simpson.de',
      firstname: 'Bart',
      lastname: 'Simpson',
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm' // "secret42"
    }
  });
  const user2 = await photon.users.create({
    data: {
      email: 'lisa@simpson.de',
      firstname: 'Lisa',
      lastname: 'Simpson',
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm' // "secret42"
    }
  });

  console.log({ user1, user2 });

  const lisa = await photon.users.findOne({
    where: { email: 'lisa@simpson.de' }
  });
  console.log(lisa);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect();
  });
