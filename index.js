const {
  Phone,
  sequelize,
  Sequelize: { Op },
} = require('./models');

(async () => {
  const phone = {
    model: 'Y6 2019',
    brand: 'Huawei',
    manufactureYear: '2019',
    ram: 2,
    processor: 'MediaTek MT6761',
    screenDiagonal: 6.09,
    nfc: false,
  };

  //---программно добавление нового телефона

  // const createdPhone = await Phone.create(phone);
  // console.log('createdPhone', createdPhone.get());

  //---получение списка телефонов (* 3-я страница при просмотре по 4 телефона на странице, упорядоченных по году издания)

  // const foundPhones = await Phone.findAll({
  //   raw: true,
  //   limit: 4,
  //   offset: 8,
  //   order: [['manufacture_year', 'ASC']],
  // });
  // console.log('foundPhones', foundPhones);

  //---*получение списка телефонов определенного года издания

  //---*получение списка телефонов старее 2020 года выпуска

  // const foundPhones = await Phone.findAll({
  //   raw: true,
  //   where: {
  //     manufacture_year: { [Op.lt]: ['2020-01-01'] },
  //   },
  // });
  // console.log('foundPhones', foundPhones);

  //---обновление: добавить нфс всем телефонам 2021 года выпуска

  // const [, [updatePhone]] = await Phone.update(
  //   {
  //     nfc: false,
  //   },
  //   {
  //     where: {
  //       manufacture_year: {
  //         [Op.between]: ['2021-01-01', '2021-12-31'],
  //       },
  //     },
  //     returning: true,
  //     raw: true,
  //   }
  // );
  // console.log('updatePhone', updatePhone);

  //---удаление телефонов 2019 года выпуска

  // const deletePhonesCount = await Phone.destroy({
  //   where: {
  //     manufacture_year: {
  //       [Op.between]: ['2019-01-01', '2019-12-31'],
  //     },
  //   },
  // });
  // console.log('deletePhonesCount', deletePhonesCount);
})();
