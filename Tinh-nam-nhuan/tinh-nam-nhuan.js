let year= parseInt(prompt("Enter a year"));
    if (year %4==0){
        if (year %100==0){
            if (year %400==0){
                alert("la nam nhuan");
            }
            else {
                alert("k phai la nam nhuan");
            }
        } else {
            alert("La nam nhuan");
        }
    } else {
        alert("k phai La nam nhuan");
    }
