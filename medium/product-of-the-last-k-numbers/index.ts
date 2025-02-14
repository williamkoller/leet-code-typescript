class ProductOfNumbers {
  private prefixProducts: number[]
  
  constructor() {
    this.prefixProducts = [1]
  }

  add(num: number): void {
    if (num === 0) {
      this.prefixProducts = [1]
    } else {
      this.prefixProducts.push(this.prefixProducts[this.prefixProducts.length - 1] * num)
    }
  }

  getProduct(k: number): number {
    if (k >= this.prefixProducts.length) {
      return 0
    }
    return this.prefixProducts[this.prefixProducts.length - 1] / this.prefixProducts[this.prefixProducts.length - 1 - k]
  }
}

const productOfNumbers = new ProductOfNumbers();
productOfNumbers.add(3);
productOfNumbers.add(0);
productOfNumbers.add(2);
productOfNumbers.add(5);
productOfNumbers.add(4);
console.log(productOfNumbers.getProduct(2));
console.log(productOfNumbers.getProduct(3));
console.log(productOfNumbers.getProduct(4));
productOfNumbers.add(8);
console.log(productOfNumbers.getProduct(2));