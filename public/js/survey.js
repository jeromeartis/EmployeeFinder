$(function () {

  /**
   * Get the form info from the page.
   * Clear the form.
   * Send the data in a POST request.
   */
  const renderEmployees = function (event) {
    event.preventDefault();





    // Here we grab the form elements
    const newAnswers = {
      name: $('#fullName').val().trim(),
      scores: [$('#questionOne').val().trim(),
               $('#QuestionTwo').val().trim(),
               $('#QuestionThree').val().trim(),
               $('#QuestionFour').val().trim(),
               $('#QuestionFive').val().trim(),
               $('#QuestionSix').val().trim(),
               $('#QuestionSeven').val().trim(),
               $('#QuestionEight').val().trim(),
               $('#QuestionNine').val().trim(),
               $('#QuestionTen').val().trim()
]};
  $('#fullName').val('');
  $('#questionOne').val('');
  $('#QuestionTwo').val('');
  $('#QuestionThree').val('');
  $('#QuestionFour').val('');
  $('#QuestionFive').val('');
  $('#QuestionSix').val('');
  $('#QuestionSeven').val('');
  $('#QuestionEight').val('');
  $('#QuestionNine').val('');
  $('#QuestionTen').val('');

    $.ajax({
      method: 'POST',
      url: 'api/employees',
      data: newAnswers
    })
  }

  const render = function (dataList, parent){
  for (let i = 0; i < dataList.length; i++){
    console.log(dataList[i].scores);


  }
  }

  const getEmployees = function(){
    $.ajax({
      method: 'GET',
      url: 'api/employees'
    }).then(function(data){
      render(data,$('.employees'))
    })
    }







  $('#submit').on('click',getEmployees);
  $('#submit').on('click', renderEmployees);
});
