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
      AddTitle: '상품 추가하기',
      AddButton: '추가하기',
      AddButtonId: 'product-add-button',
      StatusTitle: '상품 현황',
      manageItemClass: 'product-manage-item',
      manageItemNameClass: 'product-manage-name',
      manageItemPriceClass: 'product-manage-price',
      manageItemQuantityClass: 'product-manage-quantity',
      tableHeader: ['상품명', '가격', '수량'],
    },
    {
      name: 'changeCharge',
      menu: '잔돈 충전',
      menuId: 'vending-machine-manage-menu',
      chargeTitle: '자판기 동전 충전하기',
      chargeInputPlaceholder: '자판기가 보유할 금액',
      chargeInputId: 'vending-machine-charge-input',
      chargeButton: '충전하기',
      chargeButtonId: 'vending-machine-charge-button',
      chargeAmountId: 'vending-machine-charge-amount',
      chargeAmount: '보유금액: ',
      coinAmountTitle: '자판기가 보유한 동전',
      coin500QuantityId: 'vending-machine-coin-500-quantity',
      coin100QuantityId: 'vending-machine-coint-100-quantity',
      coin50QuantityId: 'vending-machine-coint-50-quantity',
      coin10QuantityId: 'vending-machine-coint-10-quantity',
      tableHeader: ['동전', '개수'],
    },
    {
      name: 'productPurchase',
      menu: '상품 구매',
      menuId: 'product-add-menu',
      chargeInputId: 'charge-input',
      chargeButtonId: 'charge-button',
      chargeAmountId: 'charge-amount',
      coinReturnButtonId: 'coin-return-button',
      coin500QuantityId: 'coin-500-quantity',
      coin100QuantityId: 'coin-100-quantity',
      coin50QuantityId: 'coin-50-quantity',
      coin10QuantityId: 'coin-10-quantity',
      productPurchaseItemClass: 'product-purchase-item',
      purchaseButtonClass: 'purchase-button',
      purchaseNameClass: 'product-purchase-name',
      purchasePriceClass: 'product-purchase-price',
      purchaseQuantityClass: 'product-purchase-quantity',
      productNameDataset: 'data-product-name',
      productPriceDataset: 'data-product-price',
      productQuantityDataset: 'data-product-quantity',
      tableHeader: ['상품명', '가격', '수량'],
    },
  ];

  return Info.find(e => e.name === name);
};

export const ALERT_MESSAGE = {
  isNotPositiveNumber: '1이상의 정수를 입력해주세요.',
  isBlank: '공백을 제거해주세요',
  isNotMultipleOf10: '10의 배수를 입력해주세요.',
  isAlreadyExistProduct: '이미 존재하는 상품입니다.',
};
