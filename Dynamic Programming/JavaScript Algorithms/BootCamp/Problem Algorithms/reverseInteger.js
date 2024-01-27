//Given an integer, return an integer that is the reverse ordering
//of numbers.


const reverseInt = (n) => {
    const reversed = n.toString().split('').reverse().join('');
  
    return parseInt(reversed, 10) * Math.sign(n);
  }
  console.log(reverseInt(15));//51
  console.log(reverseInt(981));//189
  console.log(reverseInt(500));//5
  console.log(reverseInt(-90));//-9
  console.log(reverseInt(-15));//-51