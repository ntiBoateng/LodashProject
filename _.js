const _ = {
    clamp(number,lower,upper){
    var lowerClampedValue =Math.max(number,lower);
    var clampedValue  =Math.min(lowerClampedValue,upper);
    return clampedValue;
    },
    inRange(number,start,end){
      if(end===undefined){
        end=start
        start=0
      }
      if(start>end){
        var temp=end
        end=start
        start=temp
      }
      var isInRange = start<=number && number< end
      return isInRange
    },
    words(string){
      var words=string.split(' ')
      return words;
    },
    pad(string,length){
      if(length<=string.length){
        return string;
      }
      var startPaddingLength=Math.floor((length-string.length)/2);
      
      var endPaddingLength=length-string.length-startPaddingLength;
      var paddedString=' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength) ;
      return paddedString;
    },
    has(object,key){
      var hasValue= object[key]!=undefined;
      return hasValue;
    },
   invert(object){
     let invertedObject = {};
     for(let key in object){
       const originalObject=object[key];
       invertedObject={originalValue:key};
     }
     return invertedObject;
   },
   findKey(object,predicate){
     for(let key in object){
       const value=object[key];
       var predicateReturnValue=predicate(value);
       if(predicateReturnValue){
         return key;
       }
       return undefined;
     }
   },
   drop(array,n){
     if(n===undefined){
       n=1;
     }
     let droppedArray =array.slice(n,array.length);
     return droppedArray ;
   },
   dropWhile(array,predicate){
     const cb=(element,index)=>{
       return !predicate(element,index,array);
     }
     let dropNumber = array.findIndex(cb);
     let droppedArray=this.drop(array,dropNumber);
     return droppedArray;
   },
   chunk(array,size=1){
    
     let arrayChunks =[];
     let counter=0;
     for(let i=0;i<array.length;i+=size){
      
      let arrayChunk= array.slice(i,i+size);
      arrayChunks.push(arrayChunk);
     }
     return arrayChunks;
   }
  };
  
  
  
  
  
 
  




// Do not write or modify code below this line.
module.exports = _;