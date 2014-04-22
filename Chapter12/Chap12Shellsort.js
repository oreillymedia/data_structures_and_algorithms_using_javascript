function shellsort() {
   for (var g = 0; g < this.gaps.length; ++g) {
      for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
         var temp = this.dataStore[i];
         for (var j = i; j >= this.gaps[g] && 
                         this.dataStore[j-this.gaps[g]] > temp; 
              j -= this.gaps[g]) {
            this.dataStore[j] = this.dataStore[j - this.gaps[g]];
         }
         this.dataStore[j] = temp;
      }
   }
}