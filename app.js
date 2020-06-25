var click = document.getElementById("click");
click.addEventListener("click",function(){
    var qo = [
        ['You’re off to great places, today is your day. Your mountain is waiting, so get on your way.'],
        ['You always pass failure on the way to success.' ],
        ['No one is perfect - that’s why pencils have erasers.'],
        ['Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.'],
        ['You’re braver than you believe, and stronger than you seem, and smarter than you think.'],
        ['It always seems impossible until it is done'],
        ['Keep your face to the sunshine and you cannot see a shadow.'],
        ['Once you replace negative thoughts with positive ones, you’ll start having positive results.']
    ]
    var red = document.getElementById("red");

    var timer = setTimeout(()=>{
          console.log('sdsd');
          click.style.display = 'none'
    },100);

     var wait = setTimeout(() => {
           red.style.display = 'block'
     }, 900);

    var shows = setTimeout(() => {
        var math = Math.floor(Math.random() * qo.length);

        var quotes = document.getElementById("quotes").innerHTML = qo[math];
       
        click.style.display = 'none'
        red.style.display = 'none'
    }, 4100);
})