function bubblesort() {
   var numElements = this.dataStore.length;
   var temp;
   for (var outer = numElements; outer >= 2; --outer) {
      for (var inner = 0; inner <= outer-1; ++inner) {
         if (this.dataStore[inner] > this.dataStore[inner+1]) {
            temp = this.dataStore[inner];
            this.dataStore[inner] = this.dataStore[inner+1];
            this.dataStore[inner+1] = temp;
         }
      }
      print(this.toString());
   }
}  