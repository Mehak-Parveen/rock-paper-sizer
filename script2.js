function calculate_love_score(){
    const name1 = document.getElementById('user').value;
    const name2 = document.getElementById('frnd').value;

    let combined_names = name1 + name2 ;
    let lower_names = combined_names.toLowerCase();


    let t = (lower_names.match(/t/g)|| []).length;
    let r = (lower_names.match(/r/g)|| []).length;
    let u = (lower_names.match(/u/g)|| []).length;
    let e1 =(lower_names.match(/e/g)|| []).length;
    const first_digit = t + r + u + e1;

    let l = (lower_names.match(/l/g) || []).length;
    let o = (lower_names.match(/o/g) || []).length;
    let v = (lower_names.match(/v/g) || []).length;
    let e2 =(lower_names.match(/e/g) || []).length;
    const second_digit = l + o + v + e2;

    // Combine the digits to form a score
  const score = parseInt(`${first_digit}${second_digit}`);

  // Display the result
  document.getElementById('result').innerText = ` ${score}%`;
}