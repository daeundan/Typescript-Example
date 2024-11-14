// test_hashTable.mjs
import { HashTable } from "./hashTable.mjs";

let hashTable = new HashTable();

hashTable.set(1, "김아무개");
hashTable.set(4, "박아무개");
hashTable.set(20, "황아무개");
hashTable.set(6, "김아무개");
hashTable.set(22, "지아무개");
hashTable.set(21, "전아무개");
hashTable.set(5, "백아무개");
hashTable.set(10, "염아무개");
hashTable.set(9, "변아무개");
hashTable.set(8, "강아무개");
hashTable.set(14, "리아무개");

console.log(`1: ${hashTable.get(1)}`); // 김아무개
console.log(`4: ${hashTable.get(4)}`); // 박아무개
console.log(`20: ${hashTable.get(20)}`); // 황아무개

// 삭제 테스트
hashTable.remove(6);
console.log(`6: ${hashTable.get(6)}`); // null (삭제된 값)
