document.addEventListener('DOMContentLoaded', function() {
    let query1Wrapper = document.getElementById('query_1_wrapper');
    let query2Wrapper = document.getElementById('query_2_wrapper');
    let radioButtons = document.querySelectorAll('input[name="query"]');
    let bgPrimary = 'hsl(148, 38%, 91%)'; 
  
    function updateBackground() {
      query1Wrapper.style.backgroundColor = '';
      query2Wrapper.style.backgroundColor = '';
  
      if (document.getElementById('query_1').checked) {
        query1Wrapper.style.backgroundColor = bgPrimary;
      } else if (document.getElementById('query_2').checked) {
        query2Wrapper.style.backgroundColor = bgPrimary;
      }
    }
  
    radioButtons.forEach(function(radio) {
      radio.addEventListener('change', updateBackground);
    });
  
    updateBackground();
  });
  