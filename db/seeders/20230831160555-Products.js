

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          model: 'Asics Gel-lyte III',
          img: 'https://img2.traektoria.ru/upload/trk_iblock_img/107/ke8o99qf9b0pi5pao4vuuu16zqkskpcz.jpg?fit=700,700',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          model: 'New Balance 1906r',
          img: 'https://static.insales-cdn.com/images/products/1/4379/710218011/ebpjgeEMqc4.jpg?fit=700,700',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          model: 'Nike Air Force 1',
          img: 'https://avatars.mds.yandex.net/get-mpic/5352299/img_id1456060139159892436.jpeg/orig?fit=700,700',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          model: 'Reebok Classic Leather',
          img: 'https://ir.ozone.ru/s3/multimedia-a/wc750/6495082702.jpg?fit=700,700',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
