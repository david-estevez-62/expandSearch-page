var status = 'retract';



function expandSearch(){
  // $('#searchPg').toggle(200);
  // $('#searchBar').toggleClass('fullscreen');
  // var searchBar = $(this)[0];

  if(status === 'retract'){
    var searchBar = $(this).children()[0];

    $(this).animate({height: "100%", width: "100%"}, 175);
    searchBar.className = 'class2';
    // $(this).children.removeClass('class1')
    var span = document.createElement('span');
    var text = document.createTextNode('X');
    span.appendChild(text);
    span.addEventListener("click", retractSearch)
    $(this).append(span);
    status = 'expand';
  }

  // else if(status === 'expand'){
  //   $(this).animate({height: "60px", width: "575px"}, 175);
  //   status = 'retract';
  // }
  // $("#searchPg input").focus();
}




function retractSearch(e){
  e.stopPropagation();
  // $('#searchPg').toggle(200);
  // $('#searchBar').toggleClass('fullscreen');
console.log('hi')
  if(status === 'expand'){
    var searchBar = $(this).siblings()[0];
    console.log(searchBar)
    searchBar.className = 'class1';


    $(this).parent().animate({height: "60px", width: "575px"}, 175);
    $(this)[0].remove();
    status = 'retract';
  }

}

$('#searchBar').on('click', expandSearch);

// $('#searchBar span').on('click', retractSearch)


// $('#searchBar input[type="search"]').on('click', function(e){
//   e.stopPropagation();
//   console.log('hi');
// });