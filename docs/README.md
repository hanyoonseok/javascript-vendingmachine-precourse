<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-vendingmachine-precourse/blob/main/images/beverage_icon.png?raw=true"/>
</p>
<h1 align="middle">자판기</h1>

## 🎯 구현할 기능 목록
### 0. `eslint` 적용
- `airbnb` 컨벤션 적용
- `MissionUtils`에서 발생하는 `no-undef` 의 예외처리

### 1. 상단의 탭 메뉴 구현
- 탭을 클릭했을 때, 각 기능에 맞는 view 노출
- localstorage를 이용해 다른 택으로 이동했거나 새로고침해도 작업한 정보들을 유지

### 2. 상품 관리 탭
- 상품가격은 10의 배수이며 양의 정수여야 한다.
- 수량은 1이상의 양의 정수여야 한다.
- 상품명, 가격, 수량은 공백일 경우 alert를 통해 알린다.

### 3. 잔돈 충전 탭
- 충전 금액은 1이상의 양의 정수여야 한다.
- 충전 금액이 공백일 경우 alert를 통해 알린다.
- 충전 금액에 따라 동전을 무작위로 생성한다. 
- 추가 충전 금액 또한 동전을 무작위로 생성하며, 기존 동전들에 더한다.

### 4. 상품 구매 탭
- 투입한 금액은 10의 배수이며, 1이상의 양의 정수여야 한다.
- 투입한 금액이 공백일 경우 alert를 통해 알린다.
- 구매한 상품이 충전 금액보다 크면 alert를 통해 알린다.
- 잔돈을 반환할 수 없는 경우 **잔돈으로 반환할 수 있는 금액까지만** 반환한다.
