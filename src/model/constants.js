export const MENU_NAME = ['productManage', 'changeCharge', 'productPurchase'];

export const MENU = name => {
  const Info = [
    {
      name: 'productManage',
      menu: '상품 관리',
      menuId: 'product-purchase-menu',
      nameInputId: 'product-name-input',
      priceInputId: 'product-price-input',
      quantityInputId: 'product-quantity-input',
      productAddTitle: '상품 추가하기',
      productAddButton: '추가하기',
      productAddButtonId: 'product-add-button',
      productStatusTitle: '상품 현황',
      manageItemClass: 'product-manage-item',
      manageItemNameClass: 'product-manage-name',
      manageItemPriceClass: 'product-manage-price',
      manageItemQuantityClass: 'product-manage-quantity',
      tableHeader: ['상품명', '가격', '수량'],
    },
    {
      name: 'changeCharge',
      menu: '잔돈 충전',
      menuId: 'product-purchase-menu',
      nameInputId: 'product-name-input',
      priceInputId: 'product-price-input',
      quantityInputId: 'product-quantity-input',
      productAddTitle: '상품 추가하기',
      productAddButton: '추가하기',
      productAddButtonId: 'product-add-button',
      productStatusTitle: '상품 현황',
      manageItemClass: 'product-manage-item',
      manageItemNameClass: 'product-manage-name',
      manageItemPriceClass: 'product-manage-price',
      manageItemQuantityClass: 'product-manage-quantity',
      tableHeader: ['상품명', '가격', '수량'],
    },
    {
      name: 'productPurchase',
      menu: '상품 구매',
      menuId: 'product-purchase-menu',
      nameInputId: 'product-name-input',
      priceInputId: 'product-price-input',
      quantityInputId: 'product-quantity-input',
      productAddTitle: '상품 추가하기',
      productAddButton: '추가하기',
      productAddButtonId: 'product-add-button',
      productStatusTitle: '상품 현황',
      manageItemClass: 'product-manage-item',
      manageItemNameClass: 'product-manage-name',
      manageItemPriceClass: 'product-manage-price',
      manageItemQuantityClass: 'product-manage-quantity',
      tableHeader: ['상품명', '가격', '수량'],
    },
  ];

  return Info.find(e => e.name === name);
};
