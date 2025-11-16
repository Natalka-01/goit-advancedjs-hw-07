class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
    console.log(`Key створено з сигнатурою: ${this.signature.toFixed(5)}`);
  }

  
  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
    console.log('Person створено і має ключ.');
  }


  public getKey(): Key {
    return this.key;
  }
}


abstract class House {
  
  protected door: boolean = false;
  
  protected key: Key;
  
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
    console.log('House створено.');
  }

  
  abstract openDoor(key: Key): void;

  
  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Двері відкриті. Людина зайшла до будинку.');
    } else {
      console.log('Двері зачинені. Людина не може увійти.');
    }
  }

  
  public getTenants(): Person[] {
    return this.tenants;
  }
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Ключі збігаються. Двері відкриті!');
    } else {
      this.door = false;
      console.log('Ключі НЕ збігаються. Двері залишаються зачиненими.');
    }
  }
}



const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};