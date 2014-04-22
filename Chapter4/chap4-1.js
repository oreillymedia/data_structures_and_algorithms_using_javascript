function CArray(numElements) {
   this.dataStore = [];
   this.pos = 0;
   this.numElements = numElements;
   this.insert = insert;
   this.toString = toString;
   this.clear = clear;
   this.setData = setData;

   for (var i = 0; i < numElements; ++i) {
      this.dataStore[i] = i;
   }
}

function setData() {
   for (var i = 0; i < this.numElements; ++i) {
      this.dataStore[i] = Math.floor(Math.random() * 
                          (this.numElements+1));
   }
}

function clear() {
   for (var i = 0; i < this.dataStore.length; ++i) {
      this.dataStore[i] = 0;
   }
}

function insert(element) {
   this.dataStore[this.pos++] = element;
}

function toString() {
   var retstr = "";
   for (var i = 0; i < this.dataStore.length; ++i) {
      retstr += this.dataStore[i] + " ";
      if (i > 0 && i % 10 == 0) {
         retstr += "\n";
      }
   }
   return retstr;
}