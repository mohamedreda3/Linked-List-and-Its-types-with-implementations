class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  remove(value) {
    if (!this.head) return null; // هنا أنا فحصت هل فيه هيد ولا لأ لو فيه يبقا اللينكد ليست فيها عناصر لو مفيش يبقا مفيهاش عناصر
    let current = this.head; // هنا بدأت من أول الهيد لإني هبدأ سيرش عن ال عايز أحذفه من الأول خالص
    let prev = null; // دا متغير عشان أخلي النود ال قبل النود ال همسحها بتشاور ع ال بعد النود ال همسحها بمعني أنا لو همسح النود التالتة فهخلي النود التانية تشاور ع الرابعة ع طول وبكد أكن أنا النود التالتة دي مش موجودة عندي وهتتحذف لأن مفيش حاجه بتشاور عليها

    //   جملة التكرا هنا هدور ف كل النودز ال عندي هل القيمة ال همسحها موجودة ولا لآ طول ما هو مش لاقيها هيفضل يكرر
    while (current.value != value) {
      // الشرط دا حطيته لإن هنا أنا لو ملقيتش القيمة ال عايز أحذفها وف نفس الوقت وصلت لآخر اللينكد ليست أروح خارج من الفانكشن خالص 
      if (!current.next) return null;
      prev = current;
      current = current.next;
    }

    if (current === this.head) {
      //  الشرط دا بقوله لو القيمة ال هتتتحذف موجودة ف الهيد فاأنا هخلي الهيد بيساوي العنصر ال بعده وبكدا الأول ال هو الهيد الحالي اتحذف
      this.head = this.head.next;
    } else if (current === this.tail) {
      //  وهنا نفس حوار الهيد لو هوا التيل أخر عنصر أخلي التيل هو العنصر ال قبله وأخليه مبيشاورش ع حاجه وبكدا ولا كأن الأخير دا موجود
      this.tail = prev;
      this.tail.next = null;
    } else {
      // هنا بقالو لقيته ف أي مكان غير التيل والهيد هحذفه بإني أخلي النود ال قبلها بيتشاور ع البعدها وبكدا مفيش حاجه بتشاور عليه ولا كأنه موجود
      prev.next = current.next;
    }
    // هنا هنقص من طول اللينكد واحد معناه ان العنصر اتحذف والطول قل
    this.length--;
    return current;
  }

  toArray() {
    let array = [];
    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }
}

const linkedList = new LinkedList();
linkedList.append(5);
linkedList.append(15);
linkedList.prepend(151);
linkedList.append(1517);
linkedList.prepend(1511);
linkedList.remove(5);

console.log(linkedList.toArray());
