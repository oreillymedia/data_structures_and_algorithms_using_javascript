function selectionsort() {
   var min, temp;
   for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
      min = outer;
      for (var inner = outer + 1; 
           inner <= this.dataStore.length-1; ++inner) {         
         if (this.dataStore[inner] < this.dataStore[min]) {
            min = inner;  
         }
      }
      temp = this.dataStore[outer]; 
      this.dataStore[outer] = this.dataStore[min];
      this.dataStore[min] = temp;
   }
}  