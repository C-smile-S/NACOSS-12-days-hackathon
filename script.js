//challenge 1

function withdraw(str) {
  return str.replace(/[aeiou]+/gi, '');
};

a = withdraw("michael");

alert(a);

//got familiar with regular expression the(/a/ig)
function gotten(plan){
	return plan.split(/[aeiou]/i).join("");
}
console.log(gotten("codedsmiles"));


// challenge 2


//challenge 3

const str = "racecar";

const palindrome = (instr) => {

instr = instr.replace(/\w/g, "");
instr = instr.toLowerCase();

return instr = instr.split("").reverse().join("");
}

console.log(palindrome(str));